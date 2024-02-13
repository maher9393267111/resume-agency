/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config.js");
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "dash93.nyc3.cdn.digitaloceanspaces.com",
      "cdn.vectorstock.com",
      "dash93.nyc3.digitaloceanspaces.com",
    ],
  },

  i18n,

  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
},


};

module.exports = nextConfig;
