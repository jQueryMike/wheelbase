import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "radio" },
      defaultValue: "primary",
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
      defaultValue: "md",
    },
    border: {
      options: ["rounded", "square", "pill", "none"],
      control: { type: "radio" },
      defaultValue: "rounded",
    },
  },
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    border: "rounded",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
  },
};
