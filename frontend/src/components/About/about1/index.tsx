import Image from 'next/image';
import PersonalInfo from './PersonalInfo';

const index = () => {
  return (
    <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[40px] items-center">
      {/* start .col and routePath image left */}
      <div className="col-span-12 md:col-span-4">
        {/* personal images for routePath page  */}
        <Image
          className="w-full md:w-[330px] md:h-[400px] object-cover overflow-hidden rounded-[35px] mb-3 md:mb-0"
          src="/assets/DespreMine/Poza-Alexandru-Marcu.png"
          width={300}
          height={400}
          alt="routePath"
        />
      </div>
      {/* End .col and routePath image left */}

      {/* Start about right content */}
      <div className="col-span-12 md:col-span-8 space-y-2.5">
        <div className=" md:mr-12 xl:mr-16">
          <h3 className="text-4xl font-medium dark:text-white mb-2.5 ">
            Cateva Lucruri Despre Mine
          </h3>
          <p className="text-gray-lite  dark:text-color-910 leading-7">
            Sunt Alexandru Marcu,programator, expert SEO și Google Ads, pasionat
            de dezvoltarea de site-uri. Am coordonat o agenție de marketing
            online și am fost mentor la un curs de SEO, adunând o experiență de
            peste doi ani în domeniu. Mă pricep atât la crearea site-urilor în
            WordPress, cât și la dezvoltarea site-urilor custom folosind
            tehnologii de ultimă generație precum Next.js, MongoDB și Node.js.
          </p>
          <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
            Misiunea mea este să ajut antreprenorii să atragă mai mulți clienți,
            fie prin servicii de SEO și Google Ads, fie prin dezvoltarea de
            site-uri web. Sunt disponibil pentru sesiuni de mentorat unu la unu,
            unde împărtășesc cunoștințele mele extinse și bine documentate în
            domeniul SEO.
          </p>
          <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
            Am o abordare creativă și pragmatică în abordarea problemelor,
            oferind soluții simple, frumoase și intuitive. Îmi place să aduc la
            viață mesajul și identitatea în cel mai creativ mod posibil. Aștept
            cu nerăbdare să explorez împreună oportunitățile din lumea digitală
            și să contribui la succesul proiectului tău.
          </p>
        </div>

        {/* personal information */}
        <div>
          <h3 className="text-4xl font-medium my-5 dark:text-white">
            Ma poti gasi aici
          </h3>
          <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
            <PersonalInfo />
          </div>
        </div>
        {/* End personal information */}
      </div>
      {/* End about right content */}
    </div>
  );
};

export default index;
