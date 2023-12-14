import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

export default defineConfig({
  plugins: [react()],

  // Additional configurations
  resolve: {
    alias: {
      "@": "/src",
    },
  },

  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },

  // MUI Library configuration
  optimizeDeps: {
    include: ["@mui/material", "@emotion/react", "@emotion/styled"],
  },

  // TypeScript configuration
  // Make sure you have "tsconfig.json" in your project
  // Vite automatically detects it and uses TypeScript.
})
