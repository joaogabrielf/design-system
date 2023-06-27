import { Avatar, AvatarProps } from '@joaogabrielf/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<AvatarProps> = {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://www.github.com/joaogabrielf.png',
    alt: 'Joao Franco',
  },

  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

type Story = StoryObj<AvatarProps>

export const Primary: Story = {}
export const WithFallback: Story = {
  args: {
    src: undefined,
  },
}
