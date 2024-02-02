import { Metadata } from 'next/types';
import { SEOInfo } from '@/classes/SeoInfo';
import { CardBGColor, HeroSectionData, PortraitVideoContentGallery, SectionWithCards, SectionWithCardsAndPic } from './types';
import Link from 'next/link';
import { generateRandomId } from '@/utils/Helpers';

export const metadata: Metadata = new SEOInfo(
  'Servicii Optimizare SEO Profesionale in Romania » MarWeb 🚀',
  'Servicii de optimizare SEO profesionale GARANTAM exclusivitate pe Domeniu de Activitate! » MarWeb 🚀.',
  '/servicii/seo/'
);


const S1: HeroSectionData = {
  heading: <span>Servicii Optimizare SEO Profesionale in Romania</span>,
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
      id: generateRandomId(),
      heading: 'Audit SEO On Page',
      description: (
        <>
          Recomandari care castiga increderea utilizatorului si a motorului de
          cautare se mai numeste si Seo on-page
        </>
      ),
      bg: CardBGColor.c1,
    },
    {
      id: generateRandomId(),
      heading: 'Cercetare Avansata a Cuvintelor Cheie',
      description:
        'Vedem Cum Cauta Utilizatorii Tai in Google produsele sau serviciile tale si ce continut doreste acesta sa vada',
      bg: CardBGColor.c2,
    },
    {
      id: generateRandomId(),
      heading: 'SEO Off Page',
      description:
        'Construim un plan de Link Building care sa creasca autoritatea si increderea domeniului tau prin comunicate de presa gandite strategic',
      bg: CardBGColor.c3,
    },
    {
      id: generateRandomId(),
      heading: 'Audit SEO On Page',
      description:
        'Audit detaliat al site-ului tău pentru a identifica punctele slabe și oportunitățile de îmbunătățire',
      bg: CardBGColor.c1
    },
  ],
};

const S3: SectionWithCards = {
  content: [
    {
      id: generateRandomId(),
      heading: 'Analiză și Strategie',
      description: (
        <>
          <p>
            Înțelegem nevoile și obiectivele afacerii tale și dezvoltăm o
            strategie SEO personalizată.
          </p>
          <p>
            Asta inseamna ca vom lucra continu pentru a gasi noi oportunitati
            SEO, monitorizam concurenta si scoatem in evidenta ceea ce te
            diferentiaza la nivel de brand.
          </p>
        </>
      ),
      bg: CardBGColor.c1,
    },

    {
      id: generateRandomId(),
      heading: 'Implementare',
      description: (
        <>
          <p>
            Pregătim site-ul tău pentru succes, optimizând fiecare aspect
            necesar pentru rezultate excelente.
          </p>
          <p>
            Dupa aceasta pregatire initiala, ( Primul Audit On Page ) vom
            monitoriza progresul si apoi venim constant cu imbunatatiri pentru
            ca tu sa iti cresti vizibilitatea, rata de click si rata de
            conversie
          </p>
        </>
      ),
      bg: CardBGColor.c2,
    },
    {
      id: generateRandomId(),
      heading: 'Monitorizare și Raportare',
      description:
        'Urmarim constant progresul și îți oferim rapoarte detaliate pentru a fi mereu la curent cu rezultatele.',
      bg: CardBGColor.c3,
    },
    {
      id: generateRandomId(),
      heading: 'Adaptare',
      description:
        'Ne ajustăm strategia pe măsură ce evoluează afacerea ta și mediul online.',
      bg: CardBGColor.c1,
    },
  ],
  heading: <>Cum Vom Lucra </>,
};

