import Globals from '@/utils/globals';
import { ApiClientError, ApiClientSuccess } from '@/utils/ApiClient';
import {toast} from 'react-toastify'
import { IBlogPost } from '@/declarations/blog';
import BlogPost from '@/classes/BlogPost';
import Portfolio from '@/classes/Portfolio';
import { Iportfolio } from '@/declarations/Iportfolio';
const api = Globals.getApiClient()
export const getPostBySlug = async (slug: string) => {

  const res :ApiClientError | ApiClientSuccess<IBlogPost> = await api.get(`/blog-post/${slug}`)
  if(res instanceof ApiClientError) {
    toast.error("Eroare Server")
    throw res
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


export const   getAllPostsMeta = async ():Promise<BlogPost[]> => {
   const res :ApiClientError | ApiClientSuccess<IBlogPost[]> = await api.get("/blog-post/all")
    if(res instanceof ApiClientError) {
        console.log("NU exista articole de blog")
      return []
    }
    console.log(res.data)
    return res.data.map(post => new BlogPost(post))
}