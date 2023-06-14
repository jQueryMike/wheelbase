import './globals.css';

export const metadata = {
  title: 'Click Websites',
  description: 'This is the app that will run Click Web.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
