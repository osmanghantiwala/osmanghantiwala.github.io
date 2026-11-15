import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: {
      usePolling: true,
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
});
