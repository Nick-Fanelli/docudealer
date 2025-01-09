import NextAuth from "next-auth"
import Github from "next-auth/providers/github"

import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    secret: process.env.AUTH_SECRET,
    // debug: process.env.NODE_ENV === 'development',
    session: { strategy: "jwt" },
    providers: [
        Github({
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        })
    ],
    pages: {
        signIn: "/signin"
    }
});