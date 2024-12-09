/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/intro' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/intro/' : '',
};

module.exports = nextConfig;
