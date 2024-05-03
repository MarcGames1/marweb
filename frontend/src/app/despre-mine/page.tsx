
import { Metadata } from 'next'
import { SEOInfo } from '../../utils/SeoInfo';
import DespreComponent from './component';

export const metadata: Metadata = new SEOInfo(
  'Despre Mine Alexandru Marcu - MarWeb',
  'Despre Mine Alexandru Marcu - MarWeb',
  '/despre-mine'
);

const DespreMine = DespreComponent

export default DespreMine