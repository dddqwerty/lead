/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    domains: ['images.ctfassets.net'],
  },
}
