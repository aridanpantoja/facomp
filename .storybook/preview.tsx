import '../src/app/(app)/globals.css'

import type { Preview } from '@storybook/react' 
import { Plus_Jakarta_Sans } from 'next/font/google'
import { cn } from '../src/lib/utils'
import React from 'react'

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] })

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={cn(plusJakartaSans.className)}>
        <Story />
      </div>
    ),
]
}

export default preview
