import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Product-list-with-cart",
  server: {
    proxy: {
      "/images": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
      "/products": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
