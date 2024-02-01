import { Metadata } from 'next/types';
import { metadata as md } from '@/date/seo';
import PageTemplate from '@/components/PageTemplate/PageTemplate';

export const metadata: Metadata = md;

const SeoLayout = PageTemplate

export default SeoLayout;
