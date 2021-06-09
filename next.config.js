module.exports = {
  env: {
    SHEET_URL: process.env.SHEET_URL,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
      };
    }

    return config;
  },
  webpack5: false,
};
