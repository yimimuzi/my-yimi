
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
