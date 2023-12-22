module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint-config-prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 14,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        jsxSingleQuote: false,
      },
    ],
    quotes: [2, 'single', { avoidEscape: true }],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'global-require': 0,
    'react/jsx-no-useless-fragment': [2, { allowExpressions: true }], // Fragment
    'react/function-component-definition': [
      // 함수형 컴포넌트에 대한 함수 유형 지정
      // https://velog.io/@nemo/Function-component-is-not-a-function-declaration
      2,
      { namedComponents: ['arrow-function', 'function-declaration'] },
    ],
  },
  ignorePatterns: ['.eslintrc.js'],
};
