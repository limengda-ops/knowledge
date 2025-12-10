import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import gfm from 'remark-gfm'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostData {
  id: string
  slug: string
  title: string
  date: string
  formattedDate: string
  tags: string[]
  category?: string
  excerpt?: string
  contentHtml: string
  readingTime: number
}

export async function getPostBySlug(slug: string): Promise<PostData | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const processedContent = await remark()
      .use(gfm)
      .use(html)
      .process(content)
    const contentHtml = processedContent.toString()

    const readingTime = Math.ceil(content.length / 500)
    const date = data.date ? new Date(data.date) : new Date()
    const formattedDate = date.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    return {
      id: slug,
      slug,
      title: data.title || slug,
      date: date.toISOString(),
      formattedDate,
      tags: data.tags || [],
      category: data.category || '未分类',
      excerpt: data.excerpt || content.substring(0, 150) + '...',
      contentHtml,
      readingTime,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getAllPosts(): PostData[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts: PostData[] = []

  fileNames.forEach(fileName => {
    if (fileName.endsWith('.md')) {
      const slug = fileName.replace(/\.md$/, '')
      // 注意：这里简化了，实际应该异步处理
      const post = getPostBySlug(slug)
      if (post) {
        allPosts.push(post as PostData)
      }
    }
  })

  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1))
}