/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/log10',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
