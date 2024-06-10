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
          },
          {
            protocol: 'http',
            hostname: 'localhost',
          },
          {
            protocol: 'https',
            hostname: 'sametcimen.com',
          }
        ],
      },
};

export default nextConfig;
