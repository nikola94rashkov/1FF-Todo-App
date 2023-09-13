import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      components: '/src/components',
      layouts: '/src/layouts',
      styles: '/src/styles',
    },
  },
  plugins: [react()],
});
