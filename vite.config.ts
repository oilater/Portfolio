import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          libraries: ['gsap', '@gsap/react', 'jotai', '@emotion/react', '@emotion/styled'],
        },
      },
    },
  },
})