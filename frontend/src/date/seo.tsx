import { Metadata } from 'next/types';
import { SEOInfo } from '@/app/classes/SeoInfo';
import { HeroSectionData, PortraitVideoContentGallery, SectionWithCards, SectionWithCardsAndPic } from './types';
import Link from 'next/link';
import { generateRandomId } from '@/utils/Helpers';

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
      id: generateRandomId(),
      heading: 'Audit SEO On Page',
      description: (
        <>
          Recomandari care castiga increderea utilizatorului si a motorului de
          cautare se mai numeste si Seo on-page
        </>
      ),
      bg: '#EEF5FA',
    },
    {
      id: generateRandomId(),
      heading: 'Cercetare Avansata a Cuvintelor Cheie',
      description:
        'Vedem Cum Cauta Utilizatorii Tai in Google produsele sau serviciile tale si ce continut doreste acesta sa vada',
      bg: '#FFF4F4',
    },
    {
      id: generateRandomId(),
      heading: 'SEO Off Page',
      description:
        'Construim un plan de Link Building care sa creasca autoritatea si increderea domeniului tau prin comunicate de presa gandite strategic',
      bg: '#FFF1FB',
    },
    {
      id: generateRandomId(),
      heading: 'Audit SEO On Page',
      description:
        'Audit detaliat al site-ului tău pentru a identifica punctele slabe și oportunitățile de îmbunătățire',
      bg: '#F2F4FF',
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
      bg: '#EEF5FA',
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
      bg: '#FCF4FF',
    },
    {
      id: generateRandomId(),
      heading: 'Monitorizare și Raportare',
      description:
        'Urmarim constant progresul și îți oferim rapoarte detaliate pentru a fi mereu la curent cu rezultatele.',
      bg: '#FCF9F2',
    },
    {
      id: generateRandomId(),
      heading: 'Adaptare',
      description:
        'Ne ajustăm strategia pe măsură ce evoluează afacerea ta și mediul online.',
      bg: '#FCF4FF',
    },
  ],
  heading: <>Cum Vom Lucra </>,
};

const S4: PortraitVideoContentGallery = {
  heading: <>Studii De Caz SEO</>,
  content: [
    {
      src: '',
      id: generateRandomId(),
      width:1080,
      height:1920
    },
  ],
};
const SeoData = {S1, S2,S3, S4}


export default SeoData