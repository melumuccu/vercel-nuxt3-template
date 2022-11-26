module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@nuxtjs/eslint-config-typescript'],
  plugins: [],
  // add your custom rules here
  rules: {
    semi: 'off',
    'comma-dangle': 'off',
  },
};
