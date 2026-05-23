---
pageType: home
---

<div class="one-page-container">

  <div class="eco-header">
    <h1>一米生态 | Goyimi.com</h1>
    <p class="tagline">一米距离，无限生态 —— 让服务与科技近在咫尺！</p>
  </div>

  <div class="eco-content">
    <h2>核心业务</h2>
    
    <div class="business-row">
      <h3>🚀 一米传媒 <span class="sub-title">（全域数字新媒体旗舰）</span></h3>
      <p>全国领先的直播经纪公司与 MCN 服务机构。深度聚焦直播、MCN、电商、游戏、品牌服务五大核心赛道，全面打通抖音、快手、微信视频号、腾讯 NOW 等一线头部新媒体平台，构建起庞大的公私域流量闭环与全域商业变现矩阵。</p>
    </div>

    <div class="business-row">
      <h3>🌾 一米农场 <span class="sub-title">（数字化涉农创新生态）</span></h3>
      <p>立足于四川大凉山得天独厚的光热气候与纯净原生态资源，开创全新的一对一精准认养模式。提供高品质蔬菜、时令水果、高原家禽及橄榄油的一对一定单式专属认养，让大凉山的绿色有机农业方便快捷地走进千家万户。</p>
    </div>

    <div class="business-row">
      <h3>⚡ 一米新能源 <span class="sub-title">（绿色科技与智慧出行）</span></h3>
      <p>全场景电动汽车（EV）智慧充电解决方案服务商。以“智慧充电，无处不在”为使命，专注于为小区、酒店、写字楼及公共停车场等目的地提供定制化的充电桩安装与智能运营服务，确保电动汽车用户在任何场景下都能轻松补能。</p>
    </div>
  </div>

</div>

<style>
/* 🪄 锁死全屏，拔掉恶心的滚动条，保证一页看完 */
html, body, #root, .rspress-theme {
  overflow: hidden !important;
  height: 100vh !important;
}

/* 隐藏官方默认布局 */
.rspress-home-hero, .rspress-home-features {
  display: none !important;
}

/* 🛠️ 全局单页垂直居中容器 */
.one-page-container {
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important; 
  align-items: center !important;     
  height: calc(100vh - 80px) !important; 
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 顶部标题样式 */
.eco-header {
  text-align: center;
  margin-bottom: 30px; 
}

.eco-header h1 {
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(120deg, #34d399, #3b82f6); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
}

.eco-header .tagline {
  font-size: 1.2rem;
  color: var(--rp-c-text-2);
}

/* 核心业务板块 */
.eco-content {
  width: 100%;
}

.eco-content h2 {
  font-size: 1.4rem;
  font-weight: 600;
  border-bottom: 1px solid var(--rp-c-divider);
  padding-bottom: 6px;
  margin-bottom: 20px;
  color: var(--rp-c-text-1);
}

/* 💡 核心：控制每个业务介绍完毕后，下方留出的“一行空格” */
.business-row {
  margin-bottom: 28px; /* 👈 这个像素值刚好相当于在文字下方多空出了一整行，拉开和下一个业务的距离 */
}

/* 最后一个业务块不需要再往下空行了 */
.business-row:last-child {
  margin-bottom: 0px; 
}

.business-row h3 {
  font-size: 1.15rem;
  font-weight: bold;
  color: var(--rp-c-text-1);
  margin-bottom: 6px;
}

.business-row .sub-title {
  font-size: 0.95rem;
  font-weight: normal;
  color: var(--rp-c-text-2);
}

.business-row p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--rp-c-text-2);
  text-align: justify;
  margin: 0;
}

/* 📱 手机端自动切换回自然滚动，防止文字叠在一起 */
@media (max-width: 768px) {
  html, body, #root, .rspress-theme {
    overflow: auto !important;
    height: auto !important;
  }
  .one-page-container {
    height: auto !important;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .business-row {
    margin-bottom: 20px;
  }
}
</style>
