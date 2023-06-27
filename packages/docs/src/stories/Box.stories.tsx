import { Box, BoxProps, Text } from '@joaogabrielf/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<BoxProps> = {
  title: 'Form/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando o elemento Box</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
}

export default meta

type Story = StoryObj<BoxProps>

export const Primary: Story = {}
