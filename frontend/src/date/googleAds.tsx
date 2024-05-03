import { Metadata } from 'next/types';
import { HeroSectionData, SectionWithCards } from './types';
import { SEOInfo } from '@/utils/SeoInfo';
import { generateRandomId } from '@/utils/Helpers';

export const metadata: Metadata = new SEOInfo(
  'Servicii Promovare Google Ads » MarWeb 🚀',
  'Descoperă serviciile noastre de promovare Google Ads și alege soluția potrivită pentru afacerea ta! » MarWeb 🚀.',
  '/servicii/promovare-google-ads'
);


const S1: HeroSectionData = {
  heading: <>Servicii Promovare Google Ads</>,
  content: (
    <>
      Afla cum te pot ajuta sa iti eficientizezi costurile campaniilor Google
      Ads
    </>
  ),

  decoration: '',
};

const S2: SectionWithCards = {
  heading: <>Tipuri de Campanii in Google Ads</>,
  content: [
    {
      id: generateRandomId(),
      heading: <>Campanii de Rețea de Căutare:</>,
      description: (
        <>
          Aceste campanii afișează anunțuri textuale în rezultatele căutării
          Google, atunci când utilizatorii caută cuvinte cheie relevante pentru
          produsele sau serviciile oferite de afacerea ta.
        </>
      ),
    },
    {
      id: generateRandomId(),
      heading: <>Campanii de Rețea de Display</>,
      description: (
        <>
          Acest tip de campanii afișează anunțuri grafice și bannere pe site-uri
          partenere din rețeaua Google Display, ajungând la un număr mare de
          utilizatori în diferite locații online.
        </>
      ),
    },
    {
      id: generateRandomId(),
      heading: <>Campanii de Remarketing</>,
      description: (
        <>
          Aceste campanii îi vizează pe utilizatorii care au vizitat deja
          site-ul tău, afișându-le anunțuri relevante pentru a-i atrage înapoi
          și a-i converti în clienți.
        </>
      ),
    },
    {
      id: generateRandomId(),
      heading: <>Campanii Video</>,
      description: (
        <>
          Utilizând platforma YouTube, poți crea campanii video pentru a-ți
          promova produsele sau serviciile, ajungând la o audiență vastă de
          utilizatori interesați.
        </>
      ),
    },
    {
      id: generateRandomId(),
      heading: <>Campanii de Shopping</>,
      description: (
        <>
          Dacă ai un magazin online, campaniile de shopping îți permit să
          afișezi anunțuri cu imagini, prețuri și descrieri ale produselor tale
          în rezultatele căutării Google.
        </>
      ),
    },
    {
      id: generateRandomId(),
      heading: <>Campanii de Aplicație Mobilă</>,
      description: (
        <>
          Dacă ai o aplicație mobilă, poți utiliza Google Ads pentru a-ți
          promova aplicația și pentru a atrage mai mulți utilizatori să o
          descarce și să o folosească.
        </>
      ),
    },
    {
      id: generateRandomId(),
      heading: <>Campanii Smart</>,
      description: (
        <>
          Google Ads oferă opțiuni inteligente de campanii, care optimizează
          automat licitațiile și bugetele pentru a obține cele mai bune
          rezultate, având în vedere obiectivele afacerii tale.
        </>
      ),
    },
  ],
};

const GoogleAdsData = { S1, S2 };

export default GoogleAdsData;
