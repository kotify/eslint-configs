module.exports =  {
  root: true,
  parser: "@typescript-eslint/parser",
  env: { browser: true },
  extends: [
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  settings: { react: { version: '16.13' } },
  rules: {
    'no-debugger': 'warn',
    'no-console': 'warn',
    'prefer-const': 'error',
    'react/prop-types': 0,
    '@typescript-eslint/no-useless-constructor': 1,
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
  },
};
