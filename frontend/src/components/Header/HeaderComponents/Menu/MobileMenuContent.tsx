import { motion } from 'framer-motion';
import MenuButton from './MenuButton';
interface props {
  isOpen: boolean;
}


const MobileMenuContent = ({isOpen}:props) => {
    const variant = isOpen ? 'opened' : 'closed';

  return <motion.div className='w-screen h-screen bg-primary-gradient sticky inset-0 flex items-center justify-center ' >
    
<ul>
  <li>menu item</li>
  <li>menu item</li>
  <li>menu item</li>
  <li>menu item</li>
  <li>menu item</li>
</ul>
  </motion.div>;
};

export default MobileMenuContent;
