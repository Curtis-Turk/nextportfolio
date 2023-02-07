/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.squarespace-cdn.com", "storage.googleapis.com"],
  },
};

module.exports = nextConfig;
