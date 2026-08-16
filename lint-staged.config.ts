import { ESLint } from 'eslint';
import type { Configuration } from 'lint-staged';

const removeIgnoredFiles = async (files: readonly string[]): Promise<string> => {
  const eslint = new ESLint();
  const isIgnored = await Promise.all(files.map((file) => eslint.isPathIgnored(file)));
  const filteredFiles = files.filter((_, index) => !isIgnored[index]);

  return filteredFiles.join(' ');
};

export default {
  '*.html': 'prettier --check',
  '**/*.{ts,tsx,js,jsx}': async (files) => {
    const filesToLint = await removeIgnoredFiles(files);

    return [`eslint --report-unused-disable-directives --max-warnings 0 ${filesToLint}`];
  },
  '*.{css,scss}': 'stylelint'
} satisfies Configuration;
