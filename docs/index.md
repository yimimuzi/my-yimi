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
    details: 全场景电动汽车（EV）智慧充电解决方案服务商。以“智慧充电，无处不在”为使命，专注于为小区、酒店、写字楼及公共停车场等目的地提供定制化的充电桩安装与智能运营服务，确保电动汽车用户在任何场景下都能轻松补能。
    icon: ⚡
---

<style>
/* 🎯 1. 强行锁定全屏，禁止页面出现上下滚动条 */
html, body, #root, .rspress-theme {
  overflow: hidden !important;
  height: 100vh !important;
}

/* 🎯 2. 压缩标题和副标题的尺寸与间距 */
.rspress-home-hero h1 {
  margin: 0 !important;
  font-size: 1.8rem !important;
  line-height: 1.2 !important;
}
.rspress-home-hero p {
  margin: 2px 0 0 0 !important;
  font-size: 0.95rem !important;
  opacity: 0.7;
}

.rspress-home-hero {
  min-height: auto !important; 
  padding-top: 0px !important;
  padding-bottom: 0px !important;  
}

/* 🎯 3. 彻底清除文字区域原本自带的巨大底部外边距 */
.rspress-home-hero-wrapper {
  padding-bottom: 0px !important;
  margin-bottom: 0px !important;
}

/* 🎯 4. 精准控制三个方框的定位，整体大幅度往上提 */
.rspress-home-features {
  padding-top: 4px !important;
  padding-bottom: 4px !important;
  margin-top: 0px !important;
}

/* 🎯 5. 让整个首页内容在导航栏下方靠上紧凑对齐 */
.rspress-home-layout {
  display: flex !important;
  flex-direction: column !important;
  justify-content: flex-start !important;
  align-items: center !important;
  height: calc(100vh - 64px) !important;
  padding-top: 6px !important;
  gap: 0px !important;
}

/* 📱 手机端微调 */
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
