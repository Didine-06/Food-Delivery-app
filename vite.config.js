import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Food-Delivery-app/', 
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparer les images en chunks pour un meilleur caching
          'images': ['./src/assets/assets.js']
        }
      }
    },
    // Optimisations pour les assets
    assetsInlineLimit: 4096, // Inline les petites images (< 4KB)
    chunkSizeWarningLimit: 1600,
  },
  // Optimisations pour le développement
  server: {
    fs: {
      // Permet l'accès aux fichiers en dehors du root
      strict: false
    }
  }
})
