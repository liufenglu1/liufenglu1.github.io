import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "KFC广告 主题演示",
  description: "KFC广告 的演示",

  base: "/",

  theme,
});
