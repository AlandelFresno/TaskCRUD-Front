/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BASEAPIURL: process.env.BASEAPIURL,
  }
}

module.exports = nextConfig
