import { metadata as md } from '@/date/seo';


export const metadata = md;


export default function SEOLayout ({ children,
}: {
  children: React.ReactNode}) {
    return <>{children}</>
}