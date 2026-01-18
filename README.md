# Luyao - AI Researcher Portfolio

高端未来感 AI 个人作品集网站

## 🚀 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **部署**: Vercel

## 📦 安装依赖

```bash
npm install
```

## 🛠️ 开发

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## 🏗️ 构建

```bash
npm run build
```

## 🚀 部署到 Vercel

### 方法一: 通过 Vercel CLI

1. 安装 Vercel CLI
```bash
npm i -g vercel
```

2. 登录 Vercel
```bash
vercel login
```

3. 部署项目
```bash
vercel
```

4. 绑定自定义域名
```bash
vercel domains add luyao-ai.com
```

### 方法二: 通过 Vercel Dashboard

1. 访问 [vercel.com](https://vercel.com)
2. 导入 GitHub 仓库
3. Vercel 会自动识别 Next.js 项目并开始构建
4. 构建完成后,在 Settings > Domains 中添加域名 `luyao-ai.com`

### 域名配置

1. 在 Vercel 项目的 Settings > Domains 中添加域名 `luyao-ai.com`
2. Vercel 会提供 DNS 记录信息:
   - A 记录指向: `76.76.21.21`
   - CNAME 记录指向: `cname.vercel-dns.com`
3. 在你的域名注册商处添加相应的 DNS 记录
4. 等待 DNS 传播完成(通常 24-48 小时)

### 环境变量(可选)

如果需要添加环境变量,在 Vercel 项目设置的 Environment Variables 中配置。

## 📂 项目结构

```
├── app/
│   ├── globals.css          # 全局样式
│   ├── layout.tsx            # 根布局
│   └── page.tsx              # 主页
├── components/
│   ├── Hero.tsx              # 首屏区域
│   ├── Stats.tsx             # 关键数据
│   ├── Papers.tsx            # 精选论文
│   ├── Projects.tsx          # 重点项目
│   ├── Awards.tsx            # 荣誉奖项
│   └── Footer.tsx            # 页脚
├── public/                   # 静态资源
├── tailwind.config.ts        # Tailwind 配置
├── next.config.js            # Next.js 配置
├── tsconfig.json             # TypeScript 配置
└── vercel.json               # Vercel 配置
```

## 🎨 设计特点

- **深空黑背景**: 营造高端、神秘的 AI 氛围
- **电光蓝和霓虹紫渐变**: 突出科技感和未来感
- **玻璃拟态卡片**: 现代化的 UI 设计
- **Bento Grid 布局**: 清晰的信息层次结构
- **Framer Motion 动画**: 丝滑的交互体验
- **响应式设计**: 完美适配移动端和桌面端

## 📄 许可证

MIT License

---

Built with ❤️ for the Future of AI
