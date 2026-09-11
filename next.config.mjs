/** @type {import('next').NextConfig} */
const nextConfig = {
output: 'export',
  reactStrictMode: true,
  images: {
unoptimized:tru,
    remotePatterns: [{ protocol: "https", hostname: "**" }]
  }
};

export default nextConfig;
