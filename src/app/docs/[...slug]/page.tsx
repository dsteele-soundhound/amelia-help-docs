import { notFound } from 'next/navigation';
import { promises as fs } from 'fs';
import path from 'path';
import Markdoc from '@markdoc/markdoc';
import { config } from '../../../../markdoc/config';
import DocsLayout from '@/components/DocsLayout';
import { generateCleanBreadcrumbs, extractTitleFromMarkdown } from '@/utils/titleUtils';
import { processIncludes } from '@/utils/includeResolver';

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getMarkdownFile(slug: string[]) {
  try {
    // Construct file path from slug
    const filePath = path.join(process.cwd(), 'src/app/docs/topics-markdoc', ...slug);
    
    // Try different possible file names
    const possibleFiles = [
      `${filePath}.md`,
      path.join(filePath, 'page.md'),
      path.join(filePath, `${slug[slug.length - 1]}.md`),
    ];

    // First try the basic file patterns
    for (const file of possibleFiles) {
      try {
        const content = await fs.readFile(file, 'utf8');
        return { content, filePath: file };
      } catch {
        continue;
      }
    }

    // If no direct file found, look for any .md file in the directory
    try {
      const dirPath = filePath;
      const files = await fs.readdir(dirPath);
      const mdFiles = files.filter(file => file.endsWith('.md'));
      
      if (mdFiles.length > 0) {
        // Use the first .md file found
        const targetFile = path.join(dirPath, mdFiles[0]);
        const content = await fs.readFile(targetFile, 'utf8');
        return { content, filePath: targetFile };
      }
    } catch {
      // Directory doesn't exist or can't be read
    }

    return null;
  } catch {
    return null;
  }
}

export default async function DocsPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Get the markdown file
  const result = await getMarkdownFile(slug);
  
  if (!result) {
    notFound();
  }

  // Process includes before parsing Markdoc
  const currentDir = path.dirname(result.filePath);
  const processedContent = processIncludes(result.content, currentDir);

  // Parse and transform the markdown
  const ast = Markdoc.parse(processedContent);
  const configWithContext = { 
    ...config, 
    currentDir // Pass context to config for any remaining includes
  };
  const content = Markdoc.transform(ast, configWithContext);
  const html = Markdoc.renderers.html(content);

  // Extract title from markdown content
  const markdownTitle = extractTitleFromMarkdown(result.content);

  // Generate clean breadcrumbs using the utility function
  const breadcrumbs = generateCleanBreadcrumbs(slug, markdownTitle || undefined);

  return (
    <DocsLayout breadcrumbs={breadcrumbs} content={processedContent}>
      <div 
        className="prose-docs"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </DocsLayout>
  );
}