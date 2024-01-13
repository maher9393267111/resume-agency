/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js');
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["dash93.nyc3.cdn.digitaloceanspaces.com" ,"cdn.vectorstock.com"],
  },

i18n,





}







module.exports = nextConfig
