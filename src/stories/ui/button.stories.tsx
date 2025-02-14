import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/components/ui/button'

const meta: Meta<typeof Button> = {
  title: 'components/ui/button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: [
        'default',
        'secondary',
        'ghost',
        'outline',
        'link',
        'destructive',
      ],
      control: {
        type: 'select',
        description: 'Button variants',
      },
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: {
        type: 'select',
        description: 'Button sizes',
      },
    },
    className: {
      control: 'text',
      description: 'Custom Tailwind classes to apply to the button',
    },
    children: {
      control: 'text',
      description: 'Context to be displayed inside the button',
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Default Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    children: 'Secondary Button',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    children: 'Outline Button',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
    children: 'Destructive Button',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
    children: 'Ghost Button',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    size: 'default',
    children: 'Link Button',
  },
}
