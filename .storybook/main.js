module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  webpackFinal: async (config, { configType }) => {
    config.output.publicPath = '/tTab1204/';
    return config;
  },
  managerWebpack: async (config) => {
    config.output.publicPath = '/tTab1204/';
    return config;
  },
  framework: '@storybook/react',
};
