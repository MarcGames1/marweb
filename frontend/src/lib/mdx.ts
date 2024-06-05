import Globals from '@/utils/globals';
import { ApiClientError, ApiClientSuccess } from '@/utils/ApiClient';
import {toast} from 'react-toastify'
import { IBlogPost } from '@/declarations/blog';
import BlogPost from '@/classes/BlogPost';
const api = Globals.getApiClient()
export const getPostBySlug = async (slug: string) => {

  const res :ApiClientError | ApiClientSuccess<IBlogPost> = await api.get(`/blog-post/${slug}`)
  if(res instanceof ApiClientError) {
    toast.error("Eroare Server")
    throw res
  }

  return new BlogPost(res.data)
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