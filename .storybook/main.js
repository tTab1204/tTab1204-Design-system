module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  refs: {
    'chromatic-published-Storybook': {
      title: 'Design System',
      url: 'https://tTab1204.chromatic.com',
    },
  },
  framework: '@storybook/react',
};
