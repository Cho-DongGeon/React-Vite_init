import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import cssModules from 'vite-plugin-css-modules';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), cssModules()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
