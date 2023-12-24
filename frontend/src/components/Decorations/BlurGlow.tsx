'use client'
import {motion} from 'framer-motion'

/**
 * Interfața pentru proprietățile componenteii BlurGlow.
 */
export interface IBlurGlow {
  position: string; // Poziția absolută a elementului
  w?: string; // Lățimea elementului (opțional)
  h?: string; // Înălțimea elementului (opțional)
  color?: string; // Culoarea de fundal a elementului (opțional)
}

/**
 * Componenta BlurGlow adaugă un efect de blur și glow pe un element.
 * Această componentă folosește stilurile TailwindCSS pentru a aplica efectele.
 * @param position Poziția absolută a elementului.
 * @param w Lățimea elementului urmat de unitatea de masura rem, em px etc (opțional).
 * @param h Înălțimea elementului urmat de unitatea de masura rem, em px etc (opțional).
 * @param color Culoarea de fundal a elementului default bg-[#13DAC0] (opțional).
 * @returns {JSX.Element} Elementul cu efectul de blur și glow aplicat.
 */
const BlurGlow = ({
  position = '',
  w = '300px',
  h = '200px',
  color = 'bg-[#13DAC0]',
}: IBlurGlow): JSX.Element => {

  
  return (
    <motion.div
     
      animate={{  scale: [1, 0.8, 1, .6, 1, .7] }}
      transition={{
        type: 'tween',
        duration: 10,
        repeatType: 'mirror',
        repeat: Infinity,
      }}
      style={{
        height: h,
        width: w,
      }}
      className={`absolute  ${position} ${color} blur-3xl  drop-shadow-xl`}
    />
  );
       
};

export default BlurGlow;
