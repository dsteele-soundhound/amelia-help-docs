import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Only skip auth checks for specific auth endpoints
  if (request.nextUrl.pathname.startsWith('/auth/logout') || 
      request.nextUrl.pathname.startsWith('/auth/login') ||
      request.nextUrl.pathname.startsWith('/set-auth-cookies')) {
    console.log('🔄 Middleware: Allowing auth endpoint:', request.nextUrl.pathname);
    return NextResponse.next();
  }
  
  // Debug: Log all cookies to understand what's available
  const allCookies = request.cookies.getAll();
  console.log('🍪 Middleware: All cookies:', allCookies.map(c => `${c.name}=${c.value}`));
  
  // Check if user has been marked as logged out
  const logoutInitiated = request.cookies.get('logout_initiated');
  
  // Check for authentication tokens
  const cognitoIdToken = request.cookies.get('cognito_id_token');
  const cognitoAccessToken = request.cookies.get('cognito_access_token');
  
  console.log('🔍 Middleware check:', {
    url: request.url,
    logoutInitiated: logoutInitiated?.value,
    hasIdToken: !!cognitoIdToken,
    hasAccessToken: !!cognitoAccessToken,
  });
  
  // If logout was initiated, redirect to login
  if (logoutInitiated && logoutInitiated.value === 'true') {
    console.log('🔒 Middleware: Logout initiated - redirecting to login');
    const loginUrl = new URL('https://help.dev.amelia.com/auth/login');
    loginUrl.searchParams.set('return_url', request.url);
    loginUrl.searchParams.set('logout', 'true'); // Add logout flag
    const response = NextResponse.redirect(loginUrl);
    
    // Add cache-busting headers to prevent CloudFront caching
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate, private');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    
    return response;
  }
  
  // If no authentication tokens, redirect to login
  if (!cognitoIdToken || !cognitoAccessToken) {
    console.log('🔒 Middleware: No auth tokens - redirecting to login');
    const loginUrl = new URL('https://help.dev.amelia.com/auth/login');
    loginUrl.searchParams.set('return_url', request.url);
    const response = NextResponse.redirect(loginUrl);
    
    // Add cache-busting headers to prevent CloudFront caching
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate, private');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    
    return response;
  }
  
  console.log('✅ Middleware: Auth check passed, allowing request');
  // Allow the request to proceed with cache-busting headers to prevent CloudFront caching
  const response = NextResponse.next();
  
  // Add cache-busting headers to prevent CloudFront from caching authenticated content
  response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate, private');
  response.headers.set('Pragma', 'no-cache');
  response.headers.set('Expires', '0');
  
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