import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const APP_URL = 'https://www.lmu-dev.org/app'; 
const APP_STORE_PAGE = 'https://lmu-app.lmu-dev.org/';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  if (url.href.startsWith(APP_URL)) {
    console.log('Middleware Redirecting:', url.pathname); 

    url.href = APP_STORE_PAGE;
    
    return NextResponse.redirect(url, 308); 
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/app',
    '/app/:path*',
  ],
  skipTrailingSlashRedirect: true, 
};
