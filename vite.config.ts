import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Chunk vendor (third-party) code
          if (id.includes('node_modules')) {
            if (id.includes('react') || 
                id.includes('react-dom') || 
                id.includes('react-router')) {
              return 'vendor-react';
            }
            if (id.includes('@fortawesome')) {
              return 'vendor-icons';
            }
            return 'vendor'; // all other third party
          }
          
          // Split app code
          if (id.includes('/src/components/')) {
            return 'components';
          }
          if (id.includes('/src/pages/')) {
            return 'pages';
          }
          
          // Default chunk
          return 'index';
        }
      }
    },
    // Increase warning limit to avoid FontAwesome size warnings
    chunkSizeWarningLimit: 1600
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
