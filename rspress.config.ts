import { defineConfig } from 'rspress/config';
import path from 'path';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '一米站点',
  description: '基于 Rspress 搭建的现代静态站点',
  icon: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/uhp_hq7vwp/rspress/rspress-logo.png',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/getting-started' }
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
