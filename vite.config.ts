import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://jens-wedin.github.io/summer-trip/
  base: '/summer-trip/',
  plugins: [react()],
})
