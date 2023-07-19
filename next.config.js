/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.MEDIA_URL, 'localhost'],
  },
};

module.exports = nextConfig;
