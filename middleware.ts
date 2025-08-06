import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if user has been marked as logged out
  const logoutInitiated = request.cookies.get('logout_initiated');
  
  // Check for authentication tokens
  const cognitoIdToken = request.cookies.get('cognito_id_token');
  const cognitoAccessToken = request.cookies.get('cognito_access_token');
  
  // If logout was initiated, redirect to login
  if (logoutInitiated && logoutInitiated.value === 'true') {
    console.log('🔒 Middleware: Logout initiated - redirecting to login');
    const loginUrl = new URL('https://help.dev.amelia.com/auth/login');
    loginUrl.searchParams.set('return_url', request.url);
    return NextResponse.redirect(loginUrl);
  }
  
  // If no authentication tokens, redirect to login
  if (!cognitoIdToken || !cognitoAccessToken) {
    console.log('🔒 Middleware: No auth tokens - redirecting to login');
    const loginUrl = new URL('https://help.dev.amelia.com/auth/login');
    loginUrl.searchParams.set('return_url', request.url);
    return NextResponse.redirect(loginUrl);
  }
  
  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - /docs-assets (static assets)
     */
    '/((?!_next/static|_next/image|favicon.ico|docs-assets).*)',
  ],
}