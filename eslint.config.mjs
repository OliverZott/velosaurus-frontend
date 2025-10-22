import nextPlugin from '@next/eslint-plugin-next';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: ["**/.next/**", "**/node_modules/**", "**/dist/**", "**/build/**"]
  },
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    plugins: {
      '@typescript-eslint': tsPlugin,
      '@next/next': nextPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      ...tsPlugin.configs['recommended'].rules,
      ...nextPlugin.configs['recommended'].rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    }
  }
];
