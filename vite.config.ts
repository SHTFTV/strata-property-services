import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@/data/tradeContent': path.resolve(__dirname, './src/data/tradeContentSafe.ts'),
      '@': path.resolve(__dirname, './src'),
      '@workspace/api-client-react': path.resolve(__dirname, './src/lib/api-stub.ts'),
    }
  },
  build: {
    outDir: 'dist'
  }
})
