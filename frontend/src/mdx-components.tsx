import type { MDXComponents } from 'mdx/types'
import ContacteazaMa from '@/components/CTA Widget/ContacteazaMa';
import Link from "next/link";


export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {


        ContacteazaMa,
        ...components,
    }
}