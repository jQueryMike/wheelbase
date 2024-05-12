import { Footer } from '@components/organisms/Footer';
import { Header } from '@components/organisms/Header';
import { getGlobalConfig, getNavUrl } from '@utils';
import { buildConfig } from '@utils/buildConfig';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Suspense } from 'react';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const globalConfig = await getGlobalConfig();
  let defaultHeader = null;
  if (globalConfig.properties.header) {
    const {
      properties: { header: { items: header } = { items: '' } },
    } = globalConfig || {};
    [defaultHeader] = [header[0].content].map((x: any) => buildConfig(x));
  }
  const navigation = await getNavUrl();
  return (
    <html lang="en">
      <body className={inter.className}>
        {defaultHeader !== null && (
          <Header
            logo={{ ...defaultHeader?.image1 }}
            navigation={navigation}
            link={defaultHeader?.buttons.content}
            styling={defaultHeader.styling}
          />
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
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
