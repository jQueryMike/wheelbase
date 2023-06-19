/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.dummyjson.com'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
