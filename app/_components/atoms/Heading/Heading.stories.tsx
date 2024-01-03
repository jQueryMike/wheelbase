import { Meta, StoryObj } from "@storybook/react";
import HeadingComponent from "./Heading";

const meta = {
  title: "Atoms/Heading",
  component: HeadingComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "radio" },
      defaultValue: "h1",
    },
  },
  args: {
    text: "Heading",
    as: "h1",
  },
} as Meta<typeof HeadingComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Heading: Story = {
  args: {},
};
