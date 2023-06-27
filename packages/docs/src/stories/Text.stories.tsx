import { Text, TextProps } from '@joaogabrielf/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<TextProps> = {
  title: 'Typography/Text',
  component: Text,

  args: {
    children: 'Example text',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
}

export default meta

type Story = StoryObj<TextProps>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
