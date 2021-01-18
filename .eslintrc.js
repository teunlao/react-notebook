module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: '../tsconfig.json',
    sourceType: 'module',
  },
  root: true,
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'airbnb-typescript-prettier',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};
