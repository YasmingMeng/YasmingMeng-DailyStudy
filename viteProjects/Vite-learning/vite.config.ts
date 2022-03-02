/*
 * @Description:
 * @Date: 2022-02-25 10:43:00
 * @LastEditTime: 2022-02-28 16:46:04
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(), //插件使用
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "/src"),
    },
  },
});
