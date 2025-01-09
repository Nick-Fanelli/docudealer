import { auth } from "@/auth"
import { NextAuthRequest } from "next-auth/lib"
import { apiAuthPrefix, authRoutes, defaultAuthenticatedUserRedirect, publicRoutes } from "./routes";
import { NextResponse } from "next/server";

export default auth((req: NextAuthRequest) => {

    const { nextUrl } = req;
    const isAuthenticated = !!req.auth;

    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if(isAuthRoute) {
        if(isAuthenticated) {
            return NextResponse.redirect(new URL(defaultAuthenticatedUserRedirect, nextUrl)); // Redirect
        } else {
            return; // Allow
        }
    }

    if(isPublicRoute) {
        return; // Allow
    } else {
        if(isAuthenticated) {
            return; // Allow
        } else {
            return NextResponse.redirect(new URL("/auth/signin", nextUrl)); // Redirect
        }
    }

});

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}