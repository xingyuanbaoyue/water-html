# 梦璃 MoRi 吧唧（徽章）展示页

一个轻量、纯静态的网页，用于展示 VTuber「梦璃 MoRi」的水母主题吧唧框架与多种风格效果（圆形 / 圆角方 / 勋章，水母蓝 / 深海紫 / 薄荷绿 等）。

## 使用方式

1. 将你的角色图片命名为 `mori.png` 放入 `assets/` 目录（推荐透明 PNG）。
2. 直接用浏览器打开 `index.html` 即可查看展示效果。
3. 如果 `assets/mori.png` 不存在，页面会自动使用占位图 `mori-placeholder.svg`。

## 目录结构

- `index.html` —— 展示页面（含“预览”与“风格一览”画廊）
- `styles/mori.css` —— 样式（水母主题、丝带、气泡动画、画廊卡片）
- `assets/` —— 放置角色图片与占位图

> 说明：仓库中仍保留 `scripts/mori.js`（早期生成器脚本），但默认页面未使用脚本；你可以按需删除。

## 部署

纯前端项目，可直接部署到 GitHub Pages、Netlify、Vercel 或任意静态托管平台。