const S4: PortraitVideoContentGallery = {
  heading: <>Studii De Caz SEO</>,
  content: [
    {
      id: generateRandomId(),
      heading: 'KevinTrinity.com',
      description: 'Recomandari imbunatatire targetare \n pe cuvinte cheie si UX',
      video: {
        src: '/videos/StudiideCazSEO/1.mp4',
        id: generateRandomId(),
        width: 1080,
        height: 1920,
      },
      bg: CardBGColor.c1,
    },
    {
      id: generateRandomId(),
      heading: 'TuristulVesel.ro',
      description: 'Recomandari Continut Blog + Continut Video ',
      video: {
        src: '/videos/StudiideCazSEO/2.mp4',
        id: generateRandomId(),
        width: 1080,
        height: 1920,
      },
      bg: CardBGColor.c2,
    },
    {
      id: generateRandomId(),
      heading: 'Sentris.ro',
      description: 'Oportunitate SEO gasita pentru Ceasuri Cuplu',
      video: {
        src: '/videos/StudiideCazSEO/3.mp4',
        id: generateRandomId(),
        width: 1080,
        height: 1920,
      },
      bg: CardBGColor.c3,
    },
    {
      id: generateRandomId(),
      heading: 'Sugar Couture',
      description: 'Recomandari SEO On Page si Structura Pagini',
      video: {
        src: '/videos/StudiideCazSEO/4.mp4',
        id: generateRandomId(),
        width: 1080,
        height: 1920,
      },
      bg: CardBGColor.c4,
    },
    {
      id: generateRandomId(),
      heading: 'BikeExplore.ro',
      description:
        'Recomandari oportunitati noi pentru extinderea \n acoperirii pe cuvinte cheie relevante ',
      video: {
        src: '/videos/StudiideCazSEO/5.mp4',
        id: generateRandomId(),
        width: 1080,
        height: 1920,
      },
      bg: CardBGColor.c5,
    },
    {
      id: generateRandomId(),
      heading: 'Restaurant Turcesc Cigeristan',
      description: 'Recomandari Google Business Profile',
      video: {
        src: '/videos/StudiideCazSEO/6.mp4',
        id: generateRandomId(),
        width: 1080,
        height: 1920,
      },
      bg: CardBGColor.c6,
    },
    {
      id: generateRandomId(),
      heading: 'Imbunatatire Google SERP',
      description: 'Recomandari imbunatatire targetare pe cuvinte cheie si UX',
      video: {
        src: '/videos/StudiideCazSEO/7.mp4',
        id: generateRandomId(),
        width: 1080,
        height: 1920,
      },
      bg: CardBGColor.c7,
    },
    {
      id: generateRandomId(),
      heading: 'Tacos & Burgers',
      description: 'Recomandari Continut',
      video: {
        src: '/videos/StudiideCazSEO/8.mp4',
        id: generateRandomId(),
        width: 1080,
        height: 1920,
      },
      bg: CardBGColor.c8,
    },
    {
      id: generateRandomId(),
      heading: 'My Surprise.ro',
      description:
        'Recomandari imbunatatire targetare pe cuvinte cheie \n Structura Website',
      video: {
        src: '/videos/StudiideCazSEO/9.mp4',
        id: generateRandomId(),
        width: 1080,
        height: 1920,
      },
      bg: CardBGColor.c9,
    },
    {
      id: generateRandomId(),
      heading: 'Rezultate dupa 3 luni',
      description:
        'SEO On Page si Imbunatatire Viteza de incarcare \n Link Building',
      video: {
        src: '/videos/StudiideCazSEO/10.mp4',
        id: generateRandomId(),
        width: 1080,
        height: 1920,
      },
      bg: CardBGColor.c1,
    },
    {
      id: generateRandomId(),
      heading: 'Keman.ro',
      description:
        'Recomandari imbunatatire targetare pe cuvinte cheie \n Structura Website',
      video: {
        src: '/videos/StudiideCazSEO/11.mp4',
        id: generateRandomId(),
        width: 1080,
        height: 1920,
      },
      bg: CardBGColor.c2,
    },
    {
      id: generateRandomId(),
      heading: 'Lens Of Alex',
      description: 'Identificare Pattern de cautare \n Recomandari SEO Local',
      video: {
        src: '/videos/StudiideCazSEO/12.mp4',
        id: generateRandomId(),
        width: 1080,
        height: 1920,
      },
      bg: CardBGColor.c3,
    },
    {
      id: generateRandomId(),
      heading: 'DopoPoco.ro',
      description: 'Recomandari GBP + SEO On Page',
      video: {
        src: '/videos/StudiideCazSEO/13.mp4',
        id: generateRandomId(),
        width: 1080,
        height: 1920,
      },
      bg: CardBGColor.c4,
    },
    {
      id: generateRandomId(),
      heading: 'FoodKit.ro',
      description: 'Identificare cuvinte cheie \n Recomandari On Page',
      video: {
        src: '/videos/StudiideCazSEO/14.mp4',
        id: generateRandomId(),
        width: 1080,
        height: 1920,
      },
      bg: CardBGColor.c5,
    },
    {
      id: generateRandomId(),
      heading: 'Ophori.ro',
      description: 'Recomandari Continut Blog',
      video: {
        src: '/videos/StudiideCazSEO/15.mp4',
        id: generateRandomId(),
        width: 1080,
        height: 1920,
      },
      bg: CardBGColor.c6,
    },
    {
      id: generateRandomId(),
      heading: 'Looramland.ro',
      description: 'Identificare cuvinte cheie \n Recomandari On Page',
      video: {
        src: '/videos/StudiideCazSEO/16.mp4',
        id: generateRandomId(),
        width: 1080,
        height: 1920,
      },
      bg: CardBGColor.c7,
    },
  ],
};
const SeoData = {S1, S2,S3, S4}


export default SeoData