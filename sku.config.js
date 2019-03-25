const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TreatPlugin = require('treat/plugin');
const routes = require('./sku.routes.js');

const isGitHubPages =
  process.env.TRAVIS_BRANCH === 'master' &&
  !process.env.TRAVIS_PULL_REQUEST_SHA;

module.exports = {
  srcPaths: ['lib', 'docs/src', 'scripts', '@types'],
  clientEntry: 'docs/src/client.tsx',
  renderEntry: 'docs/src/render.tsx',
  routes,
  public: 'docs/src/public',
  target: 'docs/dist',
  publicPath: isGitHubPages ? '/braid-design-system/' : '/',
  displayNamesProd: true,
  dangerouslySetWebpackConfig: config => {
    const isClient = config.name === 'client';

    config.plugins.push(
      new TreatPlugin({
        outputCSS: isClient,
        outputLoaders: [MiniCssExtractPlugin.loader],
        localIdentName: '[name]-[local]_[hash:base64:5]',
        themeIdentName: '-[folder]_[hash:base64:5]',
      }),
    );

    return config;
  },
};
