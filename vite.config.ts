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
      '~': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: './src/components/ISidebar.ce.vue',
      name: 'i-sidebar',
      // the proper extensions will be added
      fileName: 'i-sidebar'
    }
  },
  define: {
    'process.env': process.env
  }
})
