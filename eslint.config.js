import eslintReact from '@eslint-react/eslint-plugin';
import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import {
  configs as airbnbConfigs,
  helpers as airbnbHelpers,
  plugins as airbnbPlugins
} from 'eslint-config-airbnb-extended';
import prettierConfig from 'eslint-config-prettier/flat';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettierPlugin from 'eslint-plugin-prettier';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2025,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    extends: [
      js.configs.recommended,
      airbnbPlugins.stylistic,
      airbnbPlugins.importX,
      airbnbPlugins.typescriptEslint,
      ...airbnbConfigs.base.all,
      eslintReact.configs['recommended-typescript'],
      jsxA11y.flatConfigs.recommended,
      prettierConfig
    ],
    settings: {
      ...airbnbHelpers.getImportSettings({
        javascript: false,
        typescript: true,
        jsx: true,
        typescriptResolver: {
          modules: ['src', 'node_modules'],
          project: './tsconfig.json'
        }
      })
    },
    plugins: {
      'react-refresh': reactRefresh,
      prettier: prettierPlugin
    },
    rules: {
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          functions: false
        }
      ],
      'import-x/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never'
        }
      ],
      'import-x/newline-after-import': 'error',
      'import-x/order': [
        'error',
        {
          'newlines-between': 'never',
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'index',
            'object',
            'type',
            'sibling'
          ],
          warnOnUnassignedImports: true
        }
      ],
      'import-x/prefer-default-export': 'off',
      'import-x/no-anonymous-default-export': [
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
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          required: {
            some: ['nesting', 'id']
          }
        }
      ],
      'jsx-a11y/label-has-for': [
        'error',
        {
          required: {
            some: ['nesting', 'id']
          }
        }
      ],
      'max-params': ['error', 3],
      'prettier/prettier': 'error',
      'react-refresh/only-export-components': 'warn'
    }
  }
]);
