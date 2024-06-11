import { getAllPortfolioItems, getAllPostsMeta } from '@/lib/mdx';
;
import Link from "next/link";
import Image from "next/image";
import {H} from "@/components";
import styles from "@/sections/Servicii/Servicii.module.css";
import {TextAlignment, TextSize} from "@/components/Typography/H";
import React from "react";



export const fetchCache = "force-no-store"

export async function generateStaticParams() {
    const posts = await getAllPortfolioItems()

    return posts.map((post) => ({
        item: post.metadata.alternates.canonical,
    }))
}


const PortofoliuPage = async () => {
    const posts = await getAllPortfolioItems()

    return (

            <div className="py-12 px-5">
                <h2 className="after-effect after:left-80 mt-12 lg:mt-0">
                    Povesti de Succes
                </h2>

                {posts.map(post => (
                    <section
                        key={post.id}
                        className={` flex flex-col items-center gap-5 self-stretch rounded-xl  about-box dark:bg-transparent`}
                    >

                        <Link  href={`${post.url}`}><Image className=" " src={post.thumbnail.url} width={300} height={300}  alt={post.title}/></Link>
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
                                <span>{post.author.preNume}</span> {" "}
                              <span>{post.author.nume}</span> {" "}


                            </H>
                        </div>
                        <Link href={`/portofoliu${post.slug}`} className="rounded-md self-center cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 px-2 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-l from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6] linked bg-gradient-to-r ">
                            Citeste Mai Mult
                        </Link>
                    </section>
                ))}
            </div>
)

}


export default PortofoliuPage