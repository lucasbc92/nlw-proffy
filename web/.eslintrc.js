module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
      "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
      "import/extensions": ["error", "never"],
      "import/no-unresolved": ["off"],
      "react/prop-types": ["off"],
      "jsx-a11y/label-has-associated-control": ["off"]
  },
};
