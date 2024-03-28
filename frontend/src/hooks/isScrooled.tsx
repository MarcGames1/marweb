import { useState, useEffect } from 'react';

const useIsScrolled = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
   
    
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled, setIsScrolled]);
  return isScrolled;
};

export default useIsScrolled;
