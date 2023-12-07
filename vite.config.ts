import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

import RadixVueResolver from 'radix-vue/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    Pages({
      dirs: 'src/views',
      exclude: ['**/components/*.vue'],
      importMode: 'async',
    }),
    Layouts({
      layoutsDirs: 'src/layout', // 布局文件存放目录
      defaultLayout: 'default', // 默认布局，对应 src/layout/default.vue
    }),
    AutoImport({
      dts: true,
      dirs: ['./src/utils', './src/store/modules'],
      imports: [
        'vue',
        'vue-router',
        {
          'pinia': ['storeToRefs'],
          '@iconify/vue': ['Icon'],
        },
      ],
    }),
    Components({
      resolvers: [
        RadixVueResolver(),
      ],
      directoryAsNamespace: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
