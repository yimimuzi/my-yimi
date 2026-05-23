import { defineConfig } from 'rspress/config';
import path from 'path';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: '一米生态｜Goyimi.com',
  description: '一米距离，无限生态 —— 让服务与科技，近在咫尺。',
  icon: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/uhp_hq7vwp/rspress/rspress-logo.png',
  
  // ⬇️ 加在根目录这一层，让网站在进入时默认启用黑夜模式（深色主题）
  themeConfig: {
    darkMode: true, // 允许黑夜模式切换
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
  },
  
  // ⬇️ 告诉 Rspress 默认的色彩主题是深色 (dark) 
  builderConfig: {
    html: {
      tags: [
        {
          tag: 'script',
          children: `
            if (!localStorage.getItem('rspress-theme-mode')) {
              localStorage.setItem('rspress-theme-mode', 'dark');
              document.documentElement.classList.add('dark');
            }
          `,
        },
      ],
    },
  },
});
