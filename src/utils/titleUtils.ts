/**
 * Utility functions for cleaning up and mapping technical folder/file names 
 * to user-friendly titles for navigation and breadcrumbs
 */

import fs from 'fs';
import path from 'path';

// Writerside variable mappings parsed from v.list
let writersideVariables: Record<string, string> = {};

/**
 * Parse Writerside variables from v.list XML file
 */
function parseWritersideVariables(): Record<string, string> {
  if (Object.keys(writersideVariables).length > 0) {
    return writersideVariables; // Return cached variables
  }

  try {
    const vListPath = path.join(process.cwd(), '..', 'v.list');
    const xmlContent = fs.readFileSync(vListPath, 'utf8');
    
    // Simple regex to extract var name and value from XML
    const varRegex = /<var name="([^"]+)" value="([^"]*)"/g;
    let match;
    
    while ((match = varRegex.exec(xmlContent)) !== null) {
      const varName = match[1];
      const varValue = match[2];
      writersideVariables[varName] = varValue;
    }
  } catch (error) {
    console.warn('Failed to parse Writerside variables from v.list:', error);
  }
  
  return writersideVariables;
}

/**
 * Resolve Writerside variables in text
 */
export function resolveWritersideVariables(text: string): string {
  const variables = parseWritersideVariables();
  
  // Replace $variableName patterns
  return text.replace(/\$([A-Za-z0-9.-]+)/g, (match, varName) => {
    return variables[varName] || match; // Return original if not found
  });
}

// Main section mappings for top-level folders
const sectionMappings: Record<string, string> = {
  'A-Getting-Started-Amelia': 'Amelia Getting Started',
  'B-Amelia-UG': 'Amelia User Guide',
  'C-Amelia-Ops': 'Amelia Operations Guide',
  'D-Getting-Started-Autonomics': 'Autonomics Getting Started',
  'E-Autonomics-UG': 'Autonomics User Guide',
  'F-Autonomics-Ops': 'Autonomics Operations Guide',
  'G-Training Videos': 'Training Videos',
};

// Subsection mappings for admin and other areas
const subsectionMappings: Record<string, string> = {
  // Amelia Admin sections
  'B01-Admin': 'Administration',
  'B02-Amelia': 'Amelia Workspace',
  'B03-Digital-Empl': 'Digital Employees',
  'B04-Amelia-Answers': 'Amelia Answers',
  'B05-Contact-Center': 'Contact Center',
  'B06-Agent': 'Agent Console',
  'B07-Learning': 'Learning',
  'B08-Analytics': 'Analytics',
  'B09-Orchestrator': 'Orchestrator',
  'B10-Answer-Agents': 'Answer Agents',
  
  // Admin sub-areas
  'B01-00-General': 'General',
  'B01-01-Domains': 'Domains',
  'B01-02-Users': 'Users',
  'B01-03-Security': 'Security',
  'B01-04-UI': 'User Interface',
  'B01-05-Orchestrator': 'Orchestrator',
  'B01-06-Content-Packs': 'Content Packs',
  
  // Autonomics sections
  'E01-Operation': 'Operations',
  'E02-Autonomics': 'Autonomics Workspace',
  'E03-Reporting': 'Reporting',
  'E04-Config': 'Configuration',
  'E05-Admin': 'Administration',
  
  // Getting Started sections
  'A00-Landing': 'Landing',
  'A01-Glossary': 'Glossary',
  'A02-Quick-Start': 'Quick Start',
  'A04-Release-Notes': 'Release Notes',
  
  'D00-Landing': 'Landing',
  'D02-Quick-Start': 'Quick Start',
  
  // Operations sections
  'C01-Conductor-Engine-CLI-Tool': 'Conductor Engine CLI Tool',
  'C02-Eddie-Automated-Test-Tool': 'Eddie Automated Test Tool',
  'C03-Voice': 'Voice',
  'C04-Monitoring': 'Monitoring',
  
  'F00-ALite': 'Autonomics Lite',
};

/**
 * Clean technical prefixes from folder/file names
 */
export function cleanTechnicalPrefix(name: string): string {
  // Remove common technical prefixes like B01-, A02-, etc.
  const cleaned = name
    .replace(/^[A-Z]\d{2}-\d{2}_?\d*-?/, '') // Remove patterns like B01-01_, A02-00_, etc.
    .replace(/^[A-Z]\d{2}-\d{2}-/, '')       // Remove patterns like B01-01-
    .replace(/^[A-Z]\d{2}-/, '')             // Remove patterns like B01-
    .replace(/^[A-Z]\d{2}_/, '')             // Remove patterns like B01_
    .replace(/^z?[A-Z]\d{2}-\d{2}_\d{4}-/, '') // Remove patterns like zB01-02_0104-
    .replace(/_/g, ' ')                      // Replace underscores with spaces
    .replace(/-/g, ' ')                      // Replace hyphens with spaces
    .replace(/\s+/g, ' ')                    // Normalize multiple spaces
    .trim();
  
  return cleaned || name; // Return original if cleaning results in empty string
}

/**
 * Extract clean title from markdown h1 content
 */
export function cleanMarkdownTitle(title: string): string {
  let cleaned = title
    .replace(/^\s*#\s+/, '');              // Remove h1 markdown syntax
  
  // First resolve Writerside variables
  cleaned = resolveWritersideVariables(cleaned);
  
  // Then clean up any remaining technical patterns
  cleaned = cleaned
    .replace(/\$[A-Z]\d{2}-[^.]+\./g, '')    // Remove technical references like $B01-Admin.
    .replace(/\.feature\s*/g, '')            // Remove .feature references
    .replace(/\s+/g, ' ')                    // Normalize spaces
    .trim();
    
  return cleaned;
}

/**
 * Get user-friendly title for a path segment
 */
export function getCleanTitle(segment: string): string {
  // First check direct mappings
  if (sectionMappings[segment]) {
    return sectionMappings[segment];
  }
  
  if (subsectionMappings[segment]) {
    return subsectionMappings[segment];
  }
  
  // If no direct mapping, clean the technical prefix
  return cleanTechnicalPrefix(segment);
}

/**
 * Extract title from markdown content (first h1 tag)
 */
export function extractTitleFromMarkdown(content: string): string | null {
  // Look for the first h1 tag
  const h1Match = content.match(/^\s*#\s+(.+)$/m);
  
  if (h1Match && h1Match[1]) {
    return cleanMarkdownTitle(h1Match[1]);
  }
  
  return null;
}

/**
 * Generate clean breadcrumb items from URL slug
 */
export function generateCleanBreadcrumbs(
  slug: string[], 
  markdownTitle?: string
): Array<{ name: string; href?: string }> {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Documentation', href: '/docs' },
  ];

  let currentPath = '/docs';
  
  slug.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === slug.length - 1;
    
    let title: string;
    
    // For the last segment, prefer extracted markdown title
    if (isLast && markdownTitle) {
      title = markdownTitle;
    } else {
      title = getCleanTitle(segment);
    }
    
    breadcrumbs.push({
      name: title,
      href: isLast ? '' : currentPath,
    });
  });

  return breadcrumbs;
}

/**
 * Clean up navigation display names for consistency
 */
export function getNavigationDisplayName(name: string): string {
  // Handle special cases first
  const specialMappings: Record<string, string> = {
    'Landing': 'Getting Started',
    'Quick Start': 'Quick Start Guide',
    'General': 'Overview',
  };
  
  if (specialMappings[name]) {
    return specialMappings[name];
  }
  
  return name;
}