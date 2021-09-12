module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    jest: true,
    browser: true,
    amd: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    // Make this the last element so prettier
    //config overrides other formatting rules
  ],
  rules: {
    quotes: [2, 'single'],
    'jsx-quotes': [2, 'prefer-single'],
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        parser: 'flow',
        printWidth: 50,
      },
    ],
  },
};
