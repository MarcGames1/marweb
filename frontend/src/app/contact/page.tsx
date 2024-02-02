
import { Metadata } from 'next'
import { SEOInfo } from '../../classes/SeoInfo';
import ContactComponent from './component';

export const metadata: Metadata = new SEOInfo(
  'Contact Alexandru Marcu - MarWeb',
  'Contact Alexandru Marcu - MarWeb',
  '/contact'
);

const Contact = ContactComponent

export default Contact