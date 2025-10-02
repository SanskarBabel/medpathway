/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Removed basePath to serve directly at root, avoiding GitHub Pages 404
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },
  // Generate an index.html for every route directory
  trailingSlash: true,
  // Enable Next.js built-in performance optimizations
  compress: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react']
  }
};

module.exports = nextConfig;