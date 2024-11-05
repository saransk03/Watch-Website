import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Explicitly set the absolute path for the alias
    },
  },
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, '/src/main.jsx'),  // Use absolute path for the entry
    },
  },
});
