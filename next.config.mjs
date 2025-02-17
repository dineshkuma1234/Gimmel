/** @type {import('next').NextConfig} */
// const nextConfig = {};

const nextConfig = {
    images: {
      domains: ["i.ytimg.com"], // Allow YouTube thumbnail images
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  };

export default nextConfig;
