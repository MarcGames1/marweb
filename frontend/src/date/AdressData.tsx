import { generateRandomId } from "@/utils/Helpers";

const AdressData = [
  {
    id: generateRandomId(),
    icon: '/images/contact/phone-call 1.png',
    title: 'Telefon ',
    info: (
      <>
        <p>
          <a
            href="tel:0750472447"
            className="text-gray-lite text-lg dark:text-[#A6A6A6] "
          >
            (0750) 472 447
          </a>
        </p>

      </>
    ),
    bg: '#FCF4FF',
  },
  {
    id: generateRandomId(),
    icon: '/images/contact/email 1.png',
    title: 'Email ',
    info: (
      <>
        
        <p>
          <a
            href="mailto:alexandru@marweb.ro"
            className="text-gray-lite text-lg dark:text-[#A6A6A6] "
          >
            alexandru@marweb.ro
          </a>
        </p>
      </>
    ),
    bg: '#EEFBFF',
  },
  {
    id: generateRandomId(),
    icon: '/images/contact/map 1.png',
    title: 'Adresa ',
    info: (
      <>
        <p className="text-gray-lite text-lg dark:text-[#A6A6A6] ">
          Brasov
        </p>
        
      </>
    ),
    bg: '#F2F4FF',
  },
];

export default  AdressData