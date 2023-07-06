import { Text } from './Text'
import { cn } from '../utils/classMerge'

export interface MultiStepProps {
  size: number
  currentStep?: number
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <div>
      <Text className="text-gray-200" size="xs">
        Current Step {currentStep} of {size}
      </Text>
      <div className={cn(`grid grid-cols-[${size}] gap-2 mt-1`)}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return (
            <div
              key={step}
              className={cn('h-1 rounded-px bg-gray-600', {
                'bg-gray-100': currentStep >= step,
              })}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

MultiStep.displayName = 'MultiStep'
