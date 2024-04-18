import { Footer } from '@components/organisms/Footer';
import { Header } from '@components/organisms/Header';
import { getGlobalConfig, getSharedContent } from '@utils';
import { buildConfig } from '@utils/buildConfig';
import { mergeVars } from '@utils/mergeVars';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Suspense } from 'react';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const globalConfig = await getGlobalConfig();
  const {
    properties: { header: h, footer: f },
  } = globalConfig;
  const sharedContent = await getSharedContent();
  const [header, footer] = [h, f].map((x) =>
    mergeVars(x.items ?? [], globalConfig, sharedContent)
      .map((item: any) => buildConfig(item.content))
      .pop(),
  );
  // console.log(header, footer);
  return (
    <html lang="en">
      {/* {header ?? <Header {...header} />} */}
      <body className={inter.className}>
        <Header />
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
}
