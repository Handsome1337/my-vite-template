import { ESLint } from 'eslint';
import { defineConfig } from 'lint-staged/config';

const removeIgnoredFiles = async (files: readonly string[]): Promise<string> => {
  const eslint = new ESLint();
  const isIgnored = await Promise.all(files.map((file) => eslint.isPathIgnored(file)));
  const filteredFiles = files.filter((_, index) => !isIgnored[index]);

  return filteredFiles.join(' ');
};

export default defineConfig({
  '*.html': 'prettier --check',
  '**/*.{ts,tsx,js,jsx}': async (files) => {
    const filesToLint = await removeIgnoredFiles(files);

    return [`eslint --report-unused-disable-directives --max-warnings 0 ${filesToLint}`];
  },
  '*.{css,scss}': 'stylelint'
});
