/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

// const nextConfig = {}

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/posts/:slug*",
        destination: "/:slug*",
      },
    ];
  },
};

// const nextConfig = {
//     reactStrictMode: true,
//     swcMinify: true,
//   };

module.exports = withContentlayer(nextConfig);
//module.exports = nextConfig
