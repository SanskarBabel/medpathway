/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: '/medpathway',
  assetPrefix: '/medpathway',
};

module.exports = nextConfig;
