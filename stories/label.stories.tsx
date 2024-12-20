import { Label } from '@/components/ui/label'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Label> = {
  title: 'UI/Label',
  component: Label,
  // tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  render: () => <Label htmlFor="email">Email</Label>,
}
