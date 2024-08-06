import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import UnoCSS from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from '@uni-helper/vite-plugin-uni-components';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    UnoCSS(),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: [
        "vue",
        "pinia",
        {
          from: 'uni-mini-router',
          imports: ['createRouter', 'useRouter', 'useRoute']
        }
      ],
      dts: "src/typings/auto-import.d.ts",
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      resolvers: []
    }),
    // 按需导入组件
    Components({
      dts: 'src/typings/components.d.ts',
      types: [{ from: 'vue-router', names: ['RouterLink', 'RouterView'] }],
      resolvers: []
    }),
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    hmr: true
  }
});
