import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://deluxeaurum.onrender.com",
      "/uploads/": "https://deluxeaurum.onrender.com",
    },
  },
});