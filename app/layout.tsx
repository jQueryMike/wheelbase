import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Suspense } from 'react';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Suspense fallback={null}>
          <Script
            src="https://kit.fontawesome.com/3bd8a6c68a.js"
            strategy="beforeInteractive"
            crossOrigin="anonymous"
            async
          />
        </Suspense>
      </body>
    </html>
  );
}
