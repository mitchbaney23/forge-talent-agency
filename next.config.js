/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['example.com', 'www.tiktok.com', 'www.instagram.com'],
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
}

module.exports = nextConfig