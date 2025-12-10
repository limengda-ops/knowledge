/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // 关键：启用静态导出
  images: {
    unoptimized: true,        // GitHub Pages 不支持图片优化
  },
  trailingSlash: true,        // URL 以 / 结尾
  // basePath: '/my-knowledge-base', // 如果你的仓库名不是 用户名.github.io，取消注释这行
}

module.exports = nextConfig