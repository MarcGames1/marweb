import { Metadata } from 'next';
import { CardBGColor, HeroSectionData, SectionWithCards, SectionWithCardsLinkAndPic } from './types';
import { SEOInfo } from '@/app/classes/SeoInfo';
import { generateRandomId } from '@/utils/Helpers';



export const metadata: Metadata = new SEOInfo(
  'Agentie Marketing Online cu rezultate • MarWeb.ro',
  'Agentie Marketing Online • MarWeb.ro Te ajutam cu Strategii Unice Pentru Afacerea ta Online.',
  '/'
);



const S1: HeroSectionData = {
  heading: <>AGENTIE MARKETING ONLINE</>,
  content: (
    <>
      <p>
        Te ajutăm să-ți crești veniturile și să obții notorietate în mediul
        online prin optimizarea site-ului pentru motoarele de căutare.
      </p>
      <p>
        Vrei să-ți crești numărul vizitelor pe site fără să investești bugete
        enorme în reclame?
      </p>
    </>
  ),

  decoration: '',
};

const S2: SectionWithCardsLinkAndPic = {
  heading: <>Uite cum te putem ajuta să-ți atingi obiectivele:</>,
  content: [
    {
      id: generateRandomId(),
      heading: 'CREARE SITE WEB',
      description:
        'Asigurăm servicii complete de creare site-uri web performante, ușor de administrat, complet funcționale, pregătite să vândă și să te poziționeze drept autoritate în piață. Integrăm misiunea și viziunea afacerii tale într-un design responsive cu ajutorul celor mai noi tehnologii.',
      image: {
        width: 100,
        height: 100,
        alt: 'Poza Reprezentativa Creare site-uri web',
        src: '/assets/services/web.png',
      },
      href: '/servicii/creare-website',
      bg: CardBGColor.c1,
    },
    {
      id: generateRandomId(),
      heading: 'Optimizare SEO'.toUpperCase(),
      description:
        'Îți aducem site-ul pe prima pagină prin strategii complete și personalizate adaptate business-ului tău. Nu te ajutăm doar să-ți crești numărul de vizitatori. Ne asigurăm că site-ul tău este optimizat și pregătit pentru ca o simpla vizită să se transforme într-o conversie.',
      image: {
        width: 100,
        height: 100,
        alt: 'Poza Reprezentativa Servicii SEO',
        src: '/assets/services/seo.png',
      },
      href: '/servicii/seo',
      bg: CardBGColor.c2,
    },
    {
      id: generateRandomId(),
      heading: 'GOOGLE ADS',
      description:
        'Îți promovăm și creștem afacerea prin campanii Google ADS optimizate, la costuri minime și în concordanță cu strategia ta de business. Setăm publicul țintă, concepem mesaje de impact și gestionăm bugetele eficient, astfel încât să ne asigurăm că vei avea rezultate măsurabile.',
      image: {
        width: 100,
        height: 100,
        alt: 'Poza Reprezentativa servicii Google ADs',
        src: '/assets/services/ads.png',
      },
      href: '/servicii/google-ads',
      bg: CardBGColor.c3,
    },
    {
      id: generateRandomId(),
      heading: 'Mentorat'.toUpperCase(),
      description:
        'Descoperă mentoratul personalizat în SEO și web development! Îți ofer soluții practice pentru creșterea afacerii tale online. Conectează-te acum pentru ghidare expertă!',
      image: {
        width: 100,
        height: 100,
        alt: 'poza reprezentativa servicii mentorat',
        src: '/assets/services/mentorat.png',
      },
      bg: CardBGColor.c4,
      href: '/servicii/mentorat',
    },
  ],
};

const S3: SectionWithCards = {
  heading: 'Cum va decurge colaborarea cu agentia de marketing online MarWeb',
  content: [
    {
      id: generateRandomId(),
      heading: ' FACEM CUNOȘTINȚĂ',
      description:
        'Programezi o ședință 1 la 1 – complet gratuită, în care îți vom solicita câteva informații relevante pentru a reuși să identificăm nevoile tale de business.',
      bg: CardBGColor.c4,
    },

    {
      id: generateRandomId(),
      heading: 'STABILIM OBIECTIVELE ȘI PLANUL DE ACȚIUNE',
      description:
        'Stabilim obiective strategice și măsurabile pe termen scurt, mediu și lung. Identificăm cuvintele cheie pe care putem crește și acțiunile necesare atât din partea noastră cât și a ta.',
      bg: CardBGColor.c5,
    },
    {
      id: generateRandomId(),
      heading: 'VEZI REZULTATELE ÎN TIMP REAL',
      description:
        'Vei fi în permanență în control și vei putea verifica rezultatele tuturor strategiilor implementate, precum și evoluția poziției site-ului tău în căutările Google, pe cuvintele cheie stabilite.',
    },
    {
      id: generateRandomId(),
      heading: 'CALL ȘI PREZENTARE RAPORT LUNAR',
      description:
        'La finalul fiecărei luni, îți prezentăm un raport complet de activitate: ce acțiuni am întreprins, care sunt rezultatele și ce urmează să realizăm în luna următoare pentru a atinge obiectivele stabilite.',
      bg: CardBGColor.c6,
    },
  ],
};

const S4 = {
  heading: 'De Ce Sa COLABOREZI cu Agentia de Marketing Online MarWeb?',
  content: [
    {
      id: generateRandomId(),
      bg: CardBGColor.c7,
      heading: 'Suntem transparenți',
      description:
        'Nu promitem imposibilul. Analizăm atent oportunitățile de dezvoltare specifice domeniului tău și adaptăm strategiile de marketing în funcție de obiectivele tale de business și de bugete.',
    },
    {
      id: generateRandomId(),
      bg: CardBGColor.c8,
      heading: 'Dezvoltăm parteneriate durabile',
      description:
        'Clienții noștri nu sunt simpli clienți ci devin partenerii noștri. Ne implicăm activ în fiecare proiect și dezvoltăm parteneriate bazate pe încredere și rezultate concrete.',
    },
    {
      id: generateRandomId(),
      bg: CardBGColor.c9,
      heading: 'Comunicare și proactivitate',
      description:
        'O relație de business solidă se construiește prin comunicare. Comunicăm cu partenerii noștri ori de câte ori este nevoie pentru a ne asigura că nu pierdem nicio oportunitate de creștere dar și pentru a ține sub control provocările care apar pe parcursul colaborării.',
    },
    {
      id: generateRandomId(),
      bg: CardBGColor.c1,
      heading: 'Analiză și raportare',
      description:
        'Analizăm rezultatele constant și adaptăm obiectivele strategice în funcție de performanțele realizate. Te ținem la curent cu metricii importanți rezultați în urma campaniilor implementate, astfel încât să știi în orice moment unde te afli și care sunt perspectivele de viitor.',
    },
  ],
};

const HomepageData = {S1, S2, S3, S4}


export default HomepageData