import { InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '../utils/classMerge'

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  prefix?: string
  className?: string
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md'
}
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ prefix, size = 'md', className, ...props }: TextInputProps, ref) => {
    return (
      <div
        className={cn(
          'bg-gray-900 rounded-sm border-2 border-solid border-gray-900 flex items-center [&:has(input:focus)]:border-green-300 [&:has(input:disabled)]:opacity-50 [&:has(input:disabled)]:cursor-not-allowed)]',
          {
            'py-2 px-3': size === 'sm',
          },
          {
            'py-3 px-4': size === 'md',
          },
          className,
        )}
      >
        {!!prefix && (
          <span className="font-roboto text-sm text-gray-400 font-regular">
            {prefix}
          </span>
        )}
        <input
          ref={ref}
          className={cn(
            'font-robot text-sm text-white font-regular bg-transparent border-0 w-full focus:outline-0 disabled:cursor-not-allowed placeholder-gray-400',
            className,
          )}
          {...props}
        />
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'
