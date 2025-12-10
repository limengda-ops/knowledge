import Link from 'next/link'

// 临时数据，稍后从 lib/markdown.ts 获取
const tempPosts = [
  {
    id: 'welcome',
    slug: 'welcome',
    title: '欢迎来到我的知识库',
    formattedDate: '2024年1月20日',
    category: '介绍',
    excerpt: '这是我的第一篇知识库文章，完全基于GitHub Pages构建。',
    readingTime: 2,
    tags: ['欢迎', '开始']
  }
]

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">我的知识库</h1>
      <div className="grid gap-6">
        {tempPosts.map((post) => (
          <article key={post.id} className="border p-6 rounded-lg bg-white">
            <div className="text-sm text-gray-500 mb-2">{post.formattedDate}</div>
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/posts/${post.slug}`} className="hover:text-blue-600">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-3">{post.excerpt}</p>
            <Link href={`/posts/${post.slug}`} className="text-blue-500 hover:underline">
              阅读全文 →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}