import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from 'react';

function Document() {
  return (
    <React.StrictMode>
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </Head>
        <body className="bg-body font-body">
          <Main />
          <NextScript />
          <Script
            src="https://kit.fontawesome.com/57d9e7f4ed.js"
            strategy="beforeInteractive"
            crossOrigin="anonymous"
          />
        </body>
      </Html>
    </React.StrictMode>
  );
}

export default Document;
