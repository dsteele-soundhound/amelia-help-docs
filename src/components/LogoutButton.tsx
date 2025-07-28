'use client'

import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline"

export default function LogoutButton() {

  const handleLogout = async () => {
    try {
      // Get current access token for revocation
      const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift();
        return null;
      };

      const accessToken = getCookie('cognito_access_token');
      
      // Revoke the session on Cognito if we have an access token
      if (accessToken) {
        try {
          await fetch('https://help-amelia-auth.auth.us-east-2.amazoncognito.com/oauth2/revoke', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
              token: accessToken,
              client_id: '52vp9uqd86bdkvid3il5vumv03'
            })
          });
        } catch (revokeError) {
          console.warn('Token revocation failed:', revokeError);
          // Continue with logout even if revocation fails
        }
      }

      // Clear all authentication cookies (multiple variations to be thorough)
      const cookieSettings = [
        'Path=/; Domain=.dev.amelia.com; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=Lax',
        'Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=Lax',
        'Path=/; Domain=help.dev.amelia.com; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=Lax',
        'Path=/; Domain=.help.dev.amelia.com; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Secure; SameSite=Lax'
      ];

      const cookieNames = ['cognito_id_token', 'cognito_access_token', 'cognito_refresh_token'];
      
      cookieNames.forEach(cookieName => {
        cookieSettings.forEach(settings => {
          document.cookie = `${cookieName}=; ${settings}`;
        });
      });

      // Add a logout marker to prevent immediate re-login
      document.cookie = 'logout_initiated=true; Path=/; Domain=.dev.amelia.com; Max-Age=30; Secure; SameSite=Lax';
      
      // Redirect to Cognito logout URL to completely terminate the session
      const cognitoLogoutUrl = `https://help-amelia-auth.auth.us-east-2.amazoncognito.com/logout?client_id=52vp9uqd86bdkvid3il5vumv03&logout_uri=${encodeURIComponent('https://help.dev.amelia.com/login')}`;
      
      window.location.href = cognitoLogoutUrl;
      
    } catch (error) {
      console.error('Logout failed:', error);
      
      // Fallback: clear cookies and force reload
      document.cookie = 'cognito_id_token=; Path=/; Domain=.dev.amelia.com; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
      document.cookie = 'cognito_access_token=; Path=/; Domain=.dev.amelia.com; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
      document.cookie = 'cognito_refresh_token=; Path=/; Domain=.dev.amelia.com; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
      
      window.location.href = '/login?force_logout=1';
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