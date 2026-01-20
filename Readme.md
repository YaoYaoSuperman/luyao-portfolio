# 卢瑶的个人作品集

基于 Next.js 16.1.3 和 Tailwind CSS 构建的现代化个人网站，极简设计美学。

## ✨ 特性

- 🎨 极简设计美学，大量留白
- 📱 完全响应式，适配所有设备
- ⚡ 基于 Next.js 16.1.3 + Turbopack，极速构建
- 🎯 使用 Tailwind CSS，高度可定制
- 🖼️ 精美的图片展示和交互动效
- 📧 TypeScript 类型安全

## 🛠️ 技术栈

- **前端框架**: Next.js 16.1.3 (React 19)
- **样式**: Tailwind CSS 3.4
- **图标**: Lucide React
- **部署**: Vercel
- **语言**: TypeScript
- **包管理**: npm

## 📁 项目结构

```
self_web/
├── app/
│   ├── layout.tsx          # 根布局
│   ├── page.tsx             # 首页
│   └── globals.css         # 全局样式
├── components/
│   ├── Navbar.tsx            # 导航栏
│   ├── Hero.tsx              # 首页 Hero 区域
│   ├── About.tsx             # 关于我
│   ├── Projects.tsx           # 精选项目
│   ├── Gallery.tsx            # 生活影像
│   └── Contact.tsx            # 联系我
├── public/
│   ├── profile.jpg           # 个人照片
│   ├── photo1.jpg           # 生活照片1
│   ├── photo2.jpg           # 生活照片2
│   ├── photo3.jpg           # 生活照片3
│   └── photo4.jpg           # 生活照片4
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

### 生产构建

```bash
npm run build
npm start
```

## 📄 页面说明

### 首页
- 个人简介和介绍
- 下载简历和研究论文的按钮
- 响应式图片展示

### 关于我
- 个人背景和教育经历
- 技术栈展示
- 获奖证书

### 精选项目
- 项目卡片网格展示
- 项目详情和描述
- 分类标签

### 生活影像
- 照片画廊网格布局
- hover 交互效果

### 联系我
- 联系信息和表单
- 社交媒体链接
- 邮箱：hust_luyao@hust.edu.cn

## 🎨 设计风格

- **字体**: 系统默认字体，简洁现代
- **颜色**: 黑白灰配色，中性色调
- **间距**: 大量留白，呼吸空间
- **边距**: px-6 md:px-12，符合设计美学
- **最大宽度**: max-w-7xl，内容居中对齐

## 📱 响应式断点

- **mobile**: < 768px
- **tablet**: 768px - 1024px
- **desktop**: > 1024px

## 🔧 配置

### Tailwind CSS

已配置自定义颜色和字体，支持暗色模式（预留）。

### Next.js

使用 App Router，支持服务器端渲染（SSR）。

## 📝 更新日志

### 2026-01-20
- ✅ 初始化项目
- ✅ 创建所有核心组件
- ✅ 实现响应式布局
- ✅ 添加图片展示和交互效果
- ✅ 优化字体和排版
- ✅ 配置 Vercel 部署

## 🌐 在线访问

网站已部署至：https://luyao-ai.xin

## 📧 维护

### 定期更新

建议定期更新：
- 添加新项目到 Projects
- 更新生活照片到 Gallery
- 更新联系方式

### 性能优化

- 使用 Next.js Image 组件优化图片加载
- 启用 Vercel Analytics 监控性能
- 定期检查和优化构建速度

## 📄 License

MIT License - 可自由使用和修改

## 👤 联系方式

- 邮箱：hust_luyao@hust.edu.cn
- 学校：华中科技大学 (HUST)
- 专业：人工智能算法工程师
