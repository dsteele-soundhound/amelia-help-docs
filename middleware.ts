import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Only skip auth checks for specific auth endpoints
  if (request.nextUrl.pathname.startsWith('/auth/logout') || 
      request.nextUrl.pathname.startsWith('/login') ||
      request.nextUrl.pathname.startsWith('/set-auth-cookies')) {
    console.log('🔄 Middleware: Allowing auth endpoint:', request.nextUrl.pathname);
    return NextResponse.next();
  }
  
  // Debug: Log all cookies to understand what's available
  const allCookies = request.cookies.getAll();
  console.log('🍪 Middleware: All cookies:', allCookies.map(c => `${c.name}=${c.value}`));
  
  // Check for authentication tokens (Lambda@Edge handles logout_initiated)
  const cognitoIdToken = request.cookies.get('cognito_id_token');
  const cognitoAccessToken = request.cookies.get('cognito_access_token');
  
  console.log('🔍 Middleware check:', {
    url: request.url,
    hasIdToken: !!cognitoIdToken,
    hasAccessToken: !!cognitoAccessToken,
  });
  
  // Lambda@Edge handles logout detection and initial auth redirects
  // Next.js middleware only adds security headers for authenticated content
  if (!cognitoIdToken || !cognitoAccessToken) {
    console.log('🔒 Middleware: No auth tokens (Lambda@Edge should handle redirect)');
    // Don't redirect here - let Lambda@Edge handle it to avoid conflicts
    return NextResponse.next();
  }
  
  console.log('✅ Middleware: Auth check passed, allowing request');
  // Allow the request to proceed with aggressive cache-busting headers
  const response = NextResponse.next();
  
  // Add aggressive cache-busting headers to prevent all forms of caching
  response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate, private, max-age=0');
  response.headers.set('Pragma', 'no-cache');
  response.headers.set('Expires', 'Thu, 01 Jan 1970 00:00:00 GMT');
  response.headers.set('Vary', 'Cookie');
  response.headers.set('ETag', `"auth-${Date.now()}"`);
  
  return response;
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