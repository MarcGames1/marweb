import { generateRandomId } from '@/utils/Helpers';
import Link from 'next/link';
import {
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaWhatsapp,
} from 'react-icons/fa';

const PersonalInfo = () => {
  const personalContent = [
    {
      id: generateRandomId(),
      icon: <FaMobileAlt />,
      iconColor: 'text-oriange',
      name: 'Phone',
      meta: (
        <>
          <a
            className="hover:text-[#FA5252] duration-300 transition"
            href="tel:0750472447"
          >
            0750472447
          </a>
        </>
      ),
    },
    {
      id: generateRandomId(),
      icon: <FaMapMarkerAlt />,
      iconColor: 'text-oriange-lite',
      name: 'Locatie',
      meta: <>Brasov, Romania</>,
    },
    {
      id: 3,
      icon: <FaEnvelopeOpenText />,
      iconColor: 'text-green',
      name: 'Email',
      meta: (
        <>
          {' '}
          <a
            className="hover:text-[#FA5252] duration-300 transition"
            href="mailto:alexandru@marweb.ro"
          >
            alexandru@marweb.ro
          </a>
        </>
      ),
    },
    {
      id: generateRandomId(),
      icon: (
        <Link
          role="button"
          href={'https://wa.me/+40750472447'}
          title="Scrie-mi un mesaj pe Whatsapp"
        >
          <FaWhatsapp />
        </Link>
      ),
      iconColor: 'text-color-50',
      name: 'Whatsapp',
      meta: (
        <Link
          className=" hover:text-[#FA5252] duration-300 transition"
          role="button"
          href={'https://wa.me/+40750472447'}
          title="Scrie-mi un mesaj pe Whatsapp"
        >
          0750472447
        </Link>
      ),
    },
  ];

  return (
    <>
      {personalContent.map((item) => (
        <div className="flex" key={item.id}>
          <span
            className={`${item.iconColor} dark:bg-color-990 shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-12 text-`}
          >
            {item.icon}
          </span>
          <div className="space-y-1">
            <p className="text-xs text-gray-lite dark:text-color-910">
              {item.name}
            </p>
            <h6 className="font-medium dark:text-white">{item.meta}</h6>
          </div>
        </div>
      ))}
    </>
  );
};

export default PersonalInfo;
