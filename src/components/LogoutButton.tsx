'use client'

import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline"

export default function LogoutButton() {

  const handleLogout = async () => {
    try {
      console.log('Logout initiated - redirecting to auth app for proper session termination');
      
      // Step 1: Clear all authentication cookies from docs app side
      const cookieSettings = [
        'Path=/; Domain=.dev.amelia.com; Expires=Thu, 01 Jan 1970 00:00:00 GMT',
        'Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT',
        'Path=/; Domain=help.dev.amelia.com; Expires=Thu, 01 Jan 1970 00:00:00 GMT',
        'Path=/; Domain=.help.dev.amelia.com; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
      ];

      const cookieNames = ['cognito_id_token', 'cognito_access_token', 'cognito_refresh_token'];
      
      cookieNames.forEach(cookieName => {
        cookieSettings.forEach(settings => {
          document.cookie = `${cookieName}=; ${settings}`;
        });
      });

      // Step 2: Set logout marker to ensure Lambda@Edge blocks any remaining requests
      const logoutMarkerSettings = [
        'Path=/; Domain=.dev.amelia.com; Max-Age=120',
        'Path=/; Max-Age=120',
        'Path=/; Domain=help.dev.amelia.com; Max-Age=120'
      ];
      
      logoutMarkerSettings.forEach(settings => {
        document.cookie = `logout_initiated=true; ${settings}`;
      });
      
      console.log('✅ Cookies cleared and logout marker set');
      
      // Step 3: Redirect to auth app logout endpoint which will handle Amplify signOut
      // The auth app should handle the session termination and redirect back to login
      window.location.href = 'https://help.dev.amelia.com/auth/logout?return_url=' + encodeURIComponent('https://help.dev.amelia.com/login');
      
    } catch (error) {
      console.error('Logout failed:', error);
      
      // Fallback: clear cookies and force reload
      document.cookie = 'cognito_id_token=; Path=/; Domain=.dev.amelia.com; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
      document.cookie = 'cognito_access_token=; Path=/; Domain=.dev.amelia.com; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
      document.cookie = 'cognito_refresh_token=; Path=/; Domain=.dev.amelia.com; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
      document.cookie = 'logout_initiated=true; Path=/; Max-Age=120';
      
      setTimeout(() => {
        window.location.href = '/login?force_logout=1';
      }, 100);
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="relative p-2 rounded-md transition-colors duration-200 hover:bg-primary-100 dark:hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400"
      aria-label="Sign out"
    >
      <ArrowRightStartOnRectangleIcon className="w-5 h-5" />
      <span>Sign Out</span>
    </button>
  )
}