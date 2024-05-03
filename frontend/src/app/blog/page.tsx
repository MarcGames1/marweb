import {getAllPostsMeta} from '@/lib/mdx'
import path from "path";
import Link from "next/link";
import Image from "next/image";
import {H} from "@/components";
import styles from "@/sections/Servicii/Servicii.module.css";
import {TextAlignment, TextSize} from "@/components/Typography/H";
import React from "react";
import {Metadata} from "next";
import {SEOInfo} from "@/utils/SeoInfo";

const mdDir = path.join(process.cwd(), 'src', 'app', 'blog', 'posts')

// C:\Users\Alexandru\Documents\GitHub\MarWebBlog\MarWebBlog\frontend\src\app\portofoliu\items





const BlogPage = async () => {
    const posts = await getAllPostsMeta(mdDir)

    return (

            <div className="py-12 px-5">
                <h2 className="after-effect after:left-80 mt-12 lg:mt-0">
                    Blog SEO si IT
                </h2>

                {posts.map(post => (
                    <section

                        key={post.id}
                        className={` flex flex-col items-center gap-5 self-stretch rounded-xl  about-box dark:bg-transparent`}

                    >

                        <Link  href={`/blog/${post.permalink}`}><Image className=" " src={post.thumbnail} width={300} height={300}  alt={post.title}/></Link>
                        <div className="space-y-2 ">
                            <H
                                className={
                                    styles.card_title + ' dark:text-white text-xl font-semibold'
                                }
                                level={'span'}
                            >
                                {post.title}
                            </H>
                            <H
                                size={TextSize.lg}
                                alignment={TextAlignment.justify}
                                className={
                                    'leading-8 text-gray-lite dark:text-[#A6A6A6] break-words hyphens-auto  break-before-column'
                                }
                                level={'span'}
                            >
                                <span>{post.author}</span> {" "}
                                <span>{new Date(post.date).toLocaleDateString()}</span>

                            </H>
                        </div>
                        <Link href={`/blog/${post.permalink}`} className="rounded-md self-center cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-l from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6] linked bg-gradient-to-r ">
                            Citeste Mai Mult
                        </Link>
                    </section>
                ))}
            </div>
)

}


export default BlogPage