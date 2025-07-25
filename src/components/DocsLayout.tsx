import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import Breadcrumb from './Breadcrumb';
import TableOfContents from './TableOfContents';
import ThemeToggle from './ThemeToggle';
import { getNavigationItems } from '@/utils/navigationGenerator';

// Helper function to check if content has headings for TOC
function hasHeadingsForTOC(content?: string): boolean {
  if (!content) return false;
  
  const headingRegex = /^(#{1,6})\s+(.+?)(?:\s+(?:\{%\s*#([^}]+)\s*%\}|\{#([^}]+)\}))?$/gm;
  
  // Patterns to exclude from TOC (repeated navigation/template content)
  const excludePatterns = [
    /^Related Terms or Concepts/i,
    /^What is .+\?/i,
    /^More Resources/i,
    /^Navigation/i
  ];

  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const rawText = match[2].trim();
    const cleanText = rawText.replace(/\s*\{[^}]*\}$/, '').trim();
    
    // Check if this heading should be excluded
    const shouldExclude = excludePatterns.some(pattern => pattern.test(cleanText));
    
    if (!shouldExclude) {
      return true; // Found at least one valid heading
    }
  }
  
  return false;
}

interface DocsLayoutProps {
  children: ReactNode;
  breadcrumbs?: Array<{ name: string; href?: string }>;
  content?: string; // Raw markdown content for TOC generation
}

export default async function DocsLayout({ children, breadcrumbs = [], content }: DocsLayoutProps) {
  const navigation = await getNavigationItems();
  const hasTOC = hasHeadingsForTOC(content);

  return (
    <div className="flex">
      <Sidebar navigation={navigation} />
      <main className={`flex-1 ml-64 min-h-screen bg-white dark:bg-gray-900 ${hasTOC ? 'lg:mr-64' : ''}`}>
        <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 px-8 py-4">
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              Documentation
            </div>
            <ThemeToggle variant="circle" startPoint="top-right" />
          </div>
        </header>
        <div className="max-w-4xl mx-auto p-8">
          {breadcrumbs.length > 0 && (
            <div className="mb-6">
              <Breadcrumb items={breadcrumbs} />
            </div>
          )}
          <div className="prose-docs">
            {children}
          </div>
        </div>
      </main>
      <TableOfContents content={content} />
    </div>
  );
}