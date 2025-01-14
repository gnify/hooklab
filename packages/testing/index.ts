import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

const config = defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    globals: true,

    include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    exclude: ['**/node_modules/**', '**/dist/**'],

    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'clover', 'json'],
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/*.stories.{js,jsx,ts,tsx}',
        '**/*.mock.{js,jsx,ts,tsx}',
        '**/__tests__/**',
      ],
    },
  },
});

export { config };
