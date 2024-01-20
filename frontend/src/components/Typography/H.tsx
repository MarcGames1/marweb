import React, { PropsWithChildren } from 'react'


export enum Alignment {
  Left = 'text-left',
  Center = 'text-center',
  Right = 'text-right',
  Justify = 'text-justify',
  Start = 'text-start',
  End = 'text-end',
}

export enum Size {
  XL7 = 'text-7xl',
  XL5 = 'text-5xl',
  XL3 = 'text-3xl',
}

export enum Color {
  Primary = 'text-primary-content',
  Secondary = 'text-secondary-content',
  Accent = 'text-accent-content',
}

interface HProps extends PropsWithChildren {
  level?: 1 | 2 | 3 | 4 | 5 | 6 | "div" | "span" | "p";
  alignment?: Alignment,
  size?: Size,
  color?: Color
  className?: string
}


const H = ({level, children, alignment=Alignment.Center, size = Size.XL5, color =Color.Primary, className}:HProps) => {


  
  


    const styles = `block m-auto  ${alignment} ${size} ${color}`;

    switch (level) {
      case 'span':
        return <span className={`${styles} ${className}`}>{children}</span>;

      case 'p':
        return <p className={`${styles} ${className}`}>{children}</p>;
      default:
         const Heading = level ? (`h${level}` as keyof JSX.IntrinsicElements) : ('span' as keyof JSX.IntrinsicElements);
      return <Heading className={`${styles} ${className}`}>{children}</Heading>;
  }
   
}

export default H

