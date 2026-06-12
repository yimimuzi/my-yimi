---
pageType: home

hero:
  name: 一米生态 | Goyimi.com
  tagline: 一米距离,无限生态 —— 让服务与科技近在咫尺

features:
  - title: 一米传媒
    details: 全国领先的直播经纪 company 与 MCN 服务机构。深度聚焦直播、MCN、电商、游戏、品牌服务五大核心赛道，全面打通抖音、快手、微信视频号、腾讯 NOW 等一线头部新媒体平台，构建起庞大的公私域流量闭环与全域商业变现矩阵。
    icon: 🚀
  - title: 一米农场
    details: 立足于四川大凉山得天独厚的光热气候与纯净原生态资源，开创全新的一对一精准认养模式。提供高品质蔬菜、时令水果、高原家禽及橄榄油的一对一单式专属认养，让大凉山的绿色有机农业方便快捷地走进千家万户。
    icon: 🌾
  - title: 一米新能源
    details: 全场景电动汽车（EV）智慧充电解决方案服务商。以"智慧充电，无处不在"为使命，专注于为小区、酒店、写字楼及公共停车场等目的地提供定制化的充电桩安装与智能运营服务，确保电动汽车用户在任何场景下都能轻松补能。
    icon: ⚡
---

<style>
html, body, #root, .rspress-theme {
  overflow: hidden !important;
  height: 100vh !important;
}

/* hero 容器 */
.rspress-home-hero {
  min-height: auto !important; 
  padding-top: 0 !important;
  padding-bottom: 0 !important;  
}

/* hero 标题 —— 原默认 text-6xl(3.75rem)，大幅缩小 */
.rspress-home-hero-text {
  font-size: 1.6rem !important;
  line-height: 1.2 !important;
  padding-bottom: 0 !important;
}

/* hero 副标题 —— 原默认 pt-4(16px)，收缩间距和字号 */
.rspress-home-hero-tagline {
  font-size: 0.9rem !important;
  padding-top: 4px !important;
  line-height: 1.3 !important;
}

.rspress-home-hero-wrapper {
  padding-bottom: 0 !important;
  margin-bottom: 0 !important;
}

/* 三个卡片区域 */
.rspress-home-features {
  padding-top: 4px !important;
  padding-bottom: 4px !important;
  margin-top: 0 !important;
}

/* 每个卡片内部 padding 从 p-8(32px) 压到 12px */
.rspress-home-feature-card {
  padding: 12px 16px !important;
}

/* 卡片标题和详情间距收缩 */
.rspress-home-feature-detail {
  padding-top: 4px !important;
}

/* 整体布局靠上 */
.rspress-home-layout {
  display: flex !important;
  flex-direction: column !important;
  justify-content: flex-start !important;
  align-items: center !important;
  height: calc(100vh - 64px) !important;
  padding-top: 4px !important;
  gap: 0 !important;
}

@media (max-width: 768px) {
  html, body {
    overflow: auto !important;
    height: auto !important;
  }
  .rspress-home-layout {
    height: auto !important;
    gap: 20px !important;
  }
}
</style>
