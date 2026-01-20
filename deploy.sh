#!/bin/bash

echo "🚀 开始部署到 Vercel..."
echo ""

echo "📝 步骤 1: 检查 Git 状态..."
git status

echo ""
echo "📝 步骤 2: 检查远程仓库..."
if git remote get-url origin &>/dev/null; then
    echo "远程仓库已配置: $(git remote get-url origin)"
else
    echo "⚠️  未配置远程仓库"
fi

echo ""
echo "🔗 步骤 3: 配置远程仓库..."
git remote set-url origin https://github.com/YaoYaoSuperman/luyao-portfolio.git
echo "远程仓库: https://github.com/YaoYaoSuperman/luyao-portfolio.git"

echo ""
echo "⚠️  重要提示！"
echo "请先在 GitHub 上创建仓库："
echo ""
echo "1. 访问: https://github.com/new"
echo "2. Repository name: luyao-portfolio"
echo "3. 选择 Public 或 Private"
echo "4. ⚠️  不要勾选 'Initialize this repository with a README'"
echo "5. 点击 'Create repository'"
echo ""
echo "创建完成后，按任意键继续推送代码..."
read -n 1 -s

echo ""
echo "📤 步骤 4: 推送代码到 GitHub..."
git push -u origin master

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ 代码已成功推送到 GitHub！"
    echo ""
    echo "🌐 接下来的步骤："
    echo "1. 访问: https://github.com/YaoYaoSuperman/luyao-portfolio"
    echo "2. 确认代码已成功推送"
    echo ""
    echo "📦 步骤 5: 部署到 Vercel"
    echo "1. 访问: https://vercel.com"
    echo "2. 使用 GitHub 账号登录"
    echo "3. 点击 'Add New Project'"
    echo "4. 找到 'luyao-portfolio' 仓库并点击 'Import'"
    echo "5. 等待部署完成（2-5 分钟）"
    echo "6. 部署完成后会获得 .vercel.app 域名"
    echo ""
    echo "🌐 步骤 6: 绑定域名 luyao-ai.com"
    echo "1. 部署完成后，进入项目 Settings > Domains"
    echo "2. 添加域名 'luyao-ai.com'"
    echo "3. 配置 DNS 记录："
    echo "   - A 记录: @ → 76.76.21.21"
    echo "   - CNAME 记录: www → cname.vercel-dns.com"
else
    echo ""
    echo "❌ 推送失败！请检查："
    echo "1. GitHub 仓库是否已创建"
    echo "2. 仓库名称是否正确：luyao-portfolio"
    echo "3. 是否有 GitHub 访问权限"
    echo ""
    echo "🔗 重新创建仓库地址："
    echo "https://github.com/new"
fi
