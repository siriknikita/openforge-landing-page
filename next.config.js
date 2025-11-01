/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Compression is automatically handled by Vercel
  compress: true,
  // Optimize images for better performance
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Enable SWC minification (default in Next.js 13+)
  swcMinify: true,
}

module.exports = nextConfig

