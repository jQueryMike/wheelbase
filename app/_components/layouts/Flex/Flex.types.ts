import { CSSProperties, HTMLAttributes } from "react";

export type FlexProps = HTMLAttributes<HTMLElement> & {
  display?: "flex" | "inline-flex";
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justify?: "start" | "end" | "center" | "between" | "around";
  align?: "start" | "end" | "center" | "stretch";
  wrap?: "wrap" | "nowrap";
  grow?: number;
  shrink?: number;
  basis?: string;
  order?: number;
  gap?: "sm" | "md" | "lg" | "xl" | "none";
  fluid?: boolean;
  fullHeight?: boolean;
  fullWidth?: boolean;
};
