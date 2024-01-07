'use client'
import React, {useState} from 'react'
import Navbar from './MockupContentComponents/Navbar'
import { motion } from 'framer-motion';
import variants from './MockupVariants';



const MockupContent = () => {
   
    const [variant, setVariant] = useState<number>(1);

   

const handleVariantChange = (newVariant: number) => {
  setVariant(newVariant);
};

  return (
    <motion.div  className="w-full ">
      <Navbar />
      {variants[variant]}
      <div className="flex items-center justify-center w-full gap-10">
        {Object.keys(variants).map((key) => (
          <button
            key={key}
            className={`btn ${
              parseInt(key) === variant ? 'btn-outline' : 'btn-primary'
            }`}
            onClick={() => handleVariantChange(parseInt(key))}
          >
            {key}
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default MockupContent