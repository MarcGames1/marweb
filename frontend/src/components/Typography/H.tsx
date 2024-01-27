import React, { PropsWithChildren } from 'react'

export enum TextAlignment {
left='text-left',
center='text-center',
right='text-right',
justify='text-justify',
start='text-start',
end='text-end'
}

export enum TextSize {
  xl7 = 'text-7xl',
  xl5='text-5xl',
  xl3='text-3xl',
  xl2='text-2xl',
  xl='text-xl',
  lg='text-lg',
  base='text-base',
}

export enum TextColor {
primary='text-primary-content',
secondary='text-secondary-content',
accent='text-accent-content',
neutral='text-neutral-content',
b100='text-base-100',
b200='text-base-200',
b300='text-base-300',
info='text-info',
success='text-success-content',
warning='text-warning-content',
error='text-error-content',
}



interface HProps extends PropsWithChildren {
  level?: 1 | 2 | 3 | 4 | 5 | 6 | "div" | "span" | "p";
  alignment?: TextAlignment,
  size?: TextSize,
  color?: TextColor
  className?: string
}


const H = ({level, children, alignment =TextAlignment.center, size = TextSize.xl5, color =TextColor.primary, className}:HProps) => {




    const styles = `block m-auto  ${String(alignment)} ${String(size)} ${String(color)} ${String(className)}`;

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

