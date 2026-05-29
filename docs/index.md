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

/* 🎯 2. 把官方死板的“撑满全屏”容器彻底打碎，高度改为自动 */
.rspress-home-hero {
  min-height: auto !important; 
  padding-top: 40px !important;    /* 调整文字距离顶部的距离 */
  padding-bottom: 0px !important;  
}

/* 🎯 3. 彻底清除文字区域原本自带的巨大底部外边距 */
.rspress-home-hero-wrapper {
  padding-bottom: 0px !important;
  margin-bottom: 0px !important;
}

/* 🎯 4. 精准控制三个方框的定位，整体大幅度往上提 */
.rspress-home-features {
  padding-top: 15px !important;  
  padding-bottom: 15px !important;
  margin-top: 0px !important;     /* 归零负边距，防止页面穿帮下移 */
}

/* 🎯 5. 让整个首页内容在导航栏下方垂直居中紧凑对齐 */
.rspress-home-layout {
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important; /* 让文字和三个框整体在屏幕中心聚拢 */
  align-items: center !important;
  height: calc(100vh - 64px) !important; /* 动态减去顶部导航栏高度 */
  gap: 10px !important; /* 💡 核心：这行直接控制“上方文字”与“下方三个框”的真实空隙，10px 极其紧凑 */
}

/* 📱 手机端微调，防止手机屏幕太小装不下内容 */
@media (max-width: 768px) {
  html, body {
    overflow: auto !important; /* 手机端由于文字会自动折行，允许其自然滚动防重叠 */
    height: auto !important;
  }
  .rspress-home-layout {
    height: auto !important;
    gap: 20px !important;
  }
}
</style>
