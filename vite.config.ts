import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      customElement: true
    })
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./src', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'flighthub-vue',
      // formats: ['es', 'cjs', 'umd', 'iife'],
      // the proper extensions will be added
      fileName: 'flighthub-vue',
      minify: false
    }
  },
  define: {
    'process.env': process.env
  }
})
