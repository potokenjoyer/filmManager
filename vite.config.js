import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: "./auto-imports.d.ts",
      defaultExportByFilename: false,
      dirs: ["src/stores"],
      imports: [
        "vue",
        "vue-router",
        {
          from: "@/router",
          imports: ["useRouter", "useRoute"],
        },
      ],
      resolvers: [ElementPlusResolver()],
    }),

    Components({
      dirs: ["src/ui"],
      dts: "./components.d.ts",
      types: [
        {
          from: "vue-router",
          names: ["RouterLink", "RouterView"],
        },
      ],
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
});
