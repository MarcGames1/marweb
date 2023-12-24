'use client'
import useMousePosition from '@/hooks/useMousePosition';
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

    const {x, y} = useMousePosition()
  return (
    <motion.div
        style={{}}
      className={`absolute w-[${w}] h-[${h}] ${position} ${color} blur-3xl drop-shadow-xl`}
    />
  );
};

export default BlurGlow;
