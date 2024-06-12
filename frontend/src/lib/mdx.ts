import Globals from '@/utils/globals';
import { ApiClientError, ApiClientSuccess } from '@/utils/ApiClient';
import {toast} from 'react-toastify'
import { IBlogPost } from '@/declarations/blog';
import BlogPost from '@/classes/BlogPost';
import Portfolio from '@/classes/Portfolio';
import { Iportfolio } from '@/declarations/Iportfolio';
const api = Globals.getApiClient()
export const getPostBySlug = async (slug: string) => {
  const res :ApiClientError | ApiClientSuccess<IBlogPost> = await api.get(`/blog-post/published/${slug}`)
  if(res instanceof ApiClientError) {
   console.log("Eroare Server")
    throw res
  }

  return new BlogPost(res.data)
}

export const getPortfolioDataBySlug = async (slug: string):Promise<Portfolio> => {

  const res :ApiClientError | ApiClientSuccess<Iportfolio> = await api.get(`/portfolio-item/${slug}`)
  if(res instanceof ApiClientError) {
    toast.error("Eroare Server")
    throw res
  }

  return new Portfolio(res.data)
}

export const   getAllPortfolioItems = async ():Promise<Portfolio[]> => {
 try {

   const res :ApiClientError | ApiClientSuccess<Iportfolio[]> = await api.get("/portfolio-item")
   if(res instanceof ApiClientError) {
    throw res
   }

   return res.data.map((post:Iportfolio) => new Portfolio(post))
 }
 catch (e) {
   console.log(JSON.stringify(e))
   return []
 }
}


export const getAllPostsURL = async ():Promise<string[]> =>{
  const posts = await getAllPostsMeta()
  return posts.map(post =>{return post.slug})
}
export const   getAllPostsMeta = async ():Promise<BlogPost[]> => {

   const res :ApiClientError | ApiClientSuccess<IBlogPost[]> = await api.get("/blog-post/published")
    if(res instanceof ApiClientError) {
        console.log("NU exista articole de blog")
      return []
    }
    if(res && res.data && res.data.length !== 0 ){
      return res.data.map(post => new BlogPost(post))
    }

    else {
      console.log(res.data)
    throw new Error("!")
  }
}