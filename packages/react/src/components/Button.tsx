import { ElementType, FC, ReactNode } from 'react'
import { cn } from '../utils/classMerge'

export interface ButtonProps {
  as?: ElementType
  children?: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md'
}

export const Button: FC<ButtonProps> = ({
  as: Element = 'div',
  children,
  className,
  variant = 'primary',
  size = 'md',
}) => (
  <Element
    className={cn(
      'rounded-sm text-sm gap-2 font-medium font-roboto text-center min-w-120 py-0 px-4 flex items-center justify-center cursor-pointer disabled:cursor-not-allowed focus:shadow-custom',
      {
        'text-white bg-green-500 [&:not(:disabled):hover]:bg-green-300 disabled:bg-gray-200':
          variant === 'primary',
      },
      {
        'text-green-300 border-2 border-solid border-green-500 [&:not(:disabled):hover]:bg-green-500 [&:not(:disabled):hover]:text-white disabled:text-gray-200 disabled:border-gray-200 ':
          variant === 'secondary',
      },
      {
        'text-gray-100 [&:not(:disabled):hover]:text-white disabled:text-gray-600':
          variant === 'tertiary',
      },
      {
        'h-[38px]': size === 'sm',
      },
      {
        'h-[46px]': size === 'md',
      },
      className,
    )}
  >
    {children}
  </Element>
)

Button.displayName = 'Button'

//   svg: {
//     width: '$4',
//     height: '$4',
//   },
