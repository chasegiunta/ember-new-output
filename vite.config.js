import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  port: 3000,
  server: {
      cors: false,
      hmr: {
        port: 443,
    },
  }
})