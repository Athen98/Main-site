/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true } // avoids fail on lint only
};
module.exports = nextConfig;
