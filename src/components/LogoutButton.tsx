'use client'

import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline"

export default function LogoutButton() {

  const handleLogout = async () => {
    try {
      console.log('🔐 Logout initiated - clearing all cookies and markers');
      
      // Step 1: Set logout marker FIRST to immediately trigger middleware
      const logoutMarkerSettings = [
        'Path=/; Max-Age=300', // 5 minutes
        'Path=/; Domain=.dev.amelia.com; Max-Age=300',
        'Path=/; Domain=help.dev.amelia.com; Max-Age=300',
        'Path=/; Domain=.help.dev.amelia.com; Max-Age=300'
      ];
      
      logoutMarkerSettings.forEach(settings => {
        document.cookie = `logout_initiated=true; ${settings}`;
        console.log(`🍪 Setting logout marker: logout_initiated=true; ${settings}`);
      });

      // Step 2: Clear all authentication cookies more comprehensively  
      const cookieSettings = [
        'Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT', // Root path, no domain
        'Path=/; Domain=' + window.location.hostname + '; Expires=Thu, 01 Jan 1970 00:00:00 GMT', // Current domain
        'Path=/; Domain=.dev.amelia.com; Expires=Thu, 01 Jan 1970 00:00:00 GMT',
        'Path=/; Domain=help.dev.amelia.com; Expires=Thu, 01 Jan 1970 00:00:00 GMT',
        'Path=/; Domain=.help.dev.amelia.com; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
      ];

      const cookieNames = ['cognito_id_token', 'cognito_access_token', 'cognito_refresh_token'];
      
      cookieNames.forEach(cookieName => {
        cookieSettings.forEach(settings => {
          document.cookie = `${cookieName}=; ${settings}`;
          console.log(`🍪 Clearing: ${cookieName}=; ${settings}`);
        });
      });
      
      console.log('✅ Logout markers set and cookies cleared');
      
      // Step 3: Redirect to auth app logout endpoint to properly terminate Amplify session
      console.log('🔄 Redirecting to auth app to terminate Amplify session');
      window.location.href = 'https://help.dev.amelia.com/auth/logout?force=true&return_url=' + 
        encodeURIComponent('https://help.dev.amelia.com/auth/login?logged_out=true');
      
    } catch (error) {
      console.error('❌ Logout failed:', error);
      
      // Fallback: Set logout marker and redirect to auth logout
      document.cookie = 'logout_initiated=true; Path=/; Max-Age=300';
      window.location.href = 'https://help.dev.amelia.com/auth/logout?force=true&return_url=' + 
        encodeURIComponent('https://help.dev.amelia.com/auth/login?logged_out=true&error=fallback');
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