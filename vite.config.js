import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  path: "/dice-game",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  }
})
