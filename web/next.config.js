const path = require('path');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  webpack(config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['views'] = path.join(__dirname, 'views');
    return config;
  }
};
