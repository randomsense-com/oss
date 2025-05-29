import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginSitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    vue(),
    VitePluginSitemap({
      hostname: 'https://oss.randomsense.jp',
      dynamicRoutes: ['/'],
      exclude: ['/404'],
      lastmod: new Date().toISOString()
    })
  ],
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  publicDir: 'public',
  base: '/',
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
      }
    }
  }
})