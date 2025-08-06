import DocsLayout from '@/components/DocsLayout';
import Link from 'next/link';
import AuthWrapper from '@/components/AuthWrapper';

export default function Home() {
  const breadcrumbs = [
    { name: 'Home' }
  ];

  return (
    <AuthWrapper>
      <DocsLayout breadcrumbs={breadcrumbs}>
        <div className="text-center py-12">
        <h1 className="text-4xl font-bold text-primary-900 dark:text-primary-100 mb-6">
          Welcome to the Documentation Site
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          This documentation site is powered by Markdoc and Next.js, featuring a 
          SoundHound-inspired design with purple and lavender accents.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/docs/A-Getting-Started-Amelia/A00-Landing"
            className="btn-primary"
          >
            Get Started
          </Link>
          <Link
            href="/docs/B-Amelia-UG/B01-Admin/B01-00-General"
            className="btn-secondary"
          >
            Browse Documentation
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <div className="card">
          <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-3">
            Getting Started
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Learn the basics and get up to speed quickly with our platform.
          </p>
          <Link href="/docs/A-Getting-Started-Amelia" className="text-primary-400 hover:text-primary-500 font-medium">
            Read more →
          </Link>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-3">
            User Guide
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Comprehensive guides for administrators and end users.
          </p>
          <Link href="/docs/B-Amelia-UG" className="text-primary-400 hover:text-primary-500 font-medium">
            Read more →
          </Link>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-3">
            Operations
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Tools and best practices for system operations and monitoring.
          </p>
          <Link href="/docs/C-Amelia-Ops" className="text-primary-400 hover:text-primary-500 font-medium">
            Read more →
          </Link>
        </div>
      </div>
      </DocsLayout>
    </AuthWrapper>
  );
}
