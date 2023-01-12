/** @type {import('next').NextConfig} */

const nextConfig   = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

module.exports = nextConfig;

/*const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig*/