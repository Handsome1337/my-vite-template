import type { Config } from 'prettier';

export default {
  plugins: ['prettier-plugin-tailwindcss'],
  semi: true,
  trailingComma: 'none',
  singleQuote: true,
  printWidth: 90,
  tabWidth: 2,
  endOfLine: 'lf'
} satisfies Config;
