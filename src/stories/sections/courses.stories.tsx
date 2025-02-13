import { Courses } from '@/app/(app)/(home)/_components/courses'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Courses> = {
  title: 'sections/home',
  component: Courses,
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Courses>

export const CoursesSection: Story = {}
