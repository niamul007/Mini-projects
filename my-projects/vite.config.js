import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss' // Add this
import autoprefixer from 'autoprefixer'       // Add this

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // This connects Tailwind to Vite
        autoprefixer(),
      ],
    },
  },
})