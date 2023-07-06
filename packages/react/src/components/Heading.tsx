import { ElementType, FC, ReactNode } from 'react'
import { cn } from '../utils/classMerge'

export interface HeadingProps {
  as?: ElementType
  children?: ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
}

export const Heading: FC<HeadingProps> = ({
  as: Element = 'h2',
  children,
  className,
  size = 'md',
}) => (
  <Element
    className={cn(
      'font-roboto leading-shorter margin-0 text-gray-100',
      {
        'text-xl': size === 'sm',
      },
      {
        'text-2xl': size === 'md',
      },
      {
        'text-4xl': size === 'lg',
      },
      {
        'text-5xl': size === '2xl',
      },
      {
        'text-6xl': size === '3xl',
      },
      {
        'text-7xl': size === '4xl',
      },
      {
        'text-8xl': size === '5xl',
      },
      {
        'text-9xl': size === '6xl',
      },
      className,
    )}
  >
    {children}
  </Element>
)

Heading.displayName = 'Heading'
