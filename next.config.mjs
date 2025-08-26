/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/convergence-website',
  assetPrefix: '/convergence-website/',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
