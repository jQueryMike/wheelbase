import { ButtonProps } from "@components";

export type ButtonGroupProps = {
  orientation?:
    | "horizontal"
    | "horizontal-reverse"
    | "vertical"
    | "vertical-reverse";
  size?: "sm" | "md" | "lg";
  border?: "rounded" | "square" | "pill" | "none";
  items: Omit<ButtonProps, "size" | "border">[];
};
