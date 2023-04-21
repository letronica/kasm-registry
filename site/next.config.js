/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Letronica Registry',
    description: 'A curated list of my Kasm workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/letronica/kasm-registry',
    contactUrl: 'https://github.com/letronica/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
