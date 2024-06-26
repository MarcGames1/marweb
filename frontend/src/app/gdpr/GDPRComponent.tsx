import globals from "@/utils/globals";
const {dateLegale} = globals
const { site, dateFirma, brand } = dateLegale;
const GDPRComponent = () =>{
    return (
      <>
        <div className="prose m-auto bg-base-100 p-10 text-white prose-xl">
          <h1 className="text-center text-white">
            Politica privind protectia datelor cu caracter personal
          </h1>
          <h2>Îţi garantăm că:</h2>
          <ol>
            <li>
              Procesăm datele tale exclusiv pentru livrarea, îmbunătăţirea şi
              garantarea serviciilor pe care le oferim
            </li>
            <li>
              Datele tale sunt stocate în siguranţă într-un mediu securizat
            </li>
            <li>
              Datele personale sunt strict confidenţiale şi nu vor fi transmise
              unor terţi.
            </li>
          </ol>
          <h2>Utilizăm datele pe care le colectăm pentru:</h2>
          <p>
            Furnizarea și administrarea serviciilor, inclusiv pentru a afișa
            conținut personalizat și pentru a facilita comunicarea cu alți
            utilizatori;
          </p>
          <p>
            Facilitarea funcționării tehnice a serviciilor, inclusiv rezolvarea
            și soluționarea problemelor, asigurarea serviciilor și prevenirea
            fraudei și abuzurilor;
          </p>
          <p>
            Procesarea înscrierilor și a comenzilor pentru cursuri, produse,
            servicii etc. dar şi comunicarea cu dvs. pentru a vă răspunde la
            întrebări şi solicitări.
          </p>
          <p>
            Trimiterea mesajelor și informațiilor administrative, inclusiv
            mesaje de la traineri și facilitatori, notificări despre
            modificările aduse serviciilor noastre și actualizări ale
            acordurilor noastre;
          </p>
          <p>
            Trimiterea informațiilor și a mesajelor cu privire la progresele
            înregistrate în cursuri, beneficii, servicii noi, funcții noi,
            promoții, mesaje informative și alte cursuri disponibile (mesaje de
            la care vă puteţi dezabona în orice moment);
          </p>
          <p>
            Solicitarea de feedback şi înţelegerea nevoilor dvs. cu ajutorul
            furnizorilor de servicii de analiză;
          </p>
          <p>Identificarea utilizatorilor unici;</p>
          <p>
            Îmbunătățirea serviciilor noastre și dezvoltarea de noi produse,
            servicii și funcții;
          </p>
          <p>
            Analiza tendințelor și a traficului pe site-uri sau promovarea
            serviciilor noastre pe site-uri și aplicații;
          </p>
          <p>POLITICA PRIVIND PROTECȚIA DATELOR CU CARACTER PERSONAL</p>
          <p>
            Legea Uniunii Europene referitoare la protecția datelor cu caracter
            personal, “General Data Protection Regulation” (denumit în
            continuare “GDPR”) a intrat în vigoare pe 25 Mai 2016, dar începe
            să-și producă efectele de la 25 Mai 2018.
          </p>
          <p>
            Protecția datelor dumneavoastră cu caracter personal este importantă
            pentru noi, prin urmare, acordăm o atenție deosebită protejării
            vieții private a vizitatorilor care accesează unul dintre site-urile{' '}
            {dateLegale.site} (denumit în continuare “ {brand} ”), în
            conformitate cu Regulamentul (UE) 2016/679 al Parlamentului European
            și al Consiliului din data de 27 aprilie 2016 privind protecția
            persoanelor fizice în ceea ce privește prelucrarea datelor cu
            caracter personal și libera circulație a acestor date (denumit în
            continuare “GDPR”).
          </p>
          <p>
            Vă rugăm să acordați o atenție deosebită lecturării următoarei
            Politici (denumită în continuare “DPP”, pentru a înțelege modul în
            care vor fi tratate informațiile dumneavoastră („date personale”).
          </p>
          <p>
            DPP explică practicile {brand}, referitoare la aplicarea
            prevederilor GDPR, precum și drepturile de care beneficiați cu
            privire la modul în care informațiile dumneavoastră sunt utilizate
            prin intermediul aplicaţiilor {brand}.
          </p>
          <p>
            Prelucrarea datelor cu caracter personal efectuată de {brand} se va
            realiza întotdeauna în conformitate cu prevederile GDPR, precum și
            cu reglementările privind protecția datelor cu caracter personal,
            specifice fiecărei țări în care {brand} operează.
          </p>
          <p>
            Prin DPP, {brand} dorește să informeze vizitatorii cu privire la
            natura datelor cu caracter personal pe care le colectăm și le
            procesăm, precum și cu privire la scopurile prelucrării. În plus,
            vizitatorii site-urilor sunt informați prin intermediul DPP și cu
            privire la drepturile de care beneficiază.
          </p>
          <h2>CINE SUNTEM?</h2>
          <p>
            {dateFirma.nume}, CUI:{dateFirma.cui}, {dateFirma.regCom}, sediu
            social: {dateFirma.sediuSocial}
          </p>
          <h2 className="text-white">CE SUNT DATELE CU CARACTER PERSONAL?</h2>
          <p>
            „Date personale” înseamnă orice informație sau informații care vă
            pot identifica direct (de exemplu numele dumneavoastră) sau indirect
            (de exemplu, prin intermediul datelor pseudonime, cum ar fi un număr
            de identificare unic).
          </p>
          <p>
            Aceasta înseamnă că datele personale includ lucruri precum adresa,
            numele și prenumele, sexul, data și locul nașterii, datele din
            actele de stare civilă, telefon/fax, adresă (domiciliu/reședință),
            e-mail, profesie, loc de muncă, formare profesionala, situație
            familială, situație economico-financiară, date privind bunurile
            deținute, obișnuinte/preferințe/comportament, imagine, voce,
            preferințele personale și obiceiurile de cumpărături, conținutul
            generat de utilizatori, informațiile financiare și informațiile
            privind situația financiară.
          </p>
          <p>
            Acesta ar putea include și identificatori numerici unici, cum ar fi
            adresa IP a computerului dumneavoastră sau adresa MAC a
            dispozitivului dumneavoastră mobil, precum și modulele cookie.
          </p>
          <h2 className="text-white">
            CE ÎNSEAMNĂ PRELUCRAREA DATELOR CU CARACTER PERSONAL?
          </h2>
          <p>
            “Prelucrarea” înseamnă orice operațiune sau set de operațiuni
            efectuate asupra datelor cu caracter personal sau asupra seturilor
            de date cu caracter personal, cu sau fără utilizarea de mijloace
            automatizate, cum ar fi colectarea, înregistrarea, organizarea,
            structurarea, stocarea, adaptarea sau modificarea, extragerea,
            consultarea, utilizarea, transmiterea prin transmitere, diseminarea
            sau punerea la dispoziție în orice alt mod, alinierea sau
            combinarea, restricționarea, ștergerea sau distrugerea.
          </p>
          <h2 className="text-white">PRINCIPII PRIVIND PRELUCRAREA DATELOR</h2>
          <p>
            {brand}, se obligă să respecte principiile de protecție a datelor cu
            caracter personal (denumite în continuare „Principiile”) prevăzute
            de GDPR, pentru a se asigura că toate datele sunt:
          </p>
          <ol>
            <li>Prelucrate în mod corect, legal și transparent;</li>
            <li>Colectate în scopuri specificate, explicite și legitime;</li>
            <li>
              Adecvate, relevante și limitate în raport cu scopurile pentru care
              sunt prelucrate;
            </li>
            <li>Corecte și actualizate;</li>
            <li>
              Păstrate într-o formă care nu permite identificarea persoanelor
              vizate mai mult timp decât este necesar în raport de scopul
              prelucrării;
            </li>
            <li>
              Procesate în conformitate cu drepturile persoanei vizate, într-un
              mod care să asigure o securitate adecvată a prelucrării, astfel
              încât datele să fie integre, confidențiale și disponibile.
            </li>
          </ol>
          <h2>CE TIP DE DATE PERSONALE COLECTĂM</h2>
          <p>
            Datele personale înseamnă orice informație referitoare la dvs. care
            ne permite să vă identificăm, cum ar fi numele dvs., datele de
            contact, numărul de referință al rezervării, detaliile de plată și
            informațiile despre accesul dvs. pe site-urile noastre.
          </p>
          <p>
            Putem colecta date personale de la dvs. atunci când rezervați un loc
            pentru participarea la evenimente (direct sau indirect prin
            intermediul partenerilor noștri de încredere), când creați un cont,
            când utilizați site-urile web și/sau aplicațile și alte site-uri
            accesibile prin intermediul site-ului web și/sau aplicației, când
            participați la un sondaj sau concurs sau când ne contactați.
          </p>
          <p>Mai exact, putem colecta următoarele categorii de informații:</p>
          <ol>
            <li>
              Numele, adresa de domiciliu, adresa de e-mail, numărul de telefon,
              localitatea;
            </li>
            <li>
              Informații detaliate despre participanţi, care includ numele, data
              nașterii, sexul, numărul cărții de identitate;
            </li>
            <li>
              Condiții medicale pentru participanţi care au necesități medicale
              speciale și / sau cerințe alimentare;
            </li>
            <li>
              Istoricul participărilor, inclusiv informații referitoare la
              cursurile dvs. și serviciile rezervate în legătură cu cursurile
              dvs.;
            </li>
            <li>Informații despre achizițiile dvs. de produse și servicii;</li>
            <li>
              Informațiile pe care le furnizați despre preferințele dvs. de
              participare și cele ale însoțitorilor dvs. în programele şi
              cursurile {brand};
            </li>
            <li>
              Informații despre utilizarea de către dvs. a site-urilor și/sau a
              aplicațiilor noastre;
            </li>
            <li>
              Comunicațiile pe care le faceți cu noi sau pe care le direcționați
              către noi prin scrisori, e-mailuri, servicii de chat, apeluri și
              rețele de socializare.
            </li>
            <li>
              Locația, inclusiv locația geografică în timp real a computerului
              sau a dispozitivului dvs. prin GPS și adresa dvs. IP, împreună cu
              locațiile Wi-Fi hotspot și gsm, dacă utilizați funcții bazate pe
              locație și activați Serviciile de localizare setări pe dispozitiv
              și pe computer.
            </li>
          </ol>
          <p>
            Detaliile personale despre sănătatea fizică sau psihică sunt
            considerate date personale „sensibile” în conformitate cu legile
            aplicabile privind protecția datelor. Vom procesa astfel de date
            numai dacă v-ați dat consimțământul explicit sau este necesar (de
            exemplu, dacă solicitați asistență specială) sau ați făcut public
            aceste date în mod deliberat.
          </p>
          <h2 className="text-white">CE DATE NU STOCĂM NICIODATĂ</h2>
          <p>
            Datele cardului de plată al Clientului/ Utilizatorului/
            Cumparătorului nu vor fi accesibile și nici nu vor fi stocate de
            către {brand}, ci doar de către instituția de autorizare a
            Tranzacției sau o altă entitate autorizată să presteze servicii de
            stocare date de identificare a cardului, despre a cărei entitate
            Clientul/ Utilizatorul/ Cumpărătorul va fi informat, anterior
            introducerii datelor.
          </p>
          <p>
            3D Secure înseamna o nouă abordare globală a autentificarii
            cumpărătorilor și vânzărilor în tranzacții sigure pe Internet.
            Această măsură de siguranță presupune redirecționarea utilizatorului
            în momentul efectuarii plații pe o pagină securizată, unde
            înregistrarea fiecărui deținător de card se face prin atribuirea
            unui cod de autorizare pentru fiecare tranzacție online. Cardurile
            acceptate la plată sunt cele emise sub siglele VISA (Classic și
            Electron) și MASTERCARD (inclusiv Maestro, dacă au cod CVV/CV2).
          </p>
          <h2 className="text-white">
            PENTRU CE FOLOSIM DATELE DVS. PERSONALE, DE CE ȘI PENTRU CÂT TIMP
          </h2>
          <p>Datele dvs. pot fi utilizate în următoarele scopuri:</p>
          <ol>
            <li>
              Pentru furnizarea produselor și serviciilor pe care le solicitați:
              folosim informațiile pe care ni le furnizați pentru a efectua
              serviciile pe care le-ați solicitat în legătură cu participarea
              dvs., inclusiv modificările solicitate legate de cursuri;
            </li>
            <li>
              Pentru a vă contacta în cazul unei schimbări a orarului sau
              anulări: vă trimitem informații în legătură cu serviciile pe care
              le-ați solicitat și orice modificări ale acestor servicii.
              Informațiile nu au scop comercial și nu vă puteți dezabona de la
              ele;
            </li>
            <li>
              Folosim informațiile dvs. de plată în scopuri de contabilitate,
              facturare și audit și pentru detectarea și/sau prevenirea oricăror
              activități frauduloase;
            </li>
            <li>
              În scopuri administrative sau juridice: folosim datele dvs. pentru
              analiză statistică și de marketing, testarea sistemelor, studii
              privind satisfacția clienților, întreținere și dezvoltare, sau
              pentru a rezolva o dispută sau o revendicare. Rețineți că este
              posibil să realizăm profilarea datelor, pe baza datelor pe care le
              colectăm de la dvs., în scopuri de analiză statistică și de
              marketing. Orice activitate de profilare va fi efectuată numai cu
              consimțământul dvs. prealabil și depunând toate eforturile pentru
              a vă asigura că toate datele pe care se bazează sunt corecte. Prin
              furnizarea oricăror date personale sunteți de acord în mod
              explicit că putem să-l folosim, pentru a realiza activități de
              profilare în conformitate cu această Politică de
              confidențialitate;
            </li>
            <li>
              Securitate, sănătate, administrație, prevenirea/detectarea
              infracțiunilor: este posibil să transmitem informațiile dvs.
              autorităților guvernamentale sau organelor de aplicare a legii
              pentru a respecta cerințele legale;
            </li>
            <li>
              Pentru comunicări ale Serviciului de asistență clienți: folosim
              datele dvs. pentru a gestiona relația noastră cu dvs. ca și client
              și pentru a ne îmbunătăți serviciile și experiența dvs. cu noi;
            </li>
            <li>
              Pentru a furniza servicii personalizate: folosim datele dvs.
              pentru a furniza informații care credem că vă interesează înainte,
              în timpul și după participarea dvs. și pentru a personaliza
              serviciile pe care vi le oferim;
            </li>
            <li>
              Marketing: din când în când, vă vom contacta cu informații despre
              cursuri promoționale și produse auxiliare prin intermediul
              comunicărilor online. Cu toate acestea, veți avea opțiunea de a vă
              abona sau dezabona de la astfel de comunicări, indicând acest
              lucru în etapa de rezervare. De asemenea, la orice comunicare
              online din partea noastră sau a partenerilor noștri de încredere,
              veți avea ocazia să indicați că nu mai doriți să primiți
              materialele noastre de marketing direct.
            </li>
          </ol>
          <p>
            Vom procesa datele dvs. personale numai în cazul în care avem o bază
            legală pentru a face acest lucru. Baza legală va depinde de motivele
            pentru care am colectat și pentru care trebuie să folosim datele
            dvs. personale.
          </p>
          <p>
            De asemenea, putem prelucra datele dvs. personale într-unul sau mai
            multe dintre următoarele cazuri:
          </p>
          <ul>
            <li>
              Pentru a respecta o obligație legală (de exemplu, cerințele
              contabile);
            </li>
            <li>
              Ne-ați dat consimțământul pentru utilizarea datele dvs. personale
              (de exemplu, pentru utilizarea în scopuri comerciale);
            </li>
            <li>
              Pentru a vă proteja interesele vitale sau cele ale unei alte
              persoane (de exemplu, în caz de urgență medicală);
            </li>
            <li>
              Face parte din interesele noastre legitime în funcționarea ca o
              agentie de marketing (de exemplu, în scopuri administrative).
            </li>
          </ul>
          <p>
            Doar copiii cu vârsta de cel puțin 16 ani pot să-și dea
            consimțământul. Pentru copiii sub această vârstă, este necesar
            consimțământul părinților sau al tutorilor legali ai copiilor.
          </p>
          <p>
            Nu vom păstra datele dvs. mai mult decât este necesar pentru a
            îndeplini scopul pentru care sunt prelucrate. Pentru a determina
            perioada de păstrare adecvată, luăm în considerare cantitatea,
            natura și sensibilitatea datelor personale, scopurile pentru care le
            prelucrăm și dacă putem atinge aceste scopuri prin alte mijloace.
          </p>
          <p>
            De asemenea, trebuie să luăm în considerare perioadele pentru care
            ar putea fi necesar să păstrăm date cu caracter personal pentru a ne
            îndeplini obligațiile legale sau pentru a ne ocupa de reclamații,
            întrebări și pentru a ne proteja drepturile legale în cazul unei
            revendicări.
          </p>
          <p>
            Atunci când nu mai avem nevoie de datele dvs. personale, le vom
            șterge sau distruge în siguranță. De asemenea, vom lua în
            considerare dacă și cum putem minimiza în timp cantitatea de date
            personale pe care le folosim și dacă putem asigura anonimitatea
            datelor dvs. Personale, astfel încât acestea să nu mai fie asociate
            cu dvs. sau să vă identifice, caz în care putem folosi acele
            informații fără a vă notifica ulterior.
          </p>
          <h2>PERIOADA STOCĂRII DATELOR</h2>
          <p>
            {brand} poate păstra datele prelucrate pentru diferite perioade de
            timp, apreciate ca fiind rezonabile, în conformitate cu scopurile
            indicate anterior. Păstrăm datele dumneavoastră numai pentru
            perioada necesară pentru atingerea scopului, pentru care deținem
            datele, pentru a satisface nevoile dumneavoastră sau pentru a ne
            îndeplini obligațiile impuse de lege.
          </p>
          <p>
            Pentru a ști cât timp pot fi păstrate datele dumneavoastră, folosim
            următoarele criterii:
          </p>
          <ol>
            <li>
              Atunci când achiziționați produse și servicii, păstrăm datele
              dumneavoastră personale pe durata relației noastre contractuale;
            </li>
            <li>
              În cazul în care participați la o ofertă promoțională, păstrăm
              datele dumneavoastră personale pe durata ofertei promoționale;
            </li>
            <li>
              În cazul în care ne contactați pentru o întrebare, păstrăm datele
              dumneavoastră personale pe durata necesară procesării întrebărilor
              dvs., dar nu mai mult de 5ani de la ultima corespondență trimisă;
            </li>
            <li>
              În cazul în care creați un cont, păstrăm datele dumneavoastră
              personale până când solicitați să le ștergem sau după o perioadă
              de inactivitate (fără o interacțiune activă cu mărcile noastre)
              definite în conformitate cu reglementările și îndrumările locale.
              În acest sens, menționăm că datele prelucrate pentru acest scop
              vor fi șterse la 5 ani după ultima interacțiune cu utilizatorul
              contului (ca de exemplu, login în contul dumneavoastră);
            </li>
            <li>
              În cazul în care v-ați oferit consimțământul pentru marketing,
              păstrăm datele dumneavoastră personale până când vă dezabonați sau
              solicitați să le ștergem sau după o perioadă de inactivitate (fără
              o interacțiune activă cu mărcile noastre), definite în
              conformitate cu reglementările și îndrumările locale. În acest
              sens, menționăm că datele stocate în bazele noastre de date pentru
              scopul comunicărilor de marketing direct sunt șterse din
              evidențele acestor baze de date la 5 ani de la ultima interacțiune
              cu dumneavoastră;
            </li>
            <li>
              În cazul în care modulele cookie sunt stocate pe computer, le
              păstrăm atâta timp cât este necesar pentru ca acestea să își
              atingă scopurile (de exemplu, pe durata unei sesiuni pentru
              cookie-urile de coș de cumpărături sau cookie-urile pentru ID-uri
              de sesiune) și pentru o perioadă definită în conformitate cu
              reglementările și îndrumările locale. În acest sens, menționăm că
              datele prelucrate prin modulele cookies folosite pentru a furniza
              publicitate comportamentală online, pentru a ne personaliza
              serviciile pentru dumneavoastră și pentru a permite distribuirea
              conținutului nostru pe site-uri de socializare (butoane de
              distribuire destinate afișării site-ului), vor fi păstrate pentru
              o perioadă de maxim 5 ani de la colectarea acestora, în baza
              consimțământului dumneavoastră.
            </li>
          </ol>
          <h2 className="text-white">SECURITATEA PRELUCRĂRII</h2>
          <p>
            {brand} a adoptat măsuri tehnice și organizatorice de prelucrare a
            datelor, actualizate în conformitate cu cerințele GDPR, cu scopul de
            a proteja datele dumneavoastră cu caracter personal împotriva
            oricăror acțiuni de acces neautorizat, utilizare necorespunzătoare
            sau transmitere, modificare neautorizată, distrugere sau pierdere
            accidentală. Toți angajații și colaboratorii {brand}, precum și
            orice terțe părți care acționează în numele și pe seama {brand} sunt
            obligați să respecte confidențialitatea informațiilor dumneavoastră
            și cerințele GDPR, în conformitate cu prevederile prezentei
            Politici.
          </p>
          <h2>SECURITATEA DATELOR DVS. PERSONALE</h2>
          <p>
            Respectăm proceduri stricte de securitate în stocarea și dezvăluirea
            datelor dvs. personale și pentru a le proteja împotriva pierderii,
            distrugerii sau deteriorării accidentale. Datele pe care ni le
            furnizați sunt protejate cu ajutorul tehnologiei SSL (Secure Socket
            Layer). SSL este metoda standard în industrie de criptare a
            informațiilor personale și a datelor, pentru ca acestea să fie
            transferate în siguranță prin internet.f
          </p>
          <p>
            Toate detaliile de înscriere sunt transmise printr-o conexiune de
            tip SSL cu ajutorul infrastructurii de rețea dedicate (Multiprotocol
            Label Switching-MPLS) și sunt stocate în conformitate cu Standardele
            privind Securitatea Datelor.
          </p>
          <p>
            Este posibil ca noi să dezvăluim informațiile dvs. unor terțe părți
            de încredere în scopurile stabilite în această Politică de
            confidențialitate. Solicităm tuturor părților terțe să dispună de
            măsuri tehnice și operaționale de securitate adecvate, pentru a vă
            proteja datele personale, în conformitate cu legislația irlandeză și
            UE privind normele de protecție a datelor.
          </p>
          <h2 className="text-white">
            PROCESAREA FORMULARELOR DE CONTACT SAU ÎNSCRIERE
          </h2>
          <p>
            {brand} va folosi informațiile pe care le furnizați în secțiunea
            corespunzătoare de contact, existentă pe site, exclusiv cu scopul de
            a procesa solicitarea dumneavoastră.
          </p>
          <p>
            Prin furnizarea oricăror date cu caracter personal prin intermediul
            site-urilor {brand} , înțelegeți și sunteți de acord că datele
            dumneavoastră vor fi prelucrate în conformitate cu prevederile DPP a
            {brand} .
          </p>
          <p>
            Vă rugăm să aveți în vedere faptul că pentru a putea procesa
            solicitările dumneavoastră transmise în secțiunea de înscrieri, este
            posibil ca, în anumite circumstanțe, să avem obligația de a
            transmite datele dumneavoastră, partenerilor cu care {brand}{' '}
            colaborează și/sau altor terți furnizori de servicii ai {brand} .
          </p>
          <p>
            Cu toate acestea, {brand} a adoptat măsuri tehnice și organizatorice
            adecvate pentru a asigura securitatea transferului de date, precum
            și prelucrarea în conformitate cu cerințele GDPR a datelor
            dumneavoastră, de către entitățile menționate anterior.
          </p>
          <p>
            {brand} se obligă să nu prelucreze datele cu caracter personal
            furnizate în alt scop decât acela pentru care au fost transmise, cu
            excepția situațiilor în care există consimțământul dumneavoastră
            expres pentru a le utiliza și în alte scopuri.
          </p>
          <h2>PROCESAREA DATELOR CU CARACTER PERSONAL ÎN PARTENERIAT</h2>
          <p>
            O parte dintre datele cu caracter personal prelucrate prin
            intermediul site-ului {brand} vor putea fi transferate către terți
            doar în situația în care există consimțământul dumneavoastră expres
            pentru a proceda în acest sens, cu excepția situațiilor în care
            există o obligație legală pentru {brand} de a proceda în acest mod.
          </p>
          <p>
            Site-ul {brand} poate conține, la un moment dat, link-uri de acces
            către alte site-uri ale căror politici de prelucrare a datelor pot
            fi diferite de cele ale {brand}.
          </p>
          <p>
            Vă rugăm să aveți în vedere și să consultați politicile privind
            protecția datelor cu caracter personal ale celorlalte site-uri,
            {brand} nu îşi poate asuma responsabilitatea cu privire la
            informațiile colectate de aceste terțe părți.
          </p>
          <h2>RELAȚIILE CU ALȚI OPERATORI</h2>
          <p>
            În funcție de context, s-ar putea să ne găsim în situația
            necesității absolute de a oferi informații la un nivel mai înalt,
            atât global, cât și intern sau extern, partenerilor noștri și celor
            cu care facem transfer de date cu respectarea Regulamentului mai sus
            amintit, în virtutea asigurării oferirii unor servicii cât mai
            profesionale cu putință. Informațiile controlate de {brand} ar putea
            fi transferate, transmise sau stocate și prelucrate în UE sau în
            alte țări decât țara în care locuiți, în scopurile descrise în
            această politică. Aceste transferuri de date sunt necesare pentru a
            putea furniza servicii la cel mai înalt nivel, precum și a continua
            să vă furnizăm materialele noastre la cel mai bun nivel profesional.
            Utilizăm clauze contractuale standard aprobate de Comisia Europeană
            și ne bazăm pe deciziile privind caracterul adecvat emise de Comisia
            Europeană, cu privire la anumite țări, după caz, în ceea ce privește
            transferurile de date din SEE către Statele Unite și către alte
            țări.
          </p>
          <h2 className="text-white">PRELUCRARE AUTOMATĂ DE DATE. COOKIE</h2>
          <p>
            Site-ul {brand} folosește identificatori de tip Cookie. În acest
            sens puteți consulta mai jos Politica noastră de Cookie și vă puteți
            exercita dreptul de a dezactiva Cookies.
          </p>
          <h2 className="text-white">DREPTURILE PERSOANELOR VIZATE</h2>
          <p>
            În conformitate cu GDPR, aveți o serie de drepturi cu privire la
            datele personale pe care {brand} le prelucrează:
          </p>
          <ol>
            <li>
              <b>Dreptul de acces la datele prelucrare</b>– Aveți dreptul de a
              accesa datele personale pe care le deținem. Prima furnizare de
              informații se va face fără a percepe niciun fel de taxă. Daca veți
              mai avea nevoie de copii ale informațiilor deja furnizate, este
              posibil să percepem o taxă rezonabilă ținând cont de costurile
              administrative de furnizare a informațiilor. Solicitările vădit
              neîntemeiate, excesive sau repetate pot să nu primească un
              răspuns.
            </li>
            <li>
              <b>Dreptul la rectificarea datelor</b>– Aveți dreptul să cereți ca
              Datele dumneavoastră să fie rectificate dacă sunt inexacte sau
              învechite și/sau să le completați dacă acestea sunt incomplete.
              Dacă aveți un cont, poate fi mai ușor să vă corectați propriile
              date prin intermediul funcției „Contul meu” sau prin email la
              {dateFirma.email}
            </li>
            <li>
              <b> Dreptul la ștergerea datelor (“dreptul de a fi uitat”)</b> –
              În unele cazuri, aveți dreptul de a obține ștergerea sau
              distrugerea Datelor dumneavoastră. Acesta nu este un drept
              absolut, deoarece uneori s-ar putea să fim forțați să păstrăm
              Datele dumneavoastră din motive legale sau juridice.
            </li>
            <li>
              <b>Dreptul la restricționarea prelucrării </b>– Aveți dreptul să
              solicitați restricționarea procesării Datelor dumneavoastră. Acest
              lucru înseamnă că prelucrarea Datelor dumneavoastră este limitată,
              astfel încât să putem păstra Datele, dar să nu le utilizăm sau să
              le procesăm. Acest drept se aplică în circumstanțe specifice
              prevăzute de Regulamentul general privind protecția datelor, și
              anume:
            </li>
          </ol>
          <p>
            Exactitatea Datelor este contestată de persoana vizată (adică de
            dumneavoastră), pentru o perioadă care permite operatorului (adică
            {brand}) să verifice corectitudinea Datelor;
          </p>
          <p>
            Prelucrarea este ilegală și persoana vizată (adică dumneavoastră) se
            opune ștergerii Datelor și solicită restricția de utilizare a
            acestora;
          </p>
          <p>
            Operatorul (de exemplu, {brand}) nu mai are nevoie de Date pentru
            prelucrare, dar acestea sunt solicitate de persoana vizată (adică de
            dumneavoastră) pentru stabilirea, exercitarea sau apărarea unor
            pretenții legale;
          </p>
          <p>
            Persoana vizată (adică dumneavoastră) a ridicat obiecții procesării
            bazată pe motive legitime din partea operatorului (în acest caz{' '}
            {brand} ), în temeiul verificării dacă motivele legitime ale
            operatorului ( {brand} ) depășesc pe cele ale persoanei vizate
            (adică dumneavoastră).
          </p>
          <ol>
            <li>
              Dreptul la portabilitatea datelor – Aveți dreptul să mutați, să
              copiați sau să transferați datele care vă interesează din baza
              noastră de date într-o alta. Acest lucru se aplică numai datelor
              pe care le-ați furnizat, atunci când procesarea se bazează pe
              consimțământul dumneavoastră sau pe baza unui contract și este
              implementată prin mijloace automate.
            </li>
            <li>
              Dreptul de opoziție– Vă puteți opune în orice moment prelucrării
              datelor dumneavoastră atunci când o astfel de prelucrare se
              bazează pe un interes legitim.
            </li>
            <li>
              Dreptul de a retrage consimțământul în orice moment – Vă puteți
              retrage consimțământul în ceea ce privește prelucrarea datelor
              dumneavoastră atunci când o astfel de procesare se bazează pe
              consimțământ. Retragerea consimțământului nu afectează legalitatea
              prelucrării pe baza consimțământului înainte de retragerea
              acestuia.
            </li>
            <li>
              Dreptul de a depune o plângere la autoritatea de supraveghere
              competentă – Aveți dreptul să depuneți o plângere în fața
              autorității de protecție a datelor din țara dumneavoastră de
              reședință sau de domiciliu pentru a contesta practicile de
              protecție a datelor oferite de {brand} .
            </li>
            <li>
              Dreptul de a vă opune prelucrării datelor dumneavoastră în scopuri
              de marketing direct – Vă puteți dezabona sau renunța la
              comunicarea noastră de marketing direct în orice moment. Este mai
              ușor să faceți acest lucru dând clic pe linkul „dezabonare” în
              orice e-mail sau comunicare pe care vi le trimitem.
            </li>
            <li>
              Dreptul de a vă opune prelucrării datelor dumneavoastră de către
              noi atunci când desfășurăm acțiuni în interes public sau în
              interesele legitime proprii sau ale unui terț – Vă puteți opune în
              orice moment prelucrării datelor dumneavoastră atunci când o
              astfel de prelucrare se bazează pe un interes legitim.
            </li>
            <li>
              Dreptul de a dezactiva Cookies– aveți dreptul să dezactivați
              modulele cookie. Setările din browser-ele de Internet sunt de
              obicei programate în mod implicit pentru a accepta modulele
              cookie, dar puteți să le reglați ușor modificând setările browser
              ului.
            </li>
          </ol>
          <p>
            ţi poţi exercita aceste drepturi, fie individual, fie cumulat,
            foarte uşor, prin simpla transmitere a unei solicitări la sediul
            nostru din {dateFirma.sediuSocial}, sau prin E-mail, la:{' '}
            {dateFirma.email}
          </p>
          <h2 className="text-white">SOLICITĂRI JURIDICE</h2>
          <p>
            Accesăm, păstrăm și oferim informațiile dumneavoastră autorităților
            de reglementare, factorilor de aplicare a legii sau altor entități:
          </p>
          <ol>
            <li>
              Ca răspuns la o solicitare de natură juridică, atunci când
              considerăm, cu bună-credință, că legea ne impune acest lucru. De
              asemenea, este posibil să răspundem la solicitări de natură
              juridică atunci când considerăm, cu bună-credință, că răspunsul
              impus de legile din jurisdicția respectivă afectează utilizatorii
              din acea jurisdicție și este conform cu standardele recunoscute la
              nivel internațional.
            </li>
            <li>
              Atunci când considerăm, cu bună credință, că este necesar pentru:
              a detecta, a preveni și a răspunde la acte de fraudă, utilizarea
              neautorizată a oricărui material care ne aparține, încălcări ale
              condițiilor sau politicilor noastre sau alte activități dăunătoare
              sau ilegale, pentru a ne proteja pe noi (inclusiv drepturile,
              bunurile sau materialele noastre), pe dumneavoastră și pe alții,
              inclusiv în cadrul investigațiilor sau al anchetelor autorităților
              de reglementare sau pentru a preveni decesul sau vătămarea
              corporală iminentă. De exemplu, dacă este relevant, furnizăm
              informații către și primim informații de la terți parteneri despre
              fiabilitatea contului dumneavoastră, pentru a preveni frauda,
              abuzul și alte activități dăunătoare în cadrul și în afara
              materialelor noastre.
            </li>
          </ol>
          <p>
            Informațiile pe care le primim despre dumneavoastră pot fi accesate
            și stocate o perioadă mai lungă de timp atunci când fac obiectul
            unei solicitări de natură juridică sau unei obligații legale, al
            unei anchete guvernamentale, sau al unor investigații privind
            posibile încălcări ale condițiilor sau politicilor noastre, sau în
            alte cazuri pentru a preveni prejudiciile.
          </p>
          <h2 className="text-white">EXONERARE DE RĂSPUNDERE</h2>
          <p>
            Site-ul {site} poate conține legături către alte site-uri și/sau
            alte pagini web care nu sunt proprietatea {brand} . {brand} nu își
            asumă nicio responsabilitate cu privire la conținutul acestor
            site-uri și, prin urmare, nu va putea fi ținută răspunzătoare pentru
            conținutul, publicitatea, bunurile, serviciile, software-ul,
            informațiile sau alte materiale disponibile pe sau prin intermediul
            acestor site-uri.
            {brand} nu va fi responsabilă de pierderea datelor cu caracter
            personal, de orice efecte negative asupra datelor personale ale
            vizitatorilor sau de alte daune morale și/ sau patrimoniale cauzate
            de accesul la respectivele site-uri.
          </p>
          <h2 className="text-white">
            ACTUALIZAREA POLITICII DE PROTECȚIE ȘI PRELUCRARE A DATELOR CU
            CARACTER PERSONAL
          </h2>
          <p>
            Vă rugăm să aveți în vedere faptul că prezenta Politică poate face
            obiectul unor modificări periodice de conținut, prin actualizarea
            site-ului Edukiwi .
          </p>
          <p>
            Vă vom trimite o notificare înainte de a aduce orice modificări
            acestei Politici și vă vom oferi posibilitatea să consultați DPP
            revizuit înainte de a alege să continuați să utilizați materialele
            noastre.
          </p>
          <p>
            Vă rugăm să nu continuați să utilizați site-urile eduKiwi dacă nu
            sunteți de acord cu astfel de modificări. De asemenea, vă recomandăm
            să verificați această pagină pentru orice actualizare.
          </p>
          <p>
            Termenii DPP se interpretează în conformitate cu legislația
            aplicabilă.
          </p>
          <h2 className="text-white">CONTACT</h2>
          <p>
            Dacă aveți întrebări sau preocupări cu privire la modul în care
            tratăm și folosim datele dumneavoastră cu caracter personal, sau
            doriți să vă exercitați oricare dintre drepturile dumneavoastră, vă
            rugăm să ne contactați la {dateFirma.email}
          </p>
        </div>
      </>
    );
}

export default GDPRComponent