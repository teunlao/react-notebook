module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['airbnb-typescript-prettier', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['/*.*'],
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  rules: {},
};
