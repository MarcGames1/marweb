'use client'
import { motion, useCycle } from 'framer-motion';
import MenuButton from './MenuButton';
import MobileMenuContent from './MobileMenuContent';



const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  


  return (
    <motion.nav
      onClick={() => {
        toggleOpen();
      }}
      className="cursor-pointer"
      initial={false}
      animate={isOpen ? 'opened' : 'closed'}
    >
      <MenuButton
        isOpen={isOpen}
        width={24}
        height={24}
        strokeWidth={2.5}
        color={'#fff'}
        transition={{ type: 'spring', stiffness: 200 }}
        lineProps={undefined}
      />
      <MobileMenuContent isOpen={isOpen} />
    </motion.nav>
  );
};


