import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostData {
  id: string;
  slug: string;
  title: string;
  date: string;
  formattedDate: string;
  tags: string[];
  category?: string;
  excerpt?: string;
  contentHtml: string;
  readingTime: number;
}

// 核心函数：根据文件名获取单篇文章的完整数据
export function getPostBySlug(slug: string): PostData {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(gfm)
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  const readingTime = Math.ceil(content.length / 500); // 估算阅读时间
  const postDate = data.date ? new Date(data.date) : new Date();
  const formattedDate = format(postDate, 'yyyy年MM月dd日', { locale: zhCN });

  return {
    id: slug,
    slug: slug,
    title: data.title || slug,
    date: data.date || postDate.toISOString(),
    formattedDate,
    tags: data.tags || [],
    category: data.category,
    excerpt: data.excerpt || content.substring(0, 150) + '...',
    contentHtml,
    readingTime,
  };
}

// 核心函数：获取所有文章的列表（用于首页和列表页）
export function getAllPosts(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      return getPostBySlug(slug);
    });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1)); // 按日期倒序
}