import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import {IBlogPostMetaData, IPortfolioMetaData} from "@/interfaces/postMetaData";


export const getPostBySlug = async (slug: string, rootDirectory:string) => {
    const realSlug = slug.concat('.mdx')
    const filePath = path.join(rootDirectory, `${realSlug}`)

    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

    const { frontmatter, content }:{frontmatter:IBlogPostMetaData | IPortfolioMetaData; content:any;} = await compileMDX({
        source: fileContent,
        options: { parseFrontmatter: true }
    })

    return { meta: { ...frontmatter}, content }
}

export const getAllPostsMeta = async (rootDirectory:string) => {
    const files = fs.readdirSync(rootDirectory)

    let posts = []

    for (const file of files) {
        const { meta } = await getPostBySlug(file, rootDirectory)
        posts.push(meta)
    }

    return posts
}