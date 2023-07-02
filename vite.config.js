import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@styles', replacement: path.resolve(__dirname, './src/styles') },
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
      { find: '@hooks', replacement: path.resolve(__dirname, './src/hooks') },
      { find: '@icons', replacement: path.resolve(__dirname, './src/icons') },
      { find: '@images', replacement: path.resolve(__dirname, './src/images') },
    ],
  },
})
