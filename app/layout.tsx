import { Footer } from '@components/organisms/Footer';
import { Header } from '@components/organisms/Header';
import { getGlobalConfig, getNavUrl } from '@utils';
import { buildConfig } from '@utils/buildConfig';
import getHeader from '@utils/getHeader/getHeader';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Suspense } from 'react';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const globalConfig = await getGlobalConfig();
  const header = getHeader(globalConfig);

  let defaultFooter = null;
  let companyInfo = null;
  if (globalConfig.properties) {
    const {
      properties: {
        footer: { items: footer } = { items: '' },
        companyInfoItems: { items: companyInfoItems } = { items: '' },
      },
    } = globalConfig || {};
    [defaultFooter] = [footer[0].content].map((x: any) => buildConfig(x));
    [companyInfo] = [companyInfoItems[0].content].map((x: any) => buildConfig(x));
  }

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
        {defaultFooter !== null && (
          <Footer socials={defaultFooter.socialItems} companyInfo={companyInfo} footerText={defaultFooter.text} styling={defaultFooter.styling} />
        )}
      </body>
    </html>
  );
};

export default RootLayout;
