'use client';

import { useEffect, useState, useMemo, useCallback } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content?: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  // Memoize TOC generation to prevent unnecessary rebuilds
  const toc = useMemo(() => {
    if (!content) return [];
    
    // Extract headings from the content - handle both Markdoc {% #id %} and {#id} syntax
    const headingRegex = /^(#{1,6})\s+(.+?)(?:\s+(?:\{%\s*#([^}]+)\s*%\}|\{#([^}]+)\}))?$/gm;
    const tocItems: TocItem[] = [];
    let match;

    // Patterns to exclude from TOC (repeated navigation/template content)
    const excludePatterns = [
      /^Related Terms or Concepts/i,  // Match "Related Terms or Concepts" even with trailing text
      /^What is .+\?/i,
      /^More Resources/i,
      /^Navigation/i
    ];

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const rawText = match[2].trim();
      
      // Clean the text by removing any trailing ID attributes for filtering purposes
      const cleanText = rawText.replace(/\s*\{[^}]*\}$/, '').trim();
      
      // Skip headings that match exclude patterns (using clean text)
      const shouldExclude = excludePatterns.some(pattern => pattern.test(cleanText));
      
      if (shouldExclude) {
        continue;
      }
      
      // Handle both {% #id %} and {#id} syntax - use whichever group matched
      const id = match[3] || match[4] || cleanText.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      
      // Use clean text for display
      tocItems.push({ id, text: cleanText, level });
    }
    
    return tocItems;
  }, [content]);

  // Debounced scroll handler to reduce excessive state updates
  const handleScroll = useCallback(() => {
    const headings = toc.map(item => document.getElementById(item.id)).filter(Boolean);
    const scrollPosition = window.scrollY + 100;

    for (let i = headings.length - 1; i >= 0; i--) {
      const heading = headings[i];
      if (heading && heading.offsetTop <= scrollPosition) {
        const newActiveId = heading.id;
        if (newActiveId !== activeId) {
          setActiveId(newActiveId);
          // Removed auto-scroll behavior to prevent jarring visual movement
        }
        break;
      }
    }
  }, [toc, activeId]);

  useEffect(() => {
    // Debounce scroll handler to reduce excessive calls
    let timeoutId: NodeJS.Timeout;
    const debouncedHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    window.addEventListener('scroll', debouncedHandleScroll);
    handleScroll(); // Set initial active heading

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If exact ID not found, try to find heading with matching text
      const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
      
      // Try multiple matching strategies
      const matchingHeading = Array.from(headings).find(h => {
        const headingText = h.textContent?.trim();
        const headingId = h.id?.trim();
        if (!headingText) return false;
        
        // Strategy 1: ID attribute matches (with trimming and case insensitive)
        if (headingId && headingId.toLowerCase() === id.toLowerCase()) return true;
        
        // Strategy 2: Exact text match (case insensitive)
        if (headingText.toLowerCase() === id.toLowerCase()) return true;
        
        // Strategy 3: Text matches single letter sections (A, B, C, etc.)
        if (headingText.length === 1 && headingText.toLowerCase() === id.toLowerCase()) return true;
        
        return false;
      });
      
      if (matchingHeading) {
        matchingHeading.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };


  const hasContent = content && toc.length > 0;

  // Don't render the component if there are no headings
  if (!hasContent) {
    return null;
  }

  const getTocItemClasses = (item: TocItem, isActive: boolean) => {
    const baseClasses = "block w-full text-left rounded-md transition-all duration-300 group overflow-hidden";
    
    // Level-based styling to match sidebar hierarchy
    switch (item.level) {
      case 1: // H1 - Primary level
        return `${baseClasses} py-2.5 px-3 text-sm font-semibold ${
          isActive
            ? 'bg-primary-100 text-primary-900 dark:bg-primary-800 dark:text-primary-100'
            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
        }`;
      
      case 2: // H2 - Secondary level  
        return `${baseClasses} py-2 pl-7 pr-3 text-sm ${
          isActive
            ? 'bg-primary-50 text-primary-700 font-medium dark:bg-primary-900/30 dark:text-primary-200'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300'
        }`;
      
      case 3: // H3 - Tertiary level
        return `${baseClasses} py-1.5 pl-10 pr-3 text-xs ${
          isActive
            ? 'text-primary-600 font-medium dark:text-primary-300'
            : 'text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400'
        }`;
      
      default: // H4+ - Deeper levels
        const indentLevel = 10 + (item.level - 3) * 3;
        return `${baseClasses} py-1.5 text-xs ${
          isActive
            ? 'text-primary-600 font-medium dark:text-primary-300'
            : 'text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400'
        }`.replace('pl-10', `pl-${indentLevel}`);
    }
  };

  return (
    <div className="flex h-screen w-64 flex-col fixed right-0 top-0 hidden lg:flex">
      {/* Table of Contents content */}
      <div className="flex flex-1 flex-col overflow-y-auto bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="flex flex-shrink-0 items-center px-6 py-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
            On this page
          </h2>
        </div>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col px-4 py-6">
          <div className="space-y-1 transition-opacity duration-300">
            {toc.map((item, index) => (
              <button
                key={`${item.id}-${index}`}
                data-toc-id={item.id}
                onClick={() => scrollToHeading(item.id)}
                className={getTocItemClasses(item, activeId === item.id)}
              >
                <span className="block break-words leading-tight">{item.text}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Footer - Optional spacing element */}
        <div className="flex flex-shrink-0 p-4">
          <div className="text-xs text-gray-400 dark:text-gray-500">
            {toc.length} section{toc.length !== 1 ? 's' : ''}
          </div>
        </div>
      </div>
    </div>
  );
}