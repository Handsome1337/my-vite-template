module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react-refresh', 'prettier'],
  root: true,
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false
      }
    ],
    'import/newline-after-import': 'error',
    'import/order': ['error', {
      'newlines-between': 'never',
      groups: ['builtin', 'external', 'internal', 'parent', 'index', 'object', 'type', 'sibling'],
      warnOnUnassignedImports: true,
    }],
    'import/prefer-default-export': 'off',
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: false,
        allowObject: true
      }
    ],
    'max-params': ['error', 3],
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react-refresh/only-export-components': 'warn',
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
    react: {
      version: 'detect'
    }
  }
};
