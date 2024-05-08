import {generateRandomId} from "@/utils/Helpers";

interface Intrebare {
    id: string;
    intrebare: string;
    categorie: string;
    raspunsmultiplu:boolean
    raspunsuri: Raspuns[];
}

interface Raspuns {
    id: string;
    varianta: string;
    text: string;
    scor: number;
}


const dateChestionar:(Intrebare[]) = [
    {
        id: generateRandomId(),
        intrebare: "Ce așteptări ai de la serviciile de SEO?",
        categorie: 'Așteptări și Obiective',
        raspunsmultiplu:true,
        raspunsuri: [
            {
                id: generateRandomId(),
                varianta: 'a',
                text: "Creșterea traficului organic către site-ul meu",
                scor: 4,
            },
            {
                id: generateRandomId(),
                varianta: 'b',
                text: "Îmbunătățirea poziției în rezultatele căutării pentru cuvintele cheie relevante",
                scor: 4
            },
            {
                id: generateRandomId(),
                varianta: 'c',
                text: "Creșterea conștientizării brandului meu online",
                scor: 5
            },
            {
                id: generateRandomId(),
                varianta: "d",
                text:"Generarea de lead-uri de calitate",
                scor: 3
            },
            {
                id: generateRandomId(),
                varianta: "e",
                text:"Creșterea vânzărilor online",
                scor: 3
            },
            {
                id: generateRandomId(),
                varianta:"f",
                text: "Altele (va rog specificați)",
                scor:0
            }
        ]
    },
    {
        id: generateRandomId(),
        intrebare: "Care sunt obiectivele tale principale în ceea ce privește clasarea în motoarele de căutare?",
        categorie:'Așteptări și Obiective',
        raspunsmultiplu:true,
        raspunsuri: [
            {
                id: generateRandomId(),
                varianta: 'a',
                text: "A fi pe prima pagină pentru cuvinte cheie relevante",
                scor: 4,
            },
            {
                id: generateRandomId(),
                varianta: 'b',
                text: "Creșterea traficului organic către site-ul meu ",
                scor: 4,
            },
            {
                id: generateRandomId(),
                varianta: 'c',
                text: " Obținerea unui scor de autoritate mai mare pentru site-ul meu",
                scor: 4,
            },
            {
                id: generateRandomId(),
                varianta: 'd',
                text: "Depășirea concurenței în clasamentul motoarelor de căutare",
                scor: 4,
            },
            {
                id: generateRandomId(),
                varianta: 'e',
                text: "Altele (va rog specificați)",
                scor: 4,
            },
        ]
    },
    {
        id: generateRandomId(),
        intrebare: "Ce rezultate sperați să obțineți din strategia de SEO?",
        categorie: 'Așteptări și Obiective',
        raspunsmultiplu:true,
        raspunsuri: [
            {
                id: generateRandomId(),
                varianta: 'a',
                text: "Creșterea vizibilității online a afacerii mele",
                scor: 4,
            },
            {
                id: generateRandomId(),
                varianta: 'b',
                text: "Generarea de trafic calificat și hotarat sa cumpere sau sa lucreze cu mine",
                scor: 3,
            },
            {
                id: generateRandomId(),
                varianta: 'c',
                text: "Creșterea ratei de conversie a site-ului meu",
                scor: 3,
            },
            {
                id: generateRandomId(),
                varianta: 'd',
                text: "Îmbunătățirea recunoașterii brandului meu în mediul online",
                scor: 2,
            },
            {
                id: generateRandomId(),
                varianta: 'e',
                text: "Altele (te rog specificați)",
                scor: 0,
            },
        ]
    },
    {
        id: generateRandomId(),
        intrebare: "Ce înțelegere aveți despre SEO?",
        categorie: 'Cunoștințe și Mituri despre SEO',
        raspunsmultiplu: false,
        raspunsuri: [
            {
                id: generateRandomId(),
                varianta: 'a',
                text: "Știu că SEO (Optimizarea pentru Motoarele de Căutare) este esențială pentru vizibilitatea online a unei afaceri și pentru atragerea de trafic organic către site-ul meu. Sunt interesat să aflu mai multe despre cum funcționează și cum poate beneficia afacerea mea.",
                scor: 3,
            },
            {
                id: generateRandomId(),
                varianta: 'b',
                text: "Am o înțelegere generală despre SEO, dar sunt interesat să aprofundez cunoștințele și să înțeleg mai bine strategiile și tacticiile implicate.",
                scor: 2,
            },
            {
                id: generateRandomId(),
                varianta: 'c',
                text: "Nu am prea multe cunoștințe despre SEO, dar sunt deschis să învăț și să explorez această lume.",
                scor: 1,
            },
        ]
    },
    {
        id: generateRandomId(),
        intrebare: "Care credeți că sunt cele mai importante aspecte ale SEO?",
        categorie: 'Cunoștințe și Mituri despre SEO',
        raspunsmultiplu:true,
        raspunsuri: [
            {
                id: generateRandomId(),
                varianta: 'a',
                text: "Relevanța și calitatea conținutului pentru utilizatori și motoarele de căutare.",
                scor: 4,
            },
            {
                id: generateRandomId(),
                varianta: 'b',
                text: "Optimizarea tehnică a site-ului pentru îmbunătățirea performanței și a experienței utilizatorului.",
                scor: 3,
            },
            {
                id: generateRandomId(),
                varianta: 'c',
                text: "Construirea de autoritate și legături de calitate către site-ul meu.",
                scor: 2,
            },
            {
                id: generateRandomId(),
                varianta: 'd',
                text: "Planificarea și implementarea unei strategii de conținut relevantă și a unui marketing online eficient.",
                scor: 4,
            },
        ]
    },
    {
        id: generateRandomId(),
        intrebare: "Care din urmatoarele afirmatii sunt adevarate dupa parerea dvs?",
        categorie: 'Cunoștințe și Mituri despre SEO',
        raspunsmultiplu:true,
        raspunsuri: [
            {
                id: generateRandomId(),
                varianta: 'a',
                text: "Adăugarea unui număr mare de cuvinte cheie pe o pagină îmbunătățește automat clasamentul",
                scor: - 4,
            },
            {
                id: generateRandomId(),
                varianta: 'b',
                text: "Dureaza foarte mult sa indexezi un site in Google",
                scor: - 4,
            },
            {
                id: generateRandomId(),
                varianta: 'c',
                text: "Linkurile către site-ul meu din alte site-uri sunt întotdeauna benefice.",
                scor: -4,
            },
            {
                id: generateRandomId(),
                varianta: 'd',
                text: "SEO nu este important pentru site-urile mici sau locale.",
                scor: -4,
            },
            {
                id: generateRandomId(),
                varianta: 'e',
                text: "Este Important sa ne targetam pe acele cuvinte cheie de interes pentru afacerea mea care aduc conversii si exprima cat mai clar ceea ce ofer eu",
                scor: 4,
            },
        ]
    },
    {
        id: generateRandomId(),
        intrebare: "Care tactici de SEO credeți că funcționează cel mai bine în prezent?",
        categorie: 'Bune Practici și Strategii Învechite',
        raspunsmultiplu:true,
        raspunsuri: [
            {
                id: generateRandomId(),
                varianta: 'a',
                text: "Crearea de conținut de calitate și relevant pentru audiență și cuvintele cheie relevante.",
                scor: 4,
            },
            {
                id: generateRandomId(),
                varianta: 'b',
                text: "Optimizarea tehnică a site-ului pentru performanță și experiență utilizator.",
                scor: 3,
            },
            {
                id: generateRandomId(),
                varianta: 'c',
                text: "Construirea de legături de calitate și autoritate către site-ul meu.",
                scor: 3,
            },
            {
                id: generateRandomId(),
                varianta: 'd',
                text: "Utilizarea corectă și etică a social media pentru promovarea conținutului și a site-ului.",
                scor: 2,
            },
        ]
    },
    {
        id: generateRandomId(),
        intrebare: "Credeți că există anumite strategii de SEO care nu mai sunt relevante sau eficiente în prezent?",
        categorie: 'Bune Practici și Strategii Învechite',
        raspunsmultiplu:false,
        raspunsuri: [
            {
                id: generateRandomId(),
                varianta: 'a',
                text: "Da, cred că anumite tactici de a pune cuvinte cheie de umplutura  sau de creare a unor linkuri de calitate slabă nu mai sunt eficiente și pot chiar afecta site-ul.",
                scor: 4,
            },
            {
                id: generateRandomId(),
                varianta: 'b',
                text: "Nu sunt sigur, dar sunt deschis să învăț despre practicile SEO actualizate.",
                scor: 3,
            },
            {
                id: generateRandomId(),
                varianta: 'c',
                text: "Nu, cred că toate tacticiile SEO sunt încă relevante și eficiente.",
                scor: 2,
            },
        ]
    },
    {
        id: generateRandomId(),
        intrebare: "Ați implementat vreodată o strategie de SEO care să nu dea rezultate?",
        categorie: 'Bune Practici și Strategii Învechite',
        raspunsmultiplu:false,
        raspunsuri: [
            {
                id: generateRandomId(),
                varianta: 'a',
                text: "Da, am încercat o tactică care, din păcate, nu a avut niciun impact sau chiar a afectat negativ performanța site-ului meu.",
                scor: 4,
            },
            {
                id: generateRandomId(),
                varianta: 'b',
                text: "Nu, toate strategiile pe care le-am implementat au avut succes în îmbunătățirea clasamentului și a traficului.",
                scor: 4,
            },
        ]
    },
    {
    id: generateRandomId(),
        intrebare: "Cum măsurați succesul unei campanii de SEO în prezent?",
        categorie: "Tracking pe Rezultate",
        raspunsmultiplu:true,
        raspunsuri: [
            {
                id: generateRandomId(),
                varianta: "a",
                text: "Prin creșterea pozițiilor în rezultatele căutării pentru cuvintele cheie relevante. - 4 puncte",
                scor: 4,
            },
            {
                id: generateRandomId(),
                varianta: "b",
                text: "Prin monitorizarea traficului organic către site-ul meu și a ratei de conversie asociate.",
                scor: 4,
            },
            {
                id: generateRandomId(),
                varianta: "c",
                text: "Prin evaluarea creșterii autorității și a calității backlink-urilor către site-ul meu. ",
                scor:4 ,
            },
            {
                id: generateRandomId(),
                varianta: "d",
                text: "Prin analiza datelor și a comportamentului utilizatorilor pe site.",
                scor: 2,
            }
        ]
    },
    {
        id:generateRandomId(),
        intrebare: "Ce tipuri de metrici sau indicatori de performanță urmăriți?",
        categorie: "Tracking pe Rezultate",
        raspunsmultiplu: true,
        raspunsuri: [
            {
                id:generateRandomId(),
                varianta: 'a',
                text: "Poziția în clasament pentru cuvinte cheie importante.",
                scor:5
            },
            {
                id:generateRandomId(),
                varianta: 'b',
                text: "Traficul organic către site și ratele de conversie asociate.",
                scor:5
            },
            {
                id:generateRandomId(),
                varianta: 'c',
                text: "Autoritatea și calitatea backlink-urilor către site.",
                scor:5
            },
            {
                id:generateRandomId(),
                varianta: 'd',
                text: "Metrici de experiență a utilizatorului, cum ar fi rata de abandon și timpul petrecut pe pagină",
                scor:5
            }
       ]
    },
    {
        id: generateRandomId(),
        intrebare: "Sunteți mulțumit de modul în care urmăriți și raportați rezultatele SEO?",
        raspunsmultiplu: false,
        categorie: "Tracking pe Rezultate",
        raspunsuri: [
            {
                id: generateRandomId(),
                varianta: "a",
                text: "Da, sunt mulțumit de instrumentele și procesele noastre actuale de urmărire și raportare a rezultatelor SEO.",
                scor: 3
            },
            {
                id: generateRandomId(),
                varianta: "b",
                text: "Nu sunt complet mulțumit, cred că există loc pentru îmbunătățiri în procesul de urmărire și raportare a rezultatelor SEO.",
                scor: 2
            },
            {
                id: generateRandomId(),
                varianta: "c",
                text: "Nu sunt mulțumit deloc, simt că există mult loc pentru îmbunătățiri în modul în care urmărim și raportăm rezultatele SEO.",
                scor: 1
            }
        ]
    },
    {
        id: generateRandomId(),
        intrebare: "Cum vedeți evoluția viitoare a SEO și a marketingului online?",
        categorie: 'Tendințe și Viitorul SEO',
        raspunsmultiplu:true,
        raspunsuri: [
            {
                id: generateRandomId(),
                varianta: 'a',
                text: "Cred că vom vedea o creștere continuă a relevanței conținutului de calitate și o concentrare mai mare pe experiența utilizatorului.",
                scor: 4,
            },
            {
                id: generateRandomId(),
                varianta: 'b',
                text: "Mă aștept la o mai mare integrare a tehnologiilor AI și a analizei predictive în strategiile de SEO și marketing online.",
                scor: 3,
            },
            {
                id: generateRandomId(),
                varianta: 'c',
                text: "Cred că vom vedea o schimbare în modul în care motoarele de căutare evaluează și clasifică conținutul, cu o creștere a importanței semnalelor sociale și a interacțiunii utilizatorului.",
                scor: 4,
            },
            {
                id: generateRandomId(),
                varianta: 'd',
                text: "Altele (vă rog specificați)",
                scor: 4,
            },
        ]
    },
    {
        id: generateRandomId(),
        intrebare: "Care este bugetul dvs. disponibil pentru strategiile de SEO?",
        categorie: 'Resurse și Buget',
        raspunsmultiplu:false,
        raspunsuri: [
            {
                id: generateRandomId(),
                varianta: 'a',
                text: "Mai puțin de 500 de euro pe lună",
                scor: 1,
            },
            {
                id: generateRandomId(),
                varianta: 'b',
                text: "500 - 1000 de euro pe lună",
                scor: 2,
            },
            {
                id: generateRandomId(),
                varianta: 'c',
                text: "1000 - 2000 de euro pe lună",
                scor: 3,
            },
            {
                id: generateRandomId(),
                varianta: 'd',
                text: "Peste 2000 de euro pe lună",
                scor: 4,
            },

        ]
    },
    {
        id: generateRandomId(),
        intrebare: "Cum evaluați comunicarea cu agenția dvs. actuală de SEO?",
        categorie: 'Comunicare cu Agenciile Actuale',
        raspunsmultiplu: false,
        raspunsuri: [
            {
                id: generateRandomId(),
                varianta: 'a',
                text: "Comunicarea cu agenția mea actuală de SEO este excelentă. Au fost receptivi la întrebările și preocupările mele și au furnizat actualizări regulate și transparente.",
                scor: 4,
            },
            {
                id: generateRandomId(),
                varianta: 'b',
                text: "Comunicarea este bună, dar cred că ar putea fi îmbunătățită în unele aspecte. Uneori simt că lipsesc claritatea sau răspunsurile la întrebările mele.",
                scor: 3,
            },
            {
                id: generateRandomId(),
                varianta: 'c',
                text: "Comunicarea este insuficientă sau ineficientă. Am avut dificultăți în a obține răspunsuri sau actualizări de la agenția mea actuală de SEO.",
                scor: 2,
            },
            {
                id: generateRandomId(),
                varianta: 'd',
                text: "Nu am o agenție de SEO actuală sau nu am fost mulțumit de comunicarea cu agenția mea anterioară.",
                scor: 1,
            }
        ]
    },
    {
        id: generateRandomId(),
        intrebare: "Ce așteptări aveți de la nivelul de comunicare cu agenția dvs. de SEO?",
        categorie: 'Așteptări de Comunicare cu Agenția de SEO',
        raspunsmultiplu: false,
        raspunsuri: [
            {
                id: generateRandomId(),
                varianta: 'a',
                text: "Aștept o comunicare regulată și transparentă, inclusiv actualizări periodice și răspunsuri la întrebările mele într-un timp rezonabil.",
                scor: 4,
            },
            {
                id: generateRandomId(),
                varianta: 'b',
                text: "Aștept să fiu implicat în procesul de luare a deciziilor și să primesc recomandări și explicații clare cu privire la strategia de SEO.",
                scor: 3,
            },
            {
                id: generateRandomId(),
                varianta: 'c',
                text: "Aștept să pot contacta ușor și rapid agenția de SEO și să primesc răspunsuri la întrebările și solicitările mele într-un timp scurt.",
                scor: 3,
            },
            {
                id: generateRandomId(),
                varianta: 'd',
                text: "Altele",
                scor: 0, // punctajul va fi atribuit în funcție de specificațiile clientului
            }
        ]
    },
    { id: generateRandomId(),
        intrebare: "Există vreun aspect al comunicării cu agenția actuală pe care ați dori să-l îmbunătățiți?",
        categorie: 'Imbunatatiri Comunicare cu Agenția Actuală',
        raspunsmultiplu: false,
        raspunsuri: [
            {
                id: generateRandomId(),
                varianta: 'a',
                text: "Da, aș dori o mai mare claritate și transparență în raportările lor și în explicațiile despre strategiile și rezultatele de SEO.",
                scor: 4,
            },
            {
                id: generateRandomId(),
                varianta: 'b',
                text: "Da, aș dori să am mai multe oportunități de a discuta direct cu echipa lor de SEO și de a primi feedback și consultanță personalizate.",
                scor: 3,
            },
            {
                id: generateRandomId(),
                varianta: 'c',
                text: "Nu sunt complet mulțumit de modul în care comunică cu mine și aș dori să vedem îmbunătățiri în timpul de răspuns și în modul de gestionare a întrebărilor și solicitărilor mele.",
                scor: 2,
            },
            {
                id: generateRandomId(),
                varianta: 'd',
                text: "Nu am încă o agenție de SEO sau nu am avut experiențe anterioare de lucru cu agenții de SEO.",
                scor: 1,
            }
        ]
    },
    {
        id: generateRandomId(),
        intrebare: "Cum vedeți importanța SEO în cadrul strategiei generale de marketing a companiei dvs.?",
        categorie: 'Conștientizarea Importanței SEO',
        raspunsmultiplu: false,
        raspunsuri: [
            {
                id: generateRandomId(),
                varianta: 'a',
                text: "Consider că SEO-ul este un element fundamental în strategia noastră de marketing, deoarece ne ajută să creștem vizibilitatea online, să atragem trafic relevant și să generăm lead-uri și vânzări.",
                scor: 4,
            },
            {
                id: generateRandomId(),
                varianta: 'b',
                text: "Recunosc importanța SEO-ului, dar cred că ar putea fi îmbunătățite alte aspecte ale strategiei noastre de marketing.",
                scor: 3,
            },
            {
                id: generateRandomId(),
                varianta: 'c',
                text: "Nu considerăm SEO-ul ca fiind o prioritate majoră în strategia noastră de marketing.",
                scor: 2,
            },
            {
                id: generateRandomId(),
                varianta: 'd',
                text: "Nu avem încă o strategie de marketing definită sau nu am evaluat încă rolul SEO-ului în această strategie.",
                scor: 0,
            }
        ]
    },
    {
        id: generateRandomId(),
        intrebare: "Aveți date care să arate impactul pozitiv al SEO asupra ROAS (Return on Advertising Spend) sau ROI (Return on Investment)?",
        categorie: 'Conștientizarea Importanței SEO',
        raspunsmultiplu: false,
        raspunsuri: [
            {
                id: generateRandomId(),
                varianta: 'a',
                text: "Da, avem date concrete care arată că investiția în SEO a avut un impact pozitiv asupra ROAS sau ROI-ului nostru, prin creșterea traficului organic și a conversiilor pe site.",
                scor: 4,
            },
            {
                id: generateRandomId(),
                varianta: 'b',
                text: "Avem unele date care sugerează un impact pozitiv al SEO-ului, dar nu avem încă o analiză detaliată a ROAS sau ROI-ului.",
                scor: 3,
            },
            {
                id: generateRandomId(),
                varianta: 'c',
                text: "Nu avem date specifice care să demonstreze impactul SEO-ului asupra ROAS sau ROI-ului nostru.",
                scor: 2,
            },
            {
                id: generateRandomId(),
                varianta: 'd',
                text: "Nu am început încă să măsurăm sau să evaluăm impactul SEO-ului asupra ROAS sau ROI-ului nostru.",
                scor: 1,
            }
        ]
    },
    {
        id: generateRandomId(),
        intrebare: "Ce credeți că ar trebui să facem pentru a evidenția mai bine valoarea adusă de SEO?",
        categorie: 'Conștientizarea Importanței SEO',
        raspunsmultiplu: false,
        raspunsuri: [
            {
                id: generateRandomId(),
                varianta: 'a',
                text: "Ar trebui să ne concentrăm pe măsurarea și raportarea mai precisă a rezultatelor SEO, inclusiv a impactului asupra traficului, conversiilor și veniturilor.",
                scor: 4,
            },
            {
                id: generateRandomId(),
                varianta: 'b',
                text: "Ar trebui să investim în resurse suplimentare pentru a efectua analize mai detaliate și pentru a identifica legăturile clare între eforturile de SEO și rezultatele afacerii.",
                scor: 3,
            },
            {
                id: generateRandomId(),
                varianta: 'c',
                text: "Ar trebui să educăm mai mult echipa și să evidențiem beneficiile pe care le aduce SEO-ul în cadrul strategiei noastre de marketing și a performanței globale a afacerii.",
                scor: 2,
            },
            {
                id: generateRandomId(),
                varianta: 'd',
                text: "Nu suntem siguri ce trebuie să facem pentru a evidenția mai bine valoarea adusă de SEO.",
                scor: 1,
            }
        ]
    },

];


class Chestionar {
    intrebari: Intrebare[];

    constructor(intrebari: Intrebare[]) {
        this.intrebari = intrebari;
    }

    calculeazaScor(categorie: string): number {
        let scorTotal = 0;
        let numarIntrebari = 0;

        this.intrebari.forEach(intrebare => {
            if (intrebare.categorie === categorie) {
                numarIntrebari++;
                // Calculăm scorul pentru fiecare întrebare din categoria dată
                intrebare.raspunsuri.forEach(raspuns => {
                    scorTotal += raspuns.scor;
                });
            }
        });

        // Calculăm scorul mediu pentru categoria dată
        if (numarIntrebari === 0) {
            return 0;
        } else {
            return scorTotal / numarIntrebari;
        }
    }
}
