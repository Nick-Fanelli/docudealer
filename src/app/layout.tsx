import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./global-providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

import { SessionProvider } from "next-auth/react"
import { auth } from "@/auth";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};

export default async function RootLayout({ children } : { children: React.ReactNode }) {

    const session = await auth();

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            
            <body
                className={clsx(
                    "min-h-screen bg-background font-sans",
                    fontSans.variable,
                )}
            >
                <Providers themeProps={{ attribute: "class", defaultTheme: "dark", }}>
                    <SessionProvider session={session}>
                        {children}
                    </SessionProvider>
                </Providers>
            </body>
        </html>
    );
}
