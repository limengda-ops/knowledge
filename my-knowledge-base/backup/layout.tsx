// app/layout.tsx
import type { Metadata } from 'next';
//import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

//const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '我的知识库',
  description: '个人知识管理与分享',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="min-h-screen">
          {/* 顶部导航栏 */}
          <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">知识库</Link>
              <div className="space-x-6">
                <Link href="/" className="text-gray-600 hover:text-gray-900">首页</Link>
                {/* 未来可以在这里添加SearchBar组件 */}
              </div>
            </div>
          </nav>
          {/* 主内容区 */}
          <main className="container mx-auto px-4 py-8">{children}</main>
          {/* 页脚 */}
          <footer className="border-t text-center py-6 text-gray-500 text-sm">
            © {new Date().getFullYear()} 我的知识库. 基于 Next.js 与 GitHub Pages.
          </footer>
        </div>
      </body>
    </html>
  );
}