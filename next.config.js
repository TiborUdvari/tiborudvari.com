/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

// const nextConfig = {}

const nextConfig = {
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
