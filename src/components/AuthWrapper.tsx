'use client';

import { useEffect, useState, ReactNode } from 'react';

interface AuthWrapperProps {
  children: ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
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

      console.log('🔍 AuthWrapper check:', {
        hasIdToken,
        hasAccessToken, 
        logoutInitiated
      });

      if (logoutInitiated || !hasIdToken || !hasAccessToken) {
        console.log('🔒 AuthWrapper: No auth, redirecting to login');
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
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect
  }

  return <>{children}</>;
}