/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: [
      'localhost',
      'links.papareact.com',
      'cloud.appwrite.io',
      'cdn.sanity.io',
      'img.clerk.com',
    ],
  },
};

module.exports = nextConfig;
