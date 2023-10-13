/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.MEDIA_URL, 'localhost'],
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
};

module.exports = nextConfig;
