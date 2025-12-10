import { notFound } from 'next/navigation'

// 这里先返回静态参数，后面会从 lib/markdown.ts 动态获取
export async function generateStaticParams() {
  return [{ slug: 'welcome' }]
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  // 这里先写死内容，后面会从 lib/markdown.ts 获取
  if (params.slug !== 'welcome') {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">欢迎来到我的知识库</h1>
        <div className="text-sm text-gray-500">2024年1月20日 • 2 分钟阅读</div>
      </header>
      <div className="prose prose-lg max-w-none">
        <p>这是我的第一篇知识库文章，完全基于GitHub Pages构建。</p>
        <p>这个知识库使用以下技术构建：</p>
        <ul>
          <li>Next.js 14 (静态导出模式)</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>GitHub Pages (免费托管)</li>
        </ul>
        <p>欢迎开始你的知识管理之旅！</p>
      </div>
    </article>
  )
}