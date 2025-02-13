import { Hero } from '@/app/(app)/(home)/_components/hero'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Hero> = {
  title: 'sections/home',
  component: Hero,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Hero>

export const HeroSection: Story = {}
