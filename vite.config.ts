import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {fileURLToPath, URL} from "node:url";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
            { find: "@components/admin", replacement: fileURLToPath(new URL('./src/components/admin', import.meta.url)) },
            { find: "@pages/admin", replacement: fileURLToPath(new URL('./src/pages/admin', import.meta.url)) },
            { find: "@components/main", replacement: fileURLToPath(new URL('./src/components/main', import.meta.url)) },
            { find: "@pages/main", replacement: fileURLToPath(new URL('./src/pages/main', import.meta.url)) },
        ],
    },
});
