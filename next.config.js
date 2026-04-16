/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/mohsen_website_v2',
  assetPrefix: '/mohsen_website_v2/',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/mohsen_website_v2',
  },
}

module.exports = nextConfig
