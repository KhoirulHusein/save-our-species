module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 0,
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-props-no-spreading': 0,
    'arrow-body-style': 0,
    'react/prop-types': 0,
    'react/function-component-definition': 0,
    'object-curly-newline': 0,
    'linebreak-style': 0,
  },
};
