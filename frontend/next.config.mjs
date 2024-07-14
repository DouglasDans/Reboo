/** @type {import('next').NextConfig} */
const nextConfig = {
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig
