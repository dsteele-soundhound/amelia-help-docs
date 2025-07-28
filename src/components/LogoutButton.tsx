'use client'

import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline"

export default function LogoutButton() {

  const handleLogout = async () => {
    try {
      // Clear all authentication cookies
      document.cookie = 'cognito_id_token=; Path=/; Domain=.dev.amelia.com; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
      document.cookie = 'cognito_access_token=; Path=/; Domain=.dev.amelia.com; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
      document.cookie = 'cognito_refresh_token=; Path=/; Domain=.dev.amelia.com; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
      
      // Also clear for the current domain in case there are any
      document.cookie = 'cognito_id_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
      document.cookie = 'cognito_access_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
      document.cookie = 'cognito_refresh_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
      
      // Redirect to logout page or refresh to trigger Lambda@Edge authentication
      window.location.href = '/login'
    } catch (error) {
      console.error('Logout failed:', error)
      // Fallback: just refresh the page to trigger authentication
      window.location.reload()
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