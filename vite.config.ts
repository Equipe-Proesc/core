import { defineConfig } from "vite";
// @ts-ignore
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [
        react(),
        dts({
            entryRoot: "src",
            outDir: "dist/types",
            insertTypesEntry: true,
        })
    ],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src")
        }
    },
    build: {
        emptyOutDir: false,
        lib: {
            entry: resolve(__dirname, "src/index.ts"),
            name: "ProescCore",
            fileName: (format) => `proesc-core.${format}.js`,
            formats: ["es", "cjs"]
        },
        rollupOptions: {
            external: [
                "react",
                "react-dom",
                "@radix-ui/react-slot",
                "class-variance-authority",
                "lucide-react"
            ],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM"
                }
            }
        }
    }
});