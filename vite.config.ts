import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          libraries: ['gsap', '@gsap/react', 'jotai', '@emotion/react', '@emotion/styled', '@vanilla-extract/css', '@vanilla-extract/vite-plugin'],
        },
      },
      external: ['fsevents']
    },
  },
})