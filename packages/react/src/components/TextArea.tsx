import { ElementType, FC, ReactNode } from 'react'
import { cn } from '../utils/classMerge'

export interface TextAreaProps {
  as?: ElementType
  children?: ReactNode
  className?: string
}

export const TextArea: FC<TextAreaProps> = ({
  as: Element = 'textarea',
  children,
  className,
}) => (
  <Element
    className={cn(
      'bg-gray-900 py-4 px-4 rounded-sm border-2 border-solid border-gray-900 font-roboto text-sm text-white font-regular resize-y min-h-[80px] focus:outline-0 focus:border-green-300 disabled:opacity-50 disabled:cursor-not-allowed placeholder-gray-400',
      className,
    )}
  >
    {children}
  </Element>
)

TextArea.displayName = 'TextArea'
