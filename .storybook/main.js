module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async config => {
    // do mutation to the config

    return config;
  },
};
