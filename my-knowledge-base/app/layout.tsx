import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '我的知识库',
  description: '个人知识管理与分享平台',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="bg-gray-50">
        <div className="min-h-screen flex flex-col">
          <nav className="bg-white shadow-sm border-b">
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <a href="/" className="text-xl font-bold text-gray-800">知识库</a>
                <div className="space-x-6">
                  <a href="/" className="text-gray-600 hover:text-gray-900">首页</a>
                  <a href="/posts" className="text-gray-600 hover:text-gray-900">文章</a>
                  <a href="/about" className="text-gray-600 hover:text-gray-900">关于</a>
                </div>
              </div>
            </div>
          </nav>
          <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
          <footer className="border-t text-center py-6 text-gray-500 text-sm">
            © {new Date().getFullYear()} 我的知识库. 基于 Next.js 与 GitHub Pages.
          </footer>
        </div>
      </body>
    </html>
  )
}