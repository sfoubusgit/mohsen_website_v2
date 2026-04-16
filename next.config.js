/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mohsen_website_v2',
  assetPrefix: '/mohsen_website_v2/',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
