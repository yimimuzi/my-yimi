import { defineConfig } from 'rspress/config';
import path from 'path';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '一米生态｜Goyimi.com',
  description: '一米距离，无限生态 —— 让服务与科技，近在咫尺。',
  icon: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/uhp_hq7vwp/rspress/rspress-logo.png',
  themeConfig: {
    // ⬇️ 就是这行，成功帮你关闭右上角的 Search (Ctrl K) 搜索框
    search: false,

    nav: [
      { text: '首页', link: '/' },
      { text: '业务', link: '/guide/getting-started' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '快速开始', link: '/guide/getting-started' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' }
    ]
  }
});
