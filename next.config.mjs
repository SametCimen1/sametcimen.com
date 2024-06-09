/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'buffer.com',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
          {
            protocol: 'https',
            hostname: 'skillicons.dev',
          }
        ],
      },
};

export default nextConfig;
