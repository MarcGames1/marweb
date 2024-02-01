'use client'
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ServiceData } from '@/date/ServiceData';
import { motion } from 'framer-motion';

export enum bgClassName {
  Transparent = 'bg-transparent',
  C700 = 'bg-700',
  C500 = 'bg-500',
} 




const Service = () => {
  const { theme, setTheme } = useTheme();
  const [componentTheme, setComponentTheme] = useState('dark')
    
  
    useEffect( () =>{
        
        const storedTheme = localStorage.getItem('theme')
           if( storedTheme) {
             setTheme(storedTheme)
             setComponentTheme(storedTheme)
           }

        if(theme !== componentTheme){
            
            const storedTheme = localStorage.getItem('theme')
           if( storedTheme) {
             setTheme(storedTheme)

           } 
        //    setComponentTheme(theme)
           return
            
        }
        
    },[theme])

  return (
    <>
      {ServiceData.map((item) => (
        <motion.div
          className={`about-box dark:${bgClassName.Transparent} light:[${bgClassName.C700}]`}
          key={item.id}
          style={{
            background: `${(componentTheme === 'dark') ? 'transparent' : item?.bg}`,
          }}
        >
          <Image
            className="w-10 h-10 object-contain  block"
            src={item.icon}
            width={40}
            height={40}
            alt="icon"
          />

          <div className="space-y-2 break-keep	 ">
            <h3 className="dark:text-white text-xl font-semibold">
              {item?.title}
            </h3>
            <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6] ">
              {item?.des}
            </p>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Service;
