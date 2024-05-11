import {
    CardBGColor,
    HeroSectionData,
    SectionWithCards,
    SectionWithCardsAndPic,
    SectionWithCardsLinkAndPic
} from "./types";
import {generateRandomId} from "@/utils/Helpers";


const S1: HeroSectionData = {
  heading: (
    <>
      {' '}
      Transformă Viziunea în Realitate Online: Creăm Website-uri{' '}
      <span className="block text-oriange font-bold">Unice și Eficiente</span>
    </>
  ),
  content: (
    <>
      Design personalizat, performanță optimă și strategie SEO pentru afacerea
      ta online
    </>
  ),
};

const S2: SectionWithCardsAndPic = {
    heading: <>De ce ai nevoie de o implementare <span className={' text-oriange font-bold'}>custom</span>?</>,
    content: [
        {
            id: generateRandomId(),
            heading: 'Personalizare completă',
            description:
                'Crearea unui site web custom oferă o flexibilitate mai mare în ceea ce privește designul, funcționalitățile și experiența utilizatorului. Poți crea un site unic și personalizat care să se potrivească perfect nevoilor și identității brandului tău.',
            image: {
                width: 100,
                height: 100,
                alt: 'Poza Reprezentativa Creare site-uri web',
                src: '/assets/WEBSITE/Personalizare.png',
            },
            bg: CardBGColor.c1,
        },
        {
            id: generateRandomId(),
            heading: 'Securitate îmbunătățită'.toUpperCase(),
            description:
                'Crearea unui site web custom îți oferă control total asupra securității site-ului. Poți implementa măsuri de securitate personalizate pentru a proteja site-ul împotriva atacurilor cibernetice și a vulnerabilităților de securitate.',
            image: {
                width: 100,
                height: 100,
                alt: 'Poza Reprezentativa Securitate Sporita',
                src: '/assets/WEBSITE/securitate.png',
            },
            bg: CardBGColor.c2,
        },
        {
            id: generateRandomId(),
            heading: 'Scalabilitate',
            description:
                ' Un site web custom poate fi proiectat pentru a fi scalabil, ceea ce înseamnă că poate crește și evolua pe măsură ce afacerea ta crește. Poți adăuga noi funcționalități și caracteristici în timp fără a fi limitat de constrângerile unei teme predefinite.',
            image: {
                width: 100,
                height: 100,
                alt: 'Poza Reprezentativa servicii Google ADs',
                src: '/assets/WEBSITE/scalabilitate.png',
            },
            bg: CardBGColor.c3,
        },
        {
            id: generateRandomId(),
            heading: 'Integrare cu alte sisteme'.toUpperCase(),
            description:
                'Un site web custom poate fi integrat mai ușor cu alte sisteme și aplicații utilizate în afacerea ta, cum ar fi sistemele de gestionare a relațiilor cu clienții (CRM), sistemele de contabilitate sau alte aplicații de back-office.',
            image: {
                width: 200,
                height: 200,
                alt: 'poza reprezentativa Integrari cu alte sisteme',
                src: '/assets/WEBSITE/Integrari.png',
            },
            bg: CardBGColor.c5,
        },
        {
            id: generateRandomId(),
            heading: "Controlul complet al conținutului",
            description: "Cu un site web custom, ai control total asupra conținutului și structurii site-ului. Nu vei fi limitat de șabloanele și restricțiile impuse de o temă predefinită",
            image: {
                width: 100,
                height: 100,
                alt: 'poza reprezentativa servicii mentorat',
                src: '/assets/WEBSITE/continut.png',
            },
            bg: CardBGColor.c6,
        },
        {
            id: generateRandomId(),
            heading: "Costuri reduse pe termen lung",
            description: " Deși inițial poate părea că construirea unui site web custom este mai costisitoare, pe termen lung poate fi mai rentabilă. În timp ce utilizarea unei platforme CMS poate implica costuri lunare pentru plugin-uri, teme premium, servicii de gazduire și actualizări de securitate, un site web custom poate reduce aceste costuri recurente sau le poate elimina complet, economisind bani pe termen lung." ,
            image: {
                width: 100,
                height: 100,
                alt: 'poza reprezentativa servicii mentorat',
                src: '/assets/WEBSITE/costuri.png',
            },
            bg: CardBGColor.c7,
        },
        {
            id: generateRandomId(),
            heading: "Experiență de utilizare îmbunătățită",
            description: "Un site web custom poate fi proiectat pentru a oferi o experiență de utilizare superioară și mai intuitivă pentru vizitatori. Fiind construit de la zero pentru a îndeplini nevoile și obiectivele specifice ale afacerii tale, acesta poate fi optimizat pentru a ghida utilizatorii către acțiuni și conversii relevante, îmbunătățind astfel experiența și angajamentul utilizatorilor.\n" +
                "\n",
            image: {
                width: 100,
                height: 100,
                alt: 'poza reprezentativa servicii mentorat',
                src: '/assets/WEBSITE/UX.png',
            },
            bg: CardBGColor.c8,
        },
        {
            id: generateRandomId(),
            heading: "Control complet al proprietății și datelor",
            description: "Creând un site web custom, ai control total asupra proprietății și datelor tale. Nu ești legat de termenii și condițiile unui furnizor de CMS și nu ești expus riscului de a-ți pierde site-ul sau datele în cazul în care acesta încetează să funcționeze sau să-și înceteze activitatea. Ai libertatea de a lua decizii independente și de a controla complet direcția și dezvoltarea site-ului tău în viitor.",
            image: {
                width: 100,
                height: 100,
                alt: 'poza reprezentativa servicii mentorat',
                src: '/assets/WEBSITE/control.png',
            },
            bg: CardBGColor.c9,
        },


    ],
};
const S3 : SectionWithCards = {
  heading: (
    <>
        Nu Instalam teme, modul nostru de lucru este diferit:
        <span className="block text-oriange font-bold">Vrei sa Vezi Cum Lucram?</span>
    </>
),
    content: [
        {
            id: generateRandomId(),
            heading: 'Coordonarea Proiectului',
            description:
               "stabilirea obiectivelor, planificarea și monitorizarea progresului, gestionarea resurselor și comunicarea cu toate părțile implicate.",
            bg: CardBGColor.c4,
        },

        {
            id: generateRandomId(),
            heading: 'IMPLEMENTĂM USER STORES SI METODOLOGII AGILE',
            description:
                'Implementăm User Stories și metodologii Agile pentru a facilita dezvoltarea iterativă și adaptativă a proiectului.',
        },

        {
            id: generateRandomId(),
            heading: 'STABILIM ARHITECTURA SOFTWARE SPECIFICA NEVOILOR TALE DE BUSINESS',
            description:
                'Asigurăm stabilirea unei arhitecturi software specifice nevoilor tale de business, adaptată pentru a oferi o soluție personalizată și scalabilă.'
        },
        {
            id: generateRandomId(),
            heading: 'DESIGN PERSONALIZAT ȘI FUNCȚIONALITĂȚI AVANSATE',
            description:
                'Creăm un design unic și personalizat pentru site-ul tău, integrând funcționalități avansate pentru a oferi o experiență de utilizare remarcabilă și pentru a îndeplini obiectivele tale de afaceri.',
            bg:CardBGColor.c8
        },
        {
            id: generateRandomId(),
            heading: 'OPTIMIZARE PENTRU CONVERSII ȘI MOTOR DE CĂUTARE',
            description:
                'Optimizăm site-ul pentru conversii și pentru motoarele de căutare, pentru a atrage mai mult trafic și pentru a transforma vizitatorii în clienți.',
            bg: CardBGColor.c6,
        },
        {
            id: generateRandomId(),
            heading: 'SUPPORT ȘI COMUNICARE CONTINUĂ',
            description:
                'Oferim un suport și o comunicare continuă pe întreaga durată a proiectului. Echipa noastră este mereu disponibilă să răspundă întrebărilor tale și să te țină la curent cu progresul și evoluția proiectului. Astfel, poți avea încredere că vei fi mereu la curent cu tot ceea ce se întâmplă și că ne asigurăm că obiectivele tale sunt îndeplinite în mod eficient și profesional.',
            bg:CardBGColor.c7
        }

    ],
};

const S4: HeroSectionData = {
  content: (
    <>
      Creaza un prim impact puternic și diferențiază-ți afacerea cu un //
      website <span className="block text-oriange font-bold">custom</span>, adaptat complet
      identității și obiectivelor brandului tău.
    </>
  ),
  heading: (
    <>
        Nu Instalam teme, Modul nostru de lucru este diferit:
    <span className="block text-oriange font-bold">Iata Cum Lucram?</span>
    </>
  ),
  
};

export {S1, S2, S3}