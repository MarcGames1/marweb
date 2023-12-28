'use client'
import React, {
  useState,
  useEffect,
  MouseEvent as ReactMouseEvent,
} from 'react';

const CatFace: React.FC = () => {
  const [eyePosition, setEyePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const updateEyePosition = (event: ReactMouseEvent<SVGSVGElement>) => {
    const boundingRect = (
      event.currentTarget as SVGSVGElement
    ).getBoundingClientRect();
    const mouseX = event.clientX - boundingRect.left;
    const mouseY = event.clientY - boundingRect.top;
    setEyePosition({ x: mouseX, y: mouseY });
  };

  useEffect(() => {
    const catFace = document.getElementById('cat-face');
    if (catFace) {
      // @ts-ignore
      catFace.addEventListener('mousemove', updateEyePosition);
      return () => {
        // @ts-ignore
        catFace.removeEventListener('mousemove', updateEyePosition);
      };
    }
  }, []);

  return (
    <svg
      id="cat-face"
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      {/* Face */}
      <circle cx="100" cy="100" r="80" fill="black" />

      {/* Left ear */}
      <polygon points="50,20 80,80 50,80"  fill="black" />

      {/* Right ear */}
      <polygon points="150,20 120,80 150,80" fill="black" />

      {/* Left eye */}
      <circle cx="70" cy="80" r="15" fill="white" />
      <circle
        cx={eyePosition.x < 70 ? 65 : 75}
        cy={eyePosition.y < 80 ? 75 : 85}
        r="5"
        fill="black"
      />

      {/* Right eye */}
      <circle cx="130" cy="80" r="15" fill="white" />
      <circle
        cx={eyePosition.x > 130 ? 135 : 125}
        cy={eyePosition.y < 80 ? 75 : 85}
        r="5"
        fill="black"
      />
      {/* Nose */}
      <circle cx="100" cy="110" r="5" fill="pink" />

      {/* Mouth */}
      <path d="M90,130 Q100,145 110,130" stroke="pink" fill="transparent" />

      {/* Whiskers */}
      <line x1="85" y1="120" x2="70" y2="120" stroke="white" />
      <line x1="115" y1="120" x2="130" y2="120" stroke="white" />
      <line x1="85" y1="130" x2="70" y2="140" stroke="white" />
      <line x1="115" y1="130" x2="130" y2="140" stroke="white" />

      
      
    </svg>
  );
};

export default CatFace;
