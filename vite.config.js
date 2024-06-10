import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://watchbackend-9h6h.onrender.com",
      "/uploads/": "https://watchbackend-9h6h.onrender.com",
    },
  },
});
