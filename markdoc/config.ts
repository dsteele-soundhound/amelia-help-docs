import { Config, Tag } from '@markdoc/markdoc';
import { resolveIncludePath, parseSnippetFile, getHeadingIdMappings } from '../src/utils/includeResolver';
import path from 'path';

// Define variables that can be used throughout documentation
const variables = {
  'General.Amelia.application': 'Amelia',
  'B01-Admin.Administration.workspace': 'Administration',
  // Add more variables as needed from the processed files
};

// Define custom include tag to handle the include statements with server-side resolution
const include = {
  render: 'div',
  attributes: {
    from: {
      type: String,
      required: true,
    },
    'element-id': {
      type: String,
      required: true,
    },
  },
  transform(node: any, config: Config) {
    const { from, 'element-id': elementId } = node.attributes;
    
    try {
      // Get the current document context from config if available
      const currentDir = (config as any).currentDir || process.cwd();
      const includePath = resolveIncludePath(from, currentDir);
      const snippetContent = parseSnippetFile(includePath, elementId);
      
      // Parse the snippet content as Markdoc to handle nested markup
      const snippetAst = require('@markdoc/markdoc').parse(snippetContent);
      const snippetTransformed = require('@markdoc/markdoc').transform(snippetAst, config);
      
      // Return the transformed content instead of raw HTML
      return snippetTransformed;
    } catch (error) {
      console.warn(`Failed to resolve include: ${from}#${elementId}`, error);
      return new Tag('div', {
        className: 'include-error bg-red-50 border border-red-200 text-red-700 p-2 rounded text-sm',
      }, [
        `[ERROR: Could not resolve include ${from}#${elementId}]`
      ]);
    }
  },
};

export const config: Config = {
  variables,
  tags: {
    include,
  },
  nodes: {
    heading: {
      render: 'heading',
      attributes: {
        id: { type: String },
        level: { type: Number, required: true },
      },
      transform(node: any, config: Config) {
        const attributes = node.transformAttributes(config);
        const children = node.transformChildren(config);
        
        // Get the heading text to look up the ID mapping
        const headingText = children.map((child: any) => 
          typeof child === 'string' ? child : child.children?.join('') || ''
        ).join('').trim();
        
        // Get the ID from our mappings
        const headingIdMappings = getHeadingIdMappings();
        let headingId = headingIdMappings.get(headingText);
        
        // If no explicit ID, generate one from the heading text
        if (!headingId && headingText) {
          headingId = headingText.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        }
        
        return new Tag(
          `h${attributes.level}`,
          headingId ? { id: headingId.trim() } : {},
          children
        );
      },
    },
  },
  functions: {
    // Add custom functions if needed
  },
};