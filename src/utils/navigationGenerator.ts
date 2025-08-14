import { promises as fs } from 'fs';
import path from 'path';
import { getCleanTitle, getNavigationDisplayName } from './titleUtils';

export interface NavigationItem {
  name: string;
  href?: string;
  children?: NavigationItem[];
}

/**
 * Check if a directory contains any .md files
 */
async function hasMarkdownFiles(dirPath: string): Promise<boolean> {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    return entries.some(entry => entry.isFile() && entry.name.endsWith('.md'));
  } catch {
    return false;
  }
}

/**
 * Check if a directory has subdirectories
 */
async function hasSubdirectories(dirPath: string): Promise<boolean> {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    return entries.some(entry => entry.isDirectory());
  } catch {
    return false;
  }
}

/**
 * Check if a directory should be excluded from navigation
 */
async function shouldExcludeDirectory(dirPath: string, dirName: string): Promise<boolean> {
  // Exclude utility/template directories
  const excludedDirs = ['Snippets', 'topics-apps', 'topics-dev', 'Files'];
  if (excludedDirs.includes(dirName)) {
    return true;
  }
  
  // Check if directory contains only placeholder files
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    const files = entries.filter(entry => entry.isFile());
    
    // If directory has only PlaceholderFile.htm files, exclude it
    if (files.length > 0 && files.every(file => file.name === 'PlaceholderFile.htm')) {
      return true;
    }
  } catch {
    // If we can't read the directory, don't exclude it
  }
  
  return false;
}

/**
 * Generate navigation items for a directory
 */
async function generateNavigationForDirectory(
  dirPath: string,
  urlPrefix: string = '/docs'
): Promise<NavigationItem[]> {
  const items: NavigationItem[] = [];

  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    
    // Filter and sort directories (ignore files starting with 'z' and hidden files)
    const directories = entries
      .filter(entry => 
        entry.isDirectory() && 
        !entry.name.startsWith('.') && 
        !entry.name.startsWith('z')
      )
      .sort((a, b) => a.name.localeCompare(b.name));

    // Further filter out excluded directories
    const allowedDirectories = [];
    for (const dir of directories) {
      const fullDirPath = path.join(dirPath, dir.name);
      const shouldExclude = await shouldExcludeDirectory(fullDirPath, dir.name);
      if (!shouldExclude) {
        allowedDirectories.push(dir);
      }
    }

    for (const dir of allowedDirectories) {
      const fullDirPath = path.join(dirPath, dir.name);
      const urlPath = `${urlPrefix}/${dir.name}`;
      
      // Clean up the directory name for display
      const cleanName = getNavigationDisplayName(getCleanTitle(dir.name));
      
      // Check if this directory has markdown files or subdirectories
      const [hasMarkdown, hasSubdirs] = await Promise.all([
        hasMarkdownFiles(fullDirPath),
        hasSubdirectories(fullDirPath)
      ]);

      if (hasSubdirs) {
        // This directory has subdirectories, so it's a parent node
        const children = await generateNavigationForDirectory(fullDirPath, urlPath);
        
        const navItem: NavigationItem = {
          name: cleanName,
          children: children.length > 0 ? children : undefined,
        };

        // If this directory also has markdown files, it gets an href
        if (hasMarkdown) {
          navItem.href = urlPath;
        }

        items.push(navItem);
      } else if (hasMarkdown) {
        // This directory only has markdown files, so it's a leaf node
        items.push({
          name: cleanName,
          href: urlPath,
        });
      }
    }

  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
  }

  return items;
}

/**
 * Generate the complete navigation structure from the docs directory
 */
export async function generateNavigation(): Promise<NavigationItem[]> {
  const docsPath = path.join(process.cwd(), 'src/app/docs/topics-markdoc');
  
  try {
    // Check if the docs directory exists
    await fs.access(docsPath);
    return await generateNavigationForDirectory(docsPath);
  } catch (error) {
    console.error('Error generating navigation:', error);
    
    // Return fallback navigation if there's an error
    return [
      {
        name: 'Documentation',
        children: [
          { name: 'Getting Started', href: '/docs' }
        ]
      }
    ];
  }
}

/**
 * Generate navigation with error handling and fallback
 */
export async function getNavigationItems(): Promise<NavigationItem[]> {
  try {
    return await generateNavigation();
  } catch (error) {
    console.error('Failed to generate navigation:', error);
    
    // Return minimal fallback structure
    return [
      { name: 'Documentation', href: '/docs' }
    ];
  }
}