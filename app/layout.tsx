import Script from 'next/script';

import './globals.css';

export const metadata = {
  title: 'Click Websites',
  description: 'This is the app that will run Click Web.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script src="https://kit.fontawesome.com/57d9e7f4ed.js" crossOrigin="anonymous" />
    </html>
  );
}
