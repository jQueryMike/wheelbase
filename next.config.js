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
};

module.exports = nextConfig;
