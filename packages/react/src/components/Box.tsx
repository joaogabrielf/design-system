import { ElementType, FC, ReactNode } from 'react'
import { cn } from '../utils/classMerge'

export interface BoxProps {
  as?: ElementType
  children?: ReactNode
  className?: string
}

export const Box: FC<BoxProps> = ({
  as: Element = 'div',
  children,
  className,
}) => (
  <Element
    className={cn(
      'p-6 rounded-md bg-gray-800 border-solid border border-gray-600',
      className,
    )}
  >
    {children}
  </Element>
)

Box.displayName = 'Box'
