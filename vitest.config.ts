import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest/setup.mjs',
  },
  resolve: {
    alias: {
      '@tarojs/taro': path.resolve(__dirname, './vitest/taro-h5.mjs'),
      '@tarojs/components': '@tarojs/components/lib/react/index.js',
    },
  },
});
