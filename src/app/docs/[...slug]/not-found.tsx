import DocsLayout from '@/components/DocsLayout';
import Link from 'next/link';

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
          The documentation page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/docs" className="btn-secondary">
            Browse Documentation
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}