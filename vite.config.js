import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@mui/material/Box','tailwind-merge'],
    }
  },

  server: {
    proxy: {
      // "/api/": "https://deluxeaurum.onrender.com",
      // "/uploads/": "https://deluxeaurum.onrender.com",
      "/api/": "http://localhost:5000",
      "/uploads/": "http://localhost:5000",
    },
  },
})

