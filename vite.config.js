import { defineConfig } from 'vite';
import path from 'path';
import babel from '@rollup/plugin-babel';

export default defineConfig({

    build: {
      outDir: './build',
      emptyOutDir: true, // also necessary
      rollupOptions: {
        output: {
          entryFileNames: `app.min.js`,
          assetFileNames: `app.min.[ext]`,
        },
      },
    },  
    server: {
        port: 3000, // ваш настраиваемый порт
    },
    plugins: [
        babel({ babelHelpers: 'bundled' }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@css': path.resolve(__dirname, './src/css'),
        },
    },
});