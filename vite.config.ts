import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        proxy: {
            "/api/": {
                target: "http://127.0.0.1:8000/",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, "/"),
            },
        },
    },
    resolve: {
        alias: [
            { find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
            {
                find: "@components/admin",
                replacement: fileURLToPath(new URL("./src/components/admin", import.meta.url)),
            },
            {
                find: "@pages/admin",
                replacement: fileURLToPath(new URL("./src/pages/admin", import.meta.url)),
            },
            {
                find: "@components",
                replacement: fileURLToPath(new URL("./src/components", import.meta.url)),
            },
            {
                find: "@pages/main",
                replacement: fileURLToPath(new URL("./src/pages/main", import.meta.url)),
            },
            {
                find: "@api",
                replacement: fileURLToPath(new URL("./src/providers/api.ts", import.meta.url)),
            }
        ],
    },
});
