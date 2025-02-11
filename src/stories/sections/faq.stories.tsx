import { FAQ } from '@/app/(app)/(home)/_components/faq'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof FAQ> = {
  title: 'sections/home',
  component: FAQ,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof FAQ>

export const FAQSection: Story = {}
