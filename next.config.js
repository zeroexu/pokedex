/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_NAME: process.env.APP_NAME,
    APP_TITLE: process.env.APP_TITLE,
    APP_META: process.env.APP_META,
    POKEAPI: process.env.POKEAPI,
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  extends: ['plugin:@next/next/recommended'],
};

module.exports = nextConfig;
