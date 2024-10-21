import { defineConfig } from 'vite';
import path from 'path';
import babel from '@rollup/plugin-babel';

export default defineConfig({
    plugins: [
        babel(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@css': path.resolve(__dirname, './src/css'),
        },
    },
});