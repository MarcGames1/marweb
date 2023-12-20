import { useState, useEffect } from 'react';
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mq = window.matchMedia('(max-width: 1024px)');
      setIsMobile(mq.matches);
    };

    handleResize(); // Verificăm dimensiunea la început

    window.addEventListener('resize', handleResize); // Ascultăm modificările de dimensiune

    return () => {
      window.removeEventListener('resize', handleResize); // Curățăm event listener-ul la dezactivare
    };
  }, []);

  return isMobile;
};

export default useIsMobile;