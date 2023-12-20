import { motion } from 'framer-motion';
import { MenuData, IMenuData } from '@/date/menuData';
import Link from 'next/link';
import { Buttons } from '@/components';
interface props {
  isOpen: boolean;
}



const MobileMenuContent = ({isOpen}:props) => {

  

    const variants = {
      opened: {x: 0, opacity:1 , display: 'flex', },
      closed: {x: -500, display: 'none', opacity:0},
    }

 
    const variant = isOpen ? 'opened' : 'closed';
    return (
      <motion.ul
        //@ts-ignore
        variants={variants}
        exit={variant}
        transition={{
          type: 'spring',
          delayChildren: 0.3,
          staggerChildren: 0.1,
          stiffness: 100,
        }}
        initial={variant}
        animate={variant}
        className="  -z-10 h-[95vh] glass absolute bg-secondary/90 flex flex-col inset-0 items-center justify-center "
        style={{
          display: isOpen ? 'flex' : 'none',
          position: isOpen ? 'absolute' : 'relative',
        }}
      >
        {MenuData.map((m, i) => {
          return (
            <motion.li
              className="text-xl my-5   z-10 relative  hover:btn-secondary btn btn-accent transition-colors ease-in-out duration-100 border-primary  rounded-2xl text-center flex items-center gap-10 hover:text-white"
              //@ts-ignore
              variants={variants}
              key={i}
            >
              <Link href={m.href}>{m.text}</Link>
            </motion.li>
          );
        })}
        <div className="flex gap-5">
          <Buttons.Calendly />
          <Buttons.Whatsapp />
        </div>
      </motion.ul>
    );
};

export default MobileMenuContent;
