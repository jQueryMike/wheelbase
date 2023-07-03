/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.MEDIA_URL, 'https://placekitten'],
  },
};

module.exports = nextConfig;
