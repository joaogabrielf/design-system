import { ElementType, FC, ReactNode } from 'react'
import { cn } from '../utils/classMerge'

export interface TextProps {
  as?: ElementType
  children?: ReactNode
  className?: string
  size?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
}

export const Text: FC<TextProps> = ({
  as: Element = 'p',
  children,
  className,
  size = 'md',
}) => (
  <Element
    className={cn(
      'font-roboto leading-shorter margin-0 text-gray-100',
      {
        'text-xxs': size === 'xxs',
      },
      {
        'text-xs': size === 'xs',
      },
      {
        'text-sm': size === 'sm',
      },
      {
        'text-md': size === 'md',
      },
      {
        'text-lg': size === 'lg',
      },
      {
        'text-xl': size === 'xl',
      },
      {
        'text-2xl': size === '2xl',
      },
      {
        'text-4xl': size === '4xl',
      },
      {
        'text-5xl': size === '5xl',
      },
      {
        'text-6xl': size === '6xl',
      },
      {
        'text-7xl': size === '7xl',
      },
      {
        'text-8xl': size === '8xl',
      },
      {
        'text-9xl': size === '9xl',
      },
      className,
    )}
  >
    {children}
  </Element>
)

Text.displayName = 'Text'
