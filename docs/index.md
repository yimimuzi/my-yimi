---
pageType: home

hero:
  name: 一米生态 | Goyimi.com
  tagline: 一米距离，无限生态 —— 让服务与科技，近在咫尺。

features:
  - title: 一米传媒（全域数字新媒体旗舰）
    details: 全国领先的直播经纪 company 与 MCN 服务机构。深度聚焦直播、MCN、电商、游戏、品牌服务五大核心赛道，全面打通抖音、快手、微信视频号、腾讯 NOW 等一线头部新媒体平台，构建起庞大的公私域流量闭环与全域商业变现矩阵。
    icon: 🚀
  - title: 一米农场（数字化涉农创新生态）
    details: 立足于四川大凉山得天独厚的光热气候与纯净原生态资源，开创全新的一对一精准认养模式。提供高品质蔬菜、时令水果、高原家禽及橄榄油的一对一单式专属认养，让大凉山的绿色有机农业方便快捷地走进千家万户。
    icon: 🌾
  - title: 一米新能源（绿色科技与智慧出行）
    details: 全场景电动汽车（EV）智慧充电解决方案服务商。以“智慧充电，无处不在”为使命，专注于为小区、酒店、写字楼及公共停车场等目的地提供定制化的充电桩安装与智能运营服务，确保电动汽车用户在任何场景下都能轻松补能。
    icon: ⚡
---

<style>
/* 1. 彻底抽干上半部分文字组件的所有内外边距 */
.rspress-home-hero, 
[class*="home-hero"], 
[class*="hero-wrapper"] {
  padding-top: 15px !important;
  padding-bottom: 0px !important;
  margin-bottom: 0px !important;
}

/* 2. 彻底瓦解 Rspress 首页可能存在的布局间隙 (gap) */
[class*="home-layout"],
.rspress-home-hero + div {
  gap: 0px !important;
}

/* 3. 终极强力向上吸附，直接拉大到 -240px */
.rspress-home-features {
  padding-top: 0px !important;  
  margin-top: -240px !important; /* 强行跨越并吞噬掉中间所有隐藏的空白容器 */
  position: relative !important;
  z-index: 10 !important;
}

/* 4. 完美兼顾手机等移动端，防止重叠 */
@media (max-width: 768px) {
  .rspress-home-features {
    margin-top: -120px !important;
  }
}
</style>
