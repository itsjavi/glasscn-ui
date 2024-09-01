import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "../components/ui/button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // bg: { control: 'color' },
    variant: {
      control: "select",
      options: ["default", "subtle", "outline", "ghost", "link"],
    },
    color: {
      control: "select",
      options: ["default", "primary", "secondary", "danger", "warning"],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    size: { control: "select", options: ["default", "sm", "lg", "xl", "icon"] },
    radius: {
      control: "select",
      options: ["default", "none", "sm", "lg", "xl", "2xl", "3xl", "full"],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  render: (args) => (
    <div className="flex gap-4">
      <Button variant="default" {...args}>
        Default
      </Button>
      <Button variant="default" {...args} color="primary">
        Primary
      </Button>
      <Button variant="default" {...args} color="secondary">
        Secondary
      </Button>
      <Button variant="default" {...args} color="danger">
        Danger
      </Button>
      <Button variant="default" {...args} color="warning">
        Warning
      </Button>
    </div>
  ),
};