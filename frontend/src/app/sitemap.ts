import {MetadataRoute} from 'next';
import {HeaderMenuData} from '@/date/menuData'
import { getAllPostsMeta } from '@/lib/mdx';
const base_url = 'https://marweb.ro'
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const urls:string[] = [base_url]
  const posts = await getAllPostsMeta()
  posts.forEach(post=> urls.push(`${base_url}/blog/${post.slug}`))
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