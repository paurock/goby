/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/lend/collateral',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
