import { Progress } from '@/components/ui/progress'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Progress> = {
  title: 'UI/Progress',
  component: Progress,
  // tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Progress>

export const Default: Story = {
  render: () => <Progress value={33} />,
}
