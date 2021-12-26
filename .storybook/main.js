module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  // staticDirs: ['../public', '../static', { from: '../foo/assets', to: '/assets' }],
  framework: '@storybook/react',
};
