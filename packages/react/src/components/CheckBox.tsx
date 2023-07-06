import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { Root, Indicator } from '@radix-ui/react-checkbox'
import { cn } from '../utils/classMerge'
import { Check } from 'phosphor-react'

export interface CheckboxProps extends ComponentPropsWithoutRef<typeof Root> {
  children?: ReactNode
  className?: string
}

export const Checkbox: FC<CheckboxProps> = ({
  children,
  className,
  ...props
}) => (
  <Root
    className={cn(
      'w-6 h-6 bg-gray-900 rounded-xs leading-[0] cursor-pointer overflow-hidden flex justify-center items-center border-2 border-solid border-gray-900 [&:data-state="checked"]:bg-green-300 [&:data-state="checked"]:border-green-300 [&:focus]:border-green-300',
      className,
    )}
  >
    <Indicator className='text-white w-4 h-4 [&:data-state="checked"]:animate-slideIn [&:data-state="unchecked"]:animate-slideOut'>
      <Check weight="bold" />
    </Indicator>
  </Root>
)

Checkbox.displayName = 'Checkbox'
