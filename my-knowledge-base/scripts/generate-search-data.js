const fs = require('fs')
const path = require('path')

function getAllPosts() {
  const postsDir = path.join(process.cwd(), 'content/posts')
  if (!fs.existsSync(postsDir)) {
    return []
  }
  
  const files = fs.readdirSync(postsDir)
  return files.filter(file => file.endsWith('.md')).map(file => {
    const content = fs.readFileSync(path.join(postsDir, file), 'utf8')
    const slug = file.replace(/\.md$/, '')
    // 简单提取标题
    const titleMatch = content.match(/^#\s+(.+)$/m)
    return {
      id: slug,
      title: titleMatch ? titleMatch[1] : slug,
      slug: slug,
      content: content.substring(0, 1000), // 限制长度
    }
  })
}

// 生成搜索数据
const searchData = getAllPosts()
const outputPath = path.join(process.cwd(), 'public', 'search-data.json')
fs.writeFileSync(outputPath, JSON.stringify(searchData, null, 2))
console.log(`✅ 搜索数据已生成: ${outputPath}`)