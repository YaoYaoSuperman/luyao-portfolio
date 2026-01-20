# 🚀 Vercel 部署指南

## 前置准备

1. **确保代码已推送到 GitHub**
   - 创建 GitHub 仓库
   - 将项目代码推送到仓库

2. **准备域名**
   - 确保你拥有 `luyao-ai.com` 域名的管理权限

---

## 方法一: 通过 Vercel Dashboard 部署 (推荐)

### 步骤 1: 创建 Vercel 账号

1. 访问 [vercel.com](https://vercel.com)
2. 使用 GitHub 账号登录(推荐,方便部署)
3. 完成账号设置

### 步骤 2: 导入项目

1. 在 Vercel Dashboard 点击 "Add New Project"
2. 从 "Import Git Repository" 列表中选择你的 GitHub 仓库
3. 点击 "Import"

### 步骤 3: 配置项目

Vercel 会自动识别 Next.js 项目,配置如下:

```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

点击 "Deploy" 开始部署

### 步骤 4: 等待部署完成

部署过程通常需要 2-5 分钟,完成后你会看到:
- 一个 `.vercel.app` 的临时域名
- "Congratulations!" 成功消息

### 步骤 5: 添加自定义域名

1. 进入项目页面,点击 "Settings" 标签
2. 点击左侧菜单的 "Domains"
3. 在输入框中输入 `luyao-ai.com`
4. 点击 "Add"

### 步骤 6: 配置 DNS 记录

Vercel 会显示需要添加的 DNS 记录:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

在你的域名注册商(如阿里云、腾讯云、GoDaddy 等)中添加以上记录:

#### 阿里云配置示例:
1. 登录阿里云控制台
2. 进入 "域名" → "域名列表"
3. 找到 `luyao-ai.com`,点击 "解析"
4. 添加记录:
   - 记录类型: A
   - 主机记录: `@`
   - 记录值: `76.76.21.21`
5. 添加第二条记录:
   - 记录类型: CNAME
   - 主机记录: `www`
   - 记录值: `cname.vercel-dns.com`

### 步骤 7: 验证 DNS 传播

DNS 传播通常需要 10 分钟到 48 小时不等:
1. 在 [dnschecker.org](https://dnschecker.org) 输入你的域名查看传播状态
2. Vercel 会在 DNS 配置正确后自动验证
3. 当状态变为 "Valid Configuration" 时表示成功

---

## 方法二: 通过 Vercel CLI 部署

### 步骤 1: 安装 Vercel CLI

```bash
npm i -g vercel
```

### 步骤 2: 登录 Vercel

```bash
vercel login
```

按照提示选择登录方式(推荐 GitHub)

### 步骤 3: 部署项目

```bash
cd /path/to/your/project
vercel
```

按照提示操作:
1. "Link to existing project?" → `N` (新建项目)
2. "What's your project's name?" → `luyao-portfolio`
3. "In which directory is your code located?" → `./`
4. "Want to override the settings?" → `N` (使用默认配置)

### 步骤 4: 添加自定义域名

```bash
vercel domains add luyao-ai.com
```

按照提示配置 DNS 记录

### 步骤 5: 生产环境部署

```bash
vercel --prod
```

---

## 部署后配置

### 启用 HTTPS

Vercel 会自动为你的域名提供免费的 SSL/TLS 证书:
1. 进入项目 Settings → Domains
2. 确认域名状态为 "Valid Configuration"
3. HTTPS 会自动启用

### 设置环境变量 (可选)

如果需要添加环境变量:
1. Settings → Environment Variables
2. 添加 `Key` 和 `Value`
3. 选择环境(Production / Preview / Development)
4. 点击 Save
5. 重新部署项目

### 配置自定义错误页面 (可选)

创建 `public/404.html` 和 `public/500.html` 来自定义错误页面

---

## 域名管理

### 重定向配置

如果需要将 `www.luyao-ai.com` 重定向到 `luyao-ai.com`:
1. Settings → Domains
2. 找到 `www.luyao-ai.com`
3. 点击 "..." → "Edit"
4. 勾选 "Redirect to luyao-ai.com"

### 多域名支持

如果需要添加其他域名:
1. 在 Domains 页面添加新域名
2. 配置对应的 DNS 记录
3. 等待 DNS 传播完成

---

## 持续部署

每次推送到 GitHub 主分支时,Vercel 会自动触发部署:
1. 修改代码并提交到 GitHub
2. Vercel 自动检测到更新
3. 自动构建和部署
4. 部署完成后更新生产环境

### 部署预览环境

在 Pull Request 中,Vercel 会自动创建预览环境,方便你:
- 在合并前预览更改
- 与团队协作审查
- 测试新功能

---

## 监控和日志

### 查看部署日志

1. 进入项目 Dashboard
2. 点击 "Deployments" 标签
3. 选择具体的部署版本
4. 查看 "Build Logs" 和 "Function Logs"

### 性能监控

Vercel Analytics 提供免费的基础监控:
1. Settings → Analytics
2. 点击 "Enable Analytics"
3. 查看页面访问量和性能数据

---

## 常见问题

### Q: 部署失败怎么办?

A: 检查以下几点:
1. 确保 `package.json` 中的 scripts 配置正确
2. 检查构建日志中的错误信息
3. 确保所有依赖都在 `dependencies` 或 `devDependencies` 中

### Q: DNS 验证一直失败?

A: 
1. 使用 [dnschecker.org](https://dnschecker.org) 检查 DNS 传播状态
2. 确认 DNS 记录类型和值正确
3. 检查是否使用了 DNS 代理(Cloudflare 等)
4. 等待 24-48 小时让 DNS 完全传播

### Q: 如何更新已部署的网站?

A: 
1. 修改本地代码
2. 提交到 GitHub
3. Vercel 会自动部署更新
4. 或者使用 CLI: `vercel --prod`

### Q: 如何回滚到之前的版本?

A:
1. 进入项目 Deployments 页面
2. 找到目标版本
3. 点击 "..." → "Promote to Production"

---

## 成本

Vercel 免费套餐包含:
- 无限项目
- 100GB 带宽/月
- 每月 6,000 分钟构建时间
- 自动 HTTPS
- 全球 CDN
- 实时日志

对于个人作品集网站完全够用!

---

## 下一步

部署完成后:
1. 访问 `https://luyao-ai.com` 查看网站
2. 在社交媒体上分享你的作品集
3. 定期更新内容和项目
4. 监控网站性能和访问量

---

## 联系支持

如果遇到问题:
- Vercel 文档: [vercel.com/docs](https://vercel.com/docs)
- Vercel 社区: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- Vercel 支持: support@vercel.com

---

祝你部署顺利! 🎉
