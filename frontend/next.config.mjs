import withImage from 'next-images';

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default withImage(nextConfig);
