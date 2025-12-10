import Link from 'next/link';

// 临时文章数据 - 实际使用时会从 lib/markdown.ts 获取
const tempPosts = [
  {
    id: 'welcome',
    slug: 'welcome',
    title: '欢迎来到我的知识库',
    date: '2024-01-20',
    formattedDate: '2024年1月20日',
    tags: ['欢迎', '介绍', '开始'],
    category: '介绍',
    excerpt: '这是我的第一篇知识库文章，记录我的学习和思考。',
    readingTime: 2,
  },
  {
    id: 'nextjs-guide',
    slug: 'nextjs-guide',
    title: 'Next.js 14 入门指南',
    date: '2024-01-19',
    formattedDate: '2024年1月19日',
    tags: ['Next.js', 'React', '教程'],
    category: '前端开发',
    excerpt: '学习如何使用 Next.js 14 构建现代化 Web 应用。',
    readingTime: 5,
  },
  {
    id: 'github-pages-deploy',
    slug: 'github-pages-deploy',
    title: 'GitHub Pages 部署完全指南',
    date: '2024-01-18',
    formattedDate: '2024年1月18日',
    tags: ['部署', 'GitHub', 'CI/CD'],
    category: '运维部署',
    excerpt: '如何将静态网站免费部署到 GitHub Pages。',
    readingTime: 3,
  },
];

export default function Home() {
  const posts = tempPosts; // 使用临时数据
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              我的知识库
            </Link>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                首页
              </Link>
              <Link href="/posts" className="text-gray-700 hover:text-blue-600 font-medium">
                所有文章
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
                关于
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 英雄区域 */}
      <header className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            构建你的数字第二大脑
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            一个简洁高效的个人知识管理系统，基于 Next.js 14 和 GitHub Pages 构建。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#latest-posts"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              开始阅读
            </Link>
            <Link
              href="https://github.com/your-username/your-repo"
              target="_blank"
              className="px-6 py-3 bg-white text-gray-800 font-medium rounded-lg border hover:bg-gray-50 transition-colors"
            >
              GitHub 仓库
            </Link>
          </div>
        </div>
      </header>

      {/* 主要内容 */}
      <main className="container mx-auto px-4 py-12">
        {/* 最新文章 */}
        <section id="latest-posts" className="mb-16">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">最新文章</h2>
            <Link 
              href="/posts" 
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              查看全部
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article 
                key={post.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-6">
                  {/* 文章元信息 */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.formattedDate}</span>
                  </div>

                  {/* 文章标题 */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    <Link 
                      href={`/posts/${post.slug}`} 
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  {/* 文章摘要 */}
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* 标签 */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* 阅读更多 */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-gray-500">
                      📖 {post.readingTime} 分钟阅读
                    </span>
                    <Link 
                      href={`/posts/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    >
                      阅读全文
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 功能特性 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">为什么选择这个知识库</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border text-center">
              <div className="text-blue-500 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">极速体验</h3>
              <p className="text-gray-600">
                基于 Next.js 14 静态生成，页面加载瞬间完成，提供流畅的阅读体验。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border text-center">
              <div className="text-green-500 text-4xl mb-4">🆓</div>
              <h3 className="text-xl font-bold mb-3">完全免费</h3>
              <p className="text-gray-600">
                使用 GitHub Pages 免费托管，无需服务器费用，真正零成本运营。
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border text-center">
              <div className="text-purple-500 text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3">移动优先</h3>
              <p className="text-gray-600">
                响应式设计，在手机、平板、电脑上都有完美显示效果。
              </p>
            </div>
          </div>
        </section>

        {/* 快速开始指南 */}
        <section className="bg-white rounded-xl shadow-sm border p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">快速开始</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">添加新文章</h4>
                <p className="text-gray-600">
                  在 <code className="bg-gray-100 px-2 py-1 rounded text-sm">content/posts/</code> 目录下创建 Markdown 文件
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">推送代码</h4>
                <p className="text-gray-600">
                  将代码推送到 GitHub，GitHub Actions 会自动构建并部署
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">访问网站</h4>
                <p className="text-gray-600">
                  访问你的 GitHub Pages 地址，新文章即刻上线
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">我的知识库</h3>
              <p className="text-gray-300">记录思考，分享知识，持续成长</p>
            </div>
            <div className="flex space-x-6">
              <a href="/rss.xml" className="text-gray-300 hover:text-white transition-colors">
                RSS
              </a>
              <a 
                href="https://github.com/your-username/your-repo" 
                target="_blank" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                关于
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} 我的知识库. 基于 Next.js 与 GitHub Pages 构建.</p>
            <p className="mt-2">本网站完全开源，欢迎贡献你的想法。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}