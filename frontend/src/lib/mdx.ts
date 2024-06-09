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
    return undefined;
  }

  return new BlogPost(res.data)
}

export const getPortfolioDataBySlug = async (slug: string):Promise<Portfolio> => {

  const res :ApiClientError | ApiClientSuccess<Iportfolio> = await api.get(`/portfolio/${slug}`)
  if(res instanceof ApiClientError) {
    toast.error("Eroare Server")
    throw res
  }

  return new Portfolio(res.data)
}

export const   getAllPortfolioItems = async ():Promise<Portfolio[]> => {
  const res :ApiClientError | ApiClientSuccess<Iportfolio[]> = await api.get("/portfolio/all")
  if(res instanceof ApiClientError) {
    console.log("NU exista articole de blog")
    return []
  }
  console.log(res.data)
  return res.data.map((post:Iportfolio) => new Portfolio(post))
}


export const getAllPostsURL = async ():Promise<string[]> =>{
  const res:ApiClientError | ApiClientSuccess<string[]> = await api.get("/blog-post/published/url")
  if(res instanceof ApiClientError) {
    console.log("NU exista articole de blog")
    return []
  }
  return res.data
}
export const   getAllPostsMeta = async ():Promise<BlogPost[]> => {
  'use server'
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