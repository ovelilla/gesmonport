// Vendors
import { NextResponse } from "next/server";
import NextAuth from "next-auth";
// Config
import authConfig from "@/lib/auth/config/auth.config";
// Constants
import {
  API_PREFIX,
  AUTH_ROUTES,
  DEFAULT_SIGNIN_REDIRECT,
  PUBLIC_ROUTES,
} from "@/constants/middleware.constants";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { pathname, search } = req.nextUrl;

  if (pathname.startsWith("/_next/") || pathname.includes(".")) {
    return NextResponse.next();
  }

  const isLoggedIn = !!req.auth;
  const isApiRoute = pathname.startsWith(API_PREFIX);
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
  const isAuthRoute = AUTH_ROUTES.includes(pathname);

  if (isApiRoute) {
    const params = new URLSearchParams(search);
    const error = params.get("error");

    if (error) {
      return NextResponse.redirect(
        new URL(new URL(`/signin?error=${error}`, req.nextUrl)),
      );
    }
    return NextResponse.next();
  }

  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL(DEFAULT_SIGNIN_REDIRECT, req.nextUrl));
  }

  if (!isAuthRoute && !isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL("/signin", req.nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
