'use client';

import DocsLayout from '@/components/DocsLayout';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for authentication tokens
    const checkAuth = () => {
      const cookies = document.cookie.split(';').reduce((acc, cookie) => {
        const [key, value] = cookie.trim().split('=');
        if (key && value) acc[key] = value;
        return acc;
      }, {} as Record<string, string>);

      const hasIdToken = !!cookies.cognito_id_token;
      const hasAccessToken = !!cookies.cognito_access_token;
      const logoutInitiated = cookies.logout_initiated === 'true';

      console.log('🔍 Homepage auth check:', {
        hasIdToken,
        hasAccessToken, 
        logoutInitiated
      });

      if (logoutInitiated || !hasIdToken || !hasAccessToken) {
        console.log('🔒 Homepage: No auth, redirecting to login');
        window.location.href = 'https://help.dev.amelia.com/login';
        return;
      }

      setIsAuthenticated(true);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect
  }

  const breadcrumbs = [
    { name: 'Home' }
  ];

  return (
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
  );
}
