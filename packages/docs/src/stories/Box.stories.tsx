// import { Box, BoxProps, Text } from '@joaogabrielf/react'
// import type { Meta, StoryObj } from '@storybook/react'

// const meta: Meta<BoxProps> = {
//   title: 'Form/Box',
//   component: Box,
//   args: {
//     children: (
//       <>
//         <Text>Testando o elemento Box</Text>
//       </>
//     ),
//     className: 'bg-red-500',
//   },
//   argTypes: {
//     children: {
//       control: {
//         type: null,
//       },
//     },
//   },
// }

// console.log(Box)

// export default meta

// type Story = StoryObj<BoxProps>

// export const Primary: Story = {}

// Button.stories.ts|tsx

// import type { Meta, StoryObj } from '@storybook/react'

// const Button = () => <button className="text-red-500">Test</button>

// const meta: Meta<typeof Button> = {
//   component: Button,
// }

// export default meta
// type Story = StoryObj<typeof Button>

// /*
//  *👇 Render functions are a framework specific feature to allow you control on how the component renders.
//  * See https://storybook.js.org/docs/react/api/csf
//  * to learn how to use render functions.
//  */
// export const Primary: Story = {
//   render: () => <Button />,
// }

// ./src/stories/Button.js

import React, { useMemo } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

const getSizeClasses = (size) => {
  switch (size) {
    case 'small': {
      return 'px-4 py-2.5'
    }
    case 'large': {
      return 'px-6 py-3'
    }
    default: {
      return 'px-5 py-2.5'
    }
  }
}

const getModeClasses = (isPrimary) =>
  isPrimary
    ? 'text-white bg-pink-600 border-pink-600 dark:bg-pink-700 dark:border-pink-700'
    : 'text-slate-700 bg-transparent border-slate-700 dark:text-white dark:border-white'

const BASE_BUTTON_CLASSES =
  'cursor-pointer rounded-full border-2 font-bold leading-none inline-block'

/**
 * Primary UI component for user interaction
 */
const Button = ({ primary = false, size = 'medium', label, ...props }) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary)
    const sizeClass = getSizeClasses(size)

    return [modeClass, sizeClass].join(' ')
  }, [primary, size])

  return (
    <button
      type="button"
      className={`${BASE_BUTTON_CLASSES} ${computedClasses}`}
      {...props}
    >
      {label}
    </button>
  )
}

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Button label={'oi'} primary={true} />,
}
