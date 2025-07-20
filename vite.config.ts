import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React 핵심 라이브러리
          react: ['react', 'react-dom'],
          
          // 라우팅
          router: ['react-router-dom'],
          
          // 애니메이션 (가장 큰 부분)
          animation: ['gsap', '@gsap/react'],
          
          // 상태 관리
          state: ['jotai'],
          
          // 스타일링
          styling: ['@emotion/react', '@emotion/styled', '@emotion/css'],
        },
      },
    },
    // 청크 크기 경고 설정
    chunkSizeWarningLimit: 500,
    // 압축 최적화
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
})