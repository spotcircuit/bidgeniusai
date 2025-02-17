/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.sam.gov'], // Allow images from SAM.gov if needed
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  // Enable static optimization where possible
  output: 'standalone',
}

export default nextConfig
