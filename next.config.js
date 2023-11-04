/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "routine.vn" },
      { hostname: "www.sportsdirect.com" },
    ],
  },
};

module.exports = nextConfig;
