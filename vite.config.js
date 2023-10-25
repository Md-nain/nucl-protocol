import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Replace `src` with your actual source directory
      'bootstrap': path.resolve(__dirname, 'node_modules/bootstrap/'),
      '@fonts': path.resolve(__dirname, 'src/fonts'),
    }
  },
  server: {
    port: 3000,
    hot: true
  }
})
