import { User } from 'phosphor-react'
import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { Root, Image, Fallback } from '@radix-ui/react-avatar'
import { cn } from '../utils/classMerge'

export interface AvatarProps extends ComponentPropsWithoutRef<typeof Root> {
  children?: ReactNode
  className?: string
}

export const Avatar: FC<AvatarProps> = ({ children, className, ...props }) => (
  <Root className="rounded-full inline-block w-16 h-16 overflow-hidden">
    <Image
      {...props}
      className={cn('w-full h-full object-cover rounded-[inherit]', className)}
      alt=""
    />

    <Fallback
      delayMs={600}
      className="w-full h-full flex items-center justify-center bg-gray-600 text-gray-800"
    >
      <User className="w-6 h-6" />
    </Fallback>
  </Root>
)

Avatar.displayName = 'Avatar'

//   svg: {
//     width: '$6',
//     height: '$6',
//   },
// })
