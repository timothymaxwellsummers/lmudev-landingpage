import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const APP_PREFIX = '/app'; 
const APP_STORE_PAGE = 'https://lmu-app.lmu-dev.org/';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  if (url.pathname === APP_PREFIX || url.pathname.startsWith(APP_PREFIX + '/')) {
    url.href = APP_STORE_PAGE;
    
    return NextResponse.redirect(url, 308); 
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/app/:path*',
};
