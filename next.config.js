/** @type {import('next').NextConfig} */

const domains = ['localhost'];

if (process.env.MEDIA_URL) domains.push(process.env.MEDIA_URL.replace('https://', '').replace('http://', ''));

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mjml|txt)$/i,
      use: [{ loader: 'raw-loader' }],
    });

    return config;
  },
  env: {
    NEXT_PUBLIC_IS_STORYBOOK: process.env.NEXT_PUBLIC_IS_STORYBOOK,
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      // Wildcard path matching
      {
        source: '/home/:slug',
        destination: '/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
