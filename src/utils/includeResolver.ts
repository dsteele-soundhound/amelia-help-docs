import fs from 'fs';
import path from 'path';

// Cache for parsed snippets to improve performance
const snippetCache = new Map<string, string>();

// Track navigation includes to avoid duplication (per processing session)
const seenNavigationIncludes = new Set<string>();

// Store heading ID mappings for Markdoc processing
const headingIdMappings = new Map<string, string>();

/**
 * Parses a snippet file and extracts content within <snippet> tags
 * @param filePath - Path to the snippet file
 * @param snippetId - ID of the snippet to extract
 * @returns The content within the snippet tags
 */
export function parseSnippetFile(filePath: string, snippetId: string): string {
  const cacheKey = `${filePath}#${snippetId}`;
  
  if (snippetCache.has(cacheKey)) {
    return snippetCache.get(cacheKey)!;
  }

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const snippet = extractSnippet(content, snippetId);
    
    snippetCache.set(cacheKey, snippet);
    return snippet;
  } catch (error) {
    console.warn(`Failed to read snippet file: ${filePath}`, error);
    return `[ERROR: Could not load snippet from ${filePath}#${snippetId}]`;
  }
}

/**
 * Extracts content between <snippet id="snippetId"> and </snippet> tags
 * @param content - File content
 * @param snippetId - ID of the snippet to extract
 * @returns The content within the snippet tags
 */
function extractSnippet(content: string, snippetId: string): string {
  const snippetRegex = new RegExp(
    `<snippet\\s+id=["']${snippetId}["'][^>]*>([\\s\\S]*?)</snippet>`,
    'i'
  );
  
  const match = content.match(snippetRegex);
  if (match && match[1]) {
    return match[1].trim();
  }
  
  return `[ERROR: Snippet with id "${snippetId}" not found]`;
}

/**
 * Resolves the file path for an include statement
 * @param fromFile - The file name specified in the include
 * @param currentDir - The directory of the current document
 * @returns The resolved absolute path
 */
export function resolveIncludePath(fromFile: string, currentDir: string): string {
  // First, try relative to current directory
  let resolvedPath = path.resolve(currentDir, fromFile);
  
  if (fs.existsSync(resolvedPath)) {
    return resolvedPath;
  }
  
  // Try in the Snippets directory
  const snippetsDir = path.join(process.cwd(), 'src/app/docs/topics-markdoc/Snippets');
  resolvedPath = path.resolve(snippetsDir, fromFile);
  
  if (fs.existsSync(resolvedPath)) {
    return resolvedPath;
  }
  
  // Try in team templates
  const teamTemplatesDir = path.join(snippetsDir, '$-Team-Templates');
  resolvedPath = path.resolve(teamTemplatesDir, fromFile);
  
  if (fs.existsSync(resolvedPath)) {
    return resolvedPath;
  }
  
  // Try searching recursively in topics-markdoc
  const topicsDir = path.join(process.cwd(), 'src/app/docs/topics-markdoc');
  const foundPath = findFileRecursively(topicsDir, fromFile);
  
  if (foundPath) {
    return foundPath;
  }
  
  throw new Error(`Include file not found: ${fromFile}`);
}

/**
 * Recursively searches for a file in a directory
 * @param dir - Directory to search in
 * @param fileName - Name of the file to find
 * @returns The path if found, null otherwise
 */
function findFileRecursively(dir: string, fileName: string): string | null {
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isFile() && item === fileName) {
        return fullPath;
      } else if (stat.isDirectory()) {
        const result = findFileRecursively(fullPath, fileName);
        if (result) {
          return result;
        }
      }
    }
  } catch {
    // Ignore permission errors and continue searching
  }
  
  return null;
}

/**
 * Preprocess heading IDs from Writerside syntax to HTML-compatible format
 * @param content - The markdown content to process
 * @returns Content with heading IDs converted
 */
export function preprocessHeadingIds(content: string): string {
  // Clear previous mappings
  headingIdMappings.clear();
  
  // Convert {% #id %} syntax to standard markdown headings and store ID mappings
  return content.replace(/^(#{1,6})\s*(.+?)\s*\{%\s*#([^}]+)\s*%\}/gm, (match, hashes, text, id) => {
    // If text is empty or just the ID, use the ID as the heading text
    const cleanText = text.trim();
    const headingText = cleanText || id;
    
    // Store the mapping of heading text to ID
    headingIdMappings.set(headingText, id);
    
    // Return clean heading without visible ID syntax
    return `${hashes} ${headingText}`;
  });
}

/**
 * Get stored heading ID mappings
 */
export function getHeadingIdMappings(): Map<string, string> {
  return headingIdMappings;
}

/**
 * Processes include tags recursively within content
 * @param content - Content that may contain include tags
 * @param currentDir - Directory context for resolving relative paths
 * @param depth - Current recursion depth to prevent infinite loops
 * @returns Content with all includes resolved
 */
export function processIncludes(content: string, currentDir: string, depth = 0): string {
  // Prevent infinite recursion
  if (depth > 10) {
    return content;
  }
  
  // Reset navigation tracking for new document processing
  if (depth === 0) {
    seenNavigationIncludes.clear();
  }
  
  // First preprocess heading IDs
  const preprocessedContent = depth === 0 ? preprocessHeadingIds(content) : content;
  
  const includeRegex = /{%\s*include\s+from=["']([^"']+)["']\s+element-id=["']([^"']+)["']\s*\/%}/g;
  
  return preprocessedContent.replace(includeRegex, (match, fromFile, elementId) => {
    try {
      // Check if this is a navigation snippet that should only appear once
      const navigationSnippets = ['Glossary_Navigation.md'];
      const isNavigationSnippet = navigationSnippets.some(nav => fromFile.includes(nav));
      
      if (isNavigationSnippet) {
        const includeKey = `${fromFile}#${elementId}`;
        if (seenNavigationIncludes.has(includeKey)) {
          // Skip subsequent navigation includes
          return '';
        }
        seenNavigationIncludes.add(includeKey);
      }
      
      const includePath = resolveIncludePath(fromFile, currentDir);
      const snippetContent = parseSnippetFile(includePath, elementId);
      
      // Recursively process includes in the snippet content
      const includeDir = path.dirname(includePath);
      return processIncludes(snippetContent, includeDir, depth + 1);
    } catch (error) {
      console.warn(`Failed to resolve include: ${fromFile}#${elementId}`, error);
      return `[ERROR: Could not resolve include ${fromFile}#${elementId}]`;
    }
  });
}

/**
 * Clears the snippet cache (useful for development)
 */
export function clearSnippetCache(): void {
  snippetCache.clear();
}