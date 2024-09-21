import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    root: path.resolve(__dirname),
    base: '/', 
    test: {
      globals: true,
      environment: "jsdom",
      coverage: {
        enabled: true,
        reporter: ['text', 'html'],
      },
    },
    build: {
      outDir: path.resolve(__dirname, 'dist'),
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
        },
      },
      emptyOutDir: true,
    },
  };
});
