import {MetadataRoute} from 'next';
import {HeaderMenuData} from '@/date/menuData'
import { getAllPostsMeta } from '@/lib/mdx';
import path from 'path';
import { IBlogPostMetaData } from '@/interfaces/postMetaData';
const base_url = 'https://marweb.ro'
const mdDir = path.join(process.cwd(), 'src', 'app', 'blog', 'posts')
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const urls:string[] = [base_url]
  const posts:any = await getAllPostsMeta(mdDir)
  posts.forEach((post:{permalink:string})=> urls.push(`${base_url}/blog/${post.permalink}`))
  const pagesurl = HeaderMenuData.map(menuData =>{
    return `${base_url}${menuData.routePath}`
  })
  pagesurl.forEach(url => urls.push(url))

  return urls.map(url => {
    return {
      url,
      lastModified:new Date(),
      changeFrequency: 'monthly',
      priority:1,
    }
  })
}