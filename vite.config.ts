import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../dist',
    assetsDir: '.',
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const extType = info[info.length - 1]
          if (/\.(png|jpe?g|gif|svg|webp|webm|mp3)$/.test(assetInfo.name)) {
            return `media/[name]-[hash].${extType}`
          }
          if (/\.(css)$/.test(assetInfo.name)) {
            return `css/[name]-[hash].${extType}`
          }
          if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name)) {
            return `fonts/[name]-[hash].${extType}`
          }
          return `[name]-[hash].${extType}`
        },
      },
    },
  },
})
