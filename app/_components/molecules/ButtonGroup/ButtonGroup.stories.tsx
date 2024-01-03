import { Meta, StoryObj } from "@storybook/react";
import ButtonGroup from "./ButtonGroup";

const meta = {
  title: "Molecules/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      options: [
        "horizontal",
        "horizontal-reverse",
        "vertical",
        "vertical-reverse",
      ],
      control: { type: "radio" },
      defaultValue: "horizontal",
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
      defaultValue: "md",
    },
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { variant: "primary", children: <>Button 1</> },
      { variant: "primary", children: <>Button 2</> },
      { variant: "primary", children: <>Button 3</> },
    ],
  },
};
