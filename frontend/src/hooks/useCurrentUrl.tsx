import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const useIsCurrentURL = (url: string): boolean => {
  const [isCurrentURL, setIsCurrentURL] = useState(false);
  const router = useRouter();


  const currentPathName = usePathname()

  useEffect(() => {
    const checkCurrentURL = () => {
      // @ts-ignore
      setIsCurrentURL(currentPathName === url);
    };

    checkCurrentURL(); // Verificăm URL-ul la început

    // Verificăm URL-ul la schimbarea rutei

    return () => {
      // Curățăm event listener-ul la dezactivare
    };
  }, [currentPathName === url]);

  return isCurrentURL;
};

export default useIsCurrentURL;
