import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import withAuth from 'next-auth/middleware'
import { getToken } from 'next-auth/jwt';

export default withAuth(async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isauth = await getToken({ req: request });
  const protectedRoutes = ['/Dashboard'];
  const isAuthRoute = pathname.startsWith('/auth');
  const isprotectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

  if (!isauth && isprotectedRoute) {
    console.log("Unauthenticated access attempt:", pathname);
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
  if(isAuthRoute && isauth ){
    return NextResponse.redirect(new URL('/Dashboard', request.url));
  }
},
  {
    callbacks: {
      async  authorized() {
  return true;

},
  },
}
);

// This function can be marked `async` if using `await` inside


// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/Dashboard/:path*',
    '/auth/:path*',
  ]
}