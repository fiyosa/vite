import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
    host: 'localhost',
  },

  build: {
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      output: {
        entryFileNames: 'main.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css') return 'main.css'
          return 'assets/[name]-[hash].[ext]'
        },
      },
    },
  },

  preview: {
    port: 8080,
    host: 'localhost',
  },
})
