'use client'
import Link from 'next/link';
import React from 'react'
import { H } from './Typography';
import { TextSize } from './Typography/H';
import axios from 'axios';
import { toast } from 'react-toastify';
import { usePathname } from 'next/navigation';

const NotAvailable = () => {

  const pathname = usePathname();

    const handleLeadForm = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // Prevenim comportamentul implicit de trimitere a formularului

      // Accesăm valorile introduse de utilizator în câmpurile formularului
      const formData = new FormData(e.target as HTMLFormElement);
      const name = formData.get('name');
      const email = formData.get('user_email');
      const phone = formData.get('user_phone');
      const message = formData.get('message');

      // TODO de trimis catre slack stilizat frumos ca JSON
      // Construim obiectul de date pentru trimiterea către Slack
      const data = {
        text: `
            *Name:* ${name}
            *Email:* ${email}
            *Route:* ${pathname}

        `,
      };
      try {
        // Trimiterea datelor către webhook-ul Slack
        await axios.post(
          process.env.SLACK_URL as string,
          JSON.stringify(data)
        );

        // Curățăm formularul după trimitere
        (e.target as HTMLFormElement).reset();

        // Afișăm un mesaj de succes cu ajutorul React Toastify
        toast.success('Formular trimis cu succes!');
      } catch (error) {
        console.error('Eroare la trimiterea datelor către Slack:', error);
        toast.error('Eroare la trimiterea formularului!');
      }
      //TODO clear Form
      // Afișăm un mesaj de succes cu ajutorul React Toastify
    };


    
  return (
    <>
      <div className="h-auto w-full flex flex-col justify-center items-center  d">
        <h1 className="text-7xl leading-none dark:text-white font-extrabold md:text-8xl">
          Disponibil Incurand
        </h1>
        <p className=" text-medium dark:text-white text-sm capitalize mb-7 mt-6 px-4 text-center">
          Aceasta Pagina va fi disponibila Incurand
        </p>
        <section className="mx-4 md:mx-[60px] p-4 md:p-16 dark:border-[#212425] dark:border-2'} bg-color-810 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px]">
          <H
            className="text-gray-lite dark:text-[#A6A6A6] "
            size={TextSize.xl3}
            level={'div'}
          >
            Vrei sa te anuntam cand aceasta pagina va fi disponibila?
          </H>
          <H
            className="font-semibold dark:text-white"
            size={TextSize.xl2}
            level={'div'}
          >
            Aboneaza-te la newsletter si vei fi primul care va afla totul despre
            marweb.ro
          </H>
          <form onSubmit={handleLeadForm} method="post">
            <div className="relative z-0 w-full mt-[40px] mb-8 group">
              <input
                type="text"
                name="name"
                className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                Nume *
              </label>
            </div>
            {/* End single block */}

            <div className="relative z-0 w-full mb-8 group">
              <input
                type="email"
                name="user_email"
                className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
                placeholder=" "
                id="user_email"
                required
              />
              <label
                htmlFor="user_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                Email *
              </label>
            </div>
            {/* End single block */}
            <div className="transition-all duration-300 bg-gradient-to-l  ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg  mt-3">
              <input
                type="submit"
                className=" transition ease-in duration-200 font-semibold cursor-pointer hover:border-color-910   border-transparent px-6  py-2 rounded-lg border-[2px]  hover:text-white   dark:text-white "
                value="Trimite! "
              />
            </div>
          </form>
        </section>
        <Link
          href="/"
          className="flex items-center mx-auto border-[2px] border-color-910 hover:border-transparent   duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-3 text-lg light:text-black dark:text-white rounded-[5px]"
        >
          Inapoi la Pagina Principala
        </Link>
      </div>
    </>
  );
}

export default NotAvailable

// TODO - ADD Slack Notification + Save in DB 