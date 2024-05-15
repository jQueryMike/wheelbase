import { Footer } from '@components/organisms/Footer';
import { Header } from '@components/organisms/Header';
import { getFooter, getGlobalConfig } from '@utils';
import getHeader from '@utils/getHeader/getHeader';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Suspense } from 'react';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const globalConfig = await getGlobalConfig();
  const header = getHeader(globalConfig);
  const { items, companyInfo } = getFooter(globalConfig);

  return (
    <html lang="en">
      <body className={inter.className}>
        {header !== null && (
          <Header logo={{ ...header?.image1 }} link={header?.buttons.content} styling={header.styling} />
        )}
        {children}
        <Suspense fallback={null}>
          <Script
            src="https://kit.fontawesome.com/3bd8a6c68a.js"
            strategy="beforeInteractive"
            crossOrigin="anonymous"
            async
          />
        </Suspense>
        {items !== null && (
          <Footer
            socials={items.socialItems}
            companyInfo={companyInfo}
            footerText={items.text}
            styling={items.styling}
          />
        )}
      </body>
    </html>
  );
};

export default RootLayout;
