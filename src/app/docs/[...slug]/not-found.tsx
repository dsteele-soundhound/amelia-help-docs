import DocsLayout from '@/components/DocsLayout';

export default function NotFound() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Page Not Found' },
  ];

  return (
    <DocsLayout breadcrumbs={breadcrumbs}>
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The documentation page you're looking for doesn't exist.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/" className="btn-primary">
            Go Home
          </a>
          <a href="/docs" className="btn-secondary">
            Browse Documentation
          </a>
        </div>
      </div>
    </DocsLayout>
  );
}