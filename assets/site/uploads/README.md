# 图片上传位置

每个图位有一个固定文件名. 你只要传**对应文件名**的 webp / jpg 图到这个文件夹, 网站自动显示.

## 文件名对照表

| 文件名 | 显示在哪里 |
|---|---|
| `cap1.webp` | Capabilities — Aluminium Cladding |
| `cap2.webp` | Capabilities — Balustrade & Handrail |
| `cap3.webp` | Capabilities — AC Grill & Louvre |
| `cap4.webp` | Capabilities — Feature Wall & Ceiling |
| `cap5.webp` | Capabilities — Stainless Steel Decoration |
| `work1.webp` | Selected Work №.001 Deep Water Pavilia |
| `work2.webp` | Selected Work №.002 Cullinan Harbour |
| `work3.webp` | Selected Work №.003 101 King's Road |
| `work4.webp` | Selected Work №.004 38 Spring Garden Lane |
| `work5.webp` | Selected Work №.005 Phoenext |
| `equip1.webp` | Studio — Laser Cutting Cell |
| `equip2.webp` | Studio — Laser Tube Cutting |
| `equip3.webp` | Studio — 500-Ton Press Brake |
| `equip4.webp` | Studio — Robotic Welding Cell |

## 上传方法 (GitHub 网页操作, 不需要装任何东西)

1. 浏览器打开 https://github.com/zhonglinhua5-boop/dongpai-site/tree/main/assets/site/uploads
2. 右上角点 **Add file → Upload files**
3. 把图拖到页面里 (图文件名必须跟上面表格一致, 如 `cap1.webp`)
4. 拖完之后页面最下方 **Commit changes** 写一句话 (随便, 比如 "添加 cap1 图")
5. 点绿色 **Commit changes** 按钮
6. **等 1-2 分钟** GitHub Pages 自动重新部署, 网站立刻出现新图

## 文件格式建议

- **WebP** 最好 (体积小, 现代浏览器都支持) 
- JPG / PNG 也可以, 但名字要改成 `.jpg` 或 `.png` 同时告诉我
- 单张图建议 **1200-1600 px 宽**, 600-1500 KB 以内
- 比例建议:
  - cap1-5: 接近 **4:5** (竖图)
  - work1-5: 接近 **16:10** (横图)
  - equip1-4: 接近 **4:3**
- 不强制, 网站会按比例自适应裁切显示
