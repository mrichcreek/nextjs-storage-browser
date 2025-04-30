/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      extensions: ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
      alias: {
        ...config.resolve.alias,
        'react-hook-form': require.resolve('react-hook-form'),
      },
      mainFields: ['module', 'main'],
    };
    return config;
  },
};

module.exports = nextConfig;