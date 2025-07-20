import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animation: ['gsap', '@gsap/react'],
          state: ['jotai'],
          styling: ['@emotion/react', '@emotion/styled', '@emotion/css'],
        },
      },
    },
    chunkSizeWarningLimit: 500,
  },
})