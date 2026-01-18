# 🚀 快速部署指南

## 📋 已完成的任务

✅ **网站功能测试** - 网站已在本地运行,所有交互正常
✅ **个人信息更新** - 已创建配置文件 `config/links.ts` 用于统一管理
✅ **论文链接添加** - 论文卡片已配置可点击链接
✅ **GitHub 链接配置** - 项目卡片已配置 GitHub 仓库链接
✅ **Git 仓库初始化** - 已完成 Git 初始化和提交

---

## 📤 推送到 GitHub

### 步骤 1: 在 GitHub 创建新仓库

1. 访问 [github.com/new](https://github.com/new)
2. 仓库名称建议: `luyao-portfolio` 或 `ai-portfolio`
3. 设置为 Public (公开) 或 Private (私有)
4. **不要**勾选 "Initialize this repository with a README"
5. 点击 "Create repository"

### 步骤 2: 添加远程仓库并推送

```bash
# 将本地仓库与 GitHub 仓库关联
git remote add origin https://github.com/YaoYaoSuperman/luyao-portfolio.git

# 推送代码到 GitHub
git push -u origin master
```

**注意**: 如果 GitHub 用户名不是 `YaoYaoSuperman`,请将上面的 URL 替换为你的实际 GitHub 仓库地址。

---

## 🌐 部署到 Vercel

### 方法一: 通过 Vercel Dashboard (推荐)

1. **访问 Vercel**
   - 打开 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "Add New Project"
   - 从列表中选择你的 GitHub 仓库
   - 点击 "Import"

3. **配置项目**
   - Framework: Next.js (自动识别)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - 点击 "Deploy"

4. **等待部署**
   - 部署过程需要 2-5 分钟
   - 完成后会获得 `.vercel.app` 域名

### 方法二: 通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署项目
vercel

# 生产环境部署
vercel --prod
```

---

## 🌐 绑定自定义域名 `luyao-ai.com`

### 步骤 1: 在 Vercel 添加域名

1. 进入项目页面,点击 "Settings"
2. 点击左侧菜单 "Domains"
3. 输入域名 `luyao-ai.com`
4. 点击 "Add"

### 步骤 2: 配置 DNS 记录

在你的域名注册商(如阿里云、腾讯云、GoDaddy 等)添加以下记录:

#### 记录 1 (A 记录)
```
类型: A
主机记录: @
记录值: 76.76.21.21
TTL: 600
```

#### 记录 2 (CNAME 记录)
```
类型: CNAME
主机记录: www
记录值: cname.vercel-dns.com
TTL: 600
```

### 步骤 3: 验证 DNS 传播

1. 使用 [dnschecker.org](https://dnschecker.org) 检查 DNS 状态
2. 等待 DNS 传播完成(10分钟 - 48小时)
3. Vercel 会自动验证并在状态显示 "Valid Configuration"

---

## 📝 更新配置文件

所有个人信息和链接都集中在 [config/links.ts](file:///home/luyao/projects/self_web/config/links.ts) 文件中:

### 修改个人信息
```typescript
export const config = {
  name: "Luyao",           // 你的名字
  email: "shzu_luyao@163.com",  // 邮箱
  github: "https://github.com/YaoYaoSuperman",  // GitHub
  // ...
}
```

### 修改论文链接
```typescript
papers: [
  {
    url: "https://your-paper-url.com",  // 更新为实际链接
    // ...
  }
]
```

### 修改项目链接
```typescript
projects: [
  {
    githubUrl: "https://github.com/YaoYaoSuperman/your-repo",  // 更新为实际仓库
    // ...
  }
]
```

**更新后记得提交并推送到 GitHub!**

---

## 🔧 本地开发命令

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

---

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
├── config/
│   └── links.ts             # 配置文件(个人信息、链接)
├── public/                   # 静态资源
├── vercel.json               # Vercel 配置
├── DEPLOYMENT.md             # 详细部署文档
├── README.md                 # 项目说明
└── package.json
```

---

## 🎨 设计特点

- **深空黑背景** (#0a0a0a) - 高端神秘的 AI 氛围
- **电光蓝和霓虹紫渐变** - 突出科技感和未来感
- **玻璃拟态卡片** - 现代化的 UI 设计
- **Bento Grid 布局** - 清晰的信息层次结构
- **Framer Motion 动画** - 丝滑的入场和悬停效果
- **完全响应式** - 完美适配移动端和桌面端

---

## 🐛 常见问题

### Q: 网站在本地运行正常,但部署后报错?

A: 
1. 检查 Vercel 部署日志
2. 确保所有依赖都在 `package.json` 中
3. 尝试清理并重新部署: `vercel --force`

### Q: DNS 验证一直失败?

A:
1. 使用 [dnschecker.org](https://dnschecker.org) 检查 DNS 状态
2. 确认 DNS 记录类型和值正确
3. 检查是否使用了 DNS 代理(如 Cloudflare)
4. 等待 24-48 小时让 DNS 完全传播

### Q: 如何更新网站内容?

A:
1. 修改 `config/links.ts` 文件
2. 提交更改: `git add . && git commit -m "update content"`
3. 推送到 GitHub: `git push`
4. Vercel 会自动重新部署

---

## 📞 需要帮助?

- Vercel 文档: [vercel.com/docs](https://vercel.com/docs)
- Next.js 文档: [nextjs.org/docs](https://nextjs.org/docs)
- Tailwind CSS 文档: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

## 🎉 下一步

1. **推送代码到 GitHub** - 按照上面的步骤推送代码
2. **部署到 Vercel** - 自动识别并部署 Next.js 项目
3. **绑定域名** - 添加 `luyao-ai.com` 并配置 DNS
4. **分享你的网站** - 在社交媒体和简历中分享

祝你部署顺利! 🚀
