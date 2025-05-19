/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/medpathway',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
