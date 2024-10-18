/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", process.env.NEXT_ORIGIN_SERVER_ACTIONS],
    },
  },
}

export default nextConfig
