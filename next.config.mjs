/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pomyslnagadzet.pl",
      },
    ],
  },
};

export default nextConfig;
