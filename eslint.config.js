import { defineConfig } from "eslint/config";
import eslintConfigReact from "@oacore/eslint-config-react"
import reactPlugin from 'eslint-plugin-react'

export default defineConfig([
  {
    files: ['**/*.js', '**/*.jsx', '.js','.jsx'],
    ignores: [
      '.idea/**',
      'node_modules/**',
      'public/**',
      'lib/**',
      '**/dist/**',
      '**/build/**',
      '**/*.min.js'
    ],
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ... eslintConfigReact.rules,
    }
  },
]);
