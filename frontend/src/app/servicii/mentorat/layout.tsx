import { Metadata } from 'next/types';
import { metadata as md } from '@/date/googleAds';
import PageTemplate from '@/components/PageTemplate/PageTemplate';

export const metadata: Metadata = md;

const MentoratLayout = PageTemplate;

export default MentoratLayout;
