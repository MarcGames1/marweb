import React, { PropsWithChildren } from 'react'


type alignment =
    | 'left'
    | 'center'
    | 'right'
    | 'justify'
    | 'start'
    | 'end'

type size = '7xl' | '5xl' | '3xl' | '2xl' | 'xl';

type color = 'primary' | 'secondary' | 'accent'

interface HProps extends PropsWithChildren {
  level?: 1 | 2 | 3 | 4 | 5 | 6 | "div" | "span" | "p";
  alignment?: alignment,
  size?: size,
  color?: color
  className?: string
}


const H = ({level, children, alignment ='center', size = '5xl', color ='primary', className}:HProps) => {


    const textStyle = (variant : alignment | size) =>{ return `text-${variant}` }
    const textColor = (variant : color) =>{ return `text-${variant}-content` }


    const styles = `block m-auto  ${String(textStyle(alignment))} ${String(
      textStyle(size)
    )} ${String(textColor(color))}`;

    if (level === 'div') {
      return <div className={`${styles} ${className}`}>{children}</div>;
    }
     if (level === 'span') {
       return <span className={`${styles} ${className}`}>{children}</span>;
     }
      if (level === 'p') {
        return <p className={`${styles} ${className}`}>{children}</p>;
      }
      const Heading = level
        ? (`h${level}` as keyof JSX.IntrinsicElements)
        : ('span' as keyof JSX.IntrinsicElements);
  return <Heading className={`${styles} ${className}`}>{children}</Heading>;
}

export default H

