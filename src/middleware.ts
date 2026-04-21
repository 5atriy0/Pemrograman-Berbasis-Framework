import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  const isLogin = request.cookies.get("isLogin")?.value;

  if (!isLogin || isLogin !== "true") {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/about",
    "/produk",
    "/profile/:path*",
    "/setting/:path*",
    "/user/:path*",
    "/shop/:path*",
    "/blog/:path*",
    "/category/:path*"
  ],
};