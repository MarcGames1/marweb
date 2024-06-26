import { HeaderMenuData } from '@/date/menuData';
import { getAllPostsURL } from '@/lib/mdx';

const base_url = 'https://marweb.ro'

const getAllUrls = async () =>{
  return await getAllPostsURL()
}
export default async function sitemap(): Promise<{
  lastModified: Date;
  priority: number;
  changeFrequency: string;
  url: string
}[]> {

  const urls:string[] = [base_url]
  const data = await getAllUrls()
    data.forEach(slug=> urls.push(`${base_url}/blog/${slug}`))
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