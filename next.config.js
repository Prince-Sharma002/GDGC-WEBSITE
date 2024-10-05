/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',       
      },
      {
        protocol: 'https',
        hostname: 'mms.businesswire.com',
        port: '',       
      },
    ],
  },
}

module.exports = nextConfig
