import { authClient } from '@/lib/auth/client';
import { NeonAuthUIProvider, UserButton } from '@neondatabase/neon-js/auth/react/ui';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OG Proxy",
  description: "Generate dynamic Open Graph images with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <NeonAuthUIProvider
          authClient={authClient}
          redirectTo="/account/settings"
          emailOTP
        >
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <UserButton size="icon" />
          </header>
          {children}
        </NeonAuthUIProvider>
      </body>
    </html>
  );
}
