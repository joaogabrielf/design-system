import { Heading, HeadingProps } from '@joaogabrielf/react'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<HeadingProps> = {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    children: 'Example Heading',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
}

export default meta

type Story = StoryObj<HeadingProps>

export const Primary: Story = {}

export const CustomTag: Story = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default the Heading component renders a `h2` element. You can change this behavior by passing the `as` prop.',
      },
    },
  },
}
