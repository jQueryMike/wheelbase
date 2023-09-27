import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from 'react';

function Document() {
  return (
    <React.StrictMode>
      <Html>
        <Head />
        <body className="bg-body font-body">
          <Main />
          <NextScript />
          <Script
            src="https://kit.fontawesome.com/3bd8a6c68a.js"
            strategy="beforeInteractive"
            crossOrigin="anonymous"
          />
        </body>
      </Html>
    </React.StrictMode>
  );
}

export default Document;
