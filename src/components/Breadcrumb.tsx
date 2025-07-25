'use client';

import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index > 0 && (
            <ChevronRightIcon className="w-4 h-4 breadcrumb-separator mx-2" />
          )}
          {item.href && item.href !== '' ? (
            <Link
              href={item.href}
              className="text-primary-400 hover:text-primary-500 hover:underline"
            >
              {item.name}
            </Link>
          ) : (
            <span className="text-gray-700 dark:text-gray-300 font-medium">{item.name}</span>
          )}
        </div>
      ))}
    </nav>
  );
}