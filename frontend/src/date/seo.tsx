import { Metadata } from 'next/types';
import { SEOInfo } from '@/app/classes/SeoInfo';
import { HeroSectionData, SectionWithCards, SectionWithCardsAndPic } from './types';
import Link from 'next/link';

export const metadata: Metadata = new SEOInfo(
  'Servicii Optimizare SEO Profesionale in Romania » MarWeb 🚀',
  'Servicii de optimizare SEO profesionale GARANTAM exclusivitate pe Domeniu de Activitate! » MarWeb 🚀.',
  '/servicii/seo/'
);


const S1: HeroSectionData = {
  heading: <>Servicii Optimizare SEO Profesionale in Romania</>,
  content: (
    <>
      <p>
        Servicii de optimizare SEO profesionale pentru afacerea ta din România.
      </p>
      <p>Iti crestem numarul de clienti si vizibilitatea in mediul online</p>
      <p>GARANTAM exclusivitate pe Domeniu de Activitate!</p>
    </>
  ),

  decoration: '',
};

const S2: SectionWithCards = {
  heading: <> Serviciile Profesionale de optimizare SEO includ:</>,
  content: [
    {
      heading: 'Audit SEO On Page',
      description: (
        <>
          Recomandari care castiga increderea utilizatorului si a motorului de
          cautare se mai numeste si
          Seo on-page
        </>
      ),
     
    },
    {
      heading: 'Cercetare Avansata a Cuvintelor Cheie',
      description:
        'Vedem Cum Cauta Utilizatorii Tai in Google produsele sau serviciile tale si ce continut doreste acesta sa vada',
      
    },
    {
      heading: 'SEO Off Page',
      description:
        'Construim un plan de Link Building care sa creasca autoritatea si increderea domeniului tau prin comunicate de presa gandite strategic',
     
    },
    {
      heading: 'Audit SEO On Page',
      description:
        'Audit detaliat al site-ului tău pentru a identifica punctele slabe și oportunitățile de îmbunătățire',
      
    },
  ],
};

const S3: SectionWithCardsAndPic = {
  content: [
    {
      heading: 'Analiză și Strategie',
      description:
        'Înțelegem nevoile și obiectivele afacerii tale și dezvoltăm o strategie SEO personalizată.',
      image: {
        src: '',
        alt: 'Poza Reprezentativa Audit SEO On Page',
        width: 300,
        height: 300,
      },
    },
    {
      heading: 'Implementare',
      description:
        'Pregătim site-ul tău pentru succes, optimizând fiecare aspect necesar pentru rezultate excelente.',
      image: {
        src: '',
        alt: 'Poza Reprezentativa Audit SEO On Page',
        width: 300,
        height: 300,
      },
    },
    {
      heading: 'Monitorizare și Raportare',
      description:
        'Urmarim constant progresul și îți oferim rapoarte detaliate pentru a fi mereu la curent cu rezultatele.',
      image: {
        src: '',
        alt: 'Poza Reprezentativa Audit SEO On Page',
        width: 300,
        height: 300,
      },
    },
    {
      heading: 'Adaptare',
      description:
        'Ne ajustăm strategia pe măsură ce evoluează afacerea ta și mediul online.',
      image: {
        src: '',
        alt: 'Poza Reprezentativa Audit SEO On Page',
        width: 300,
        height: 300,
      },
    },
  ],
  heading: (
    <>Cum Vom Lucra </>
  ),
};

const SeoData = {S1, S2,S3}


export default SeoData