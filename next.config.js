/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    serverActions: true,
  },
  trailingSlash: true,
  basePath: '/webinar-b3-v2',
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/webinar-b3-v2',
          destination: '/'
        },
        {
          source: '/webinar-b3-v2/:path*',
          destination: '/:path*'
        }
      ]
    };
  },
};

module.exports = nextConfig;
