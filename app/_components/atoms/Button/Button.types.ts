import { HTMLAttributes, PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<
  HTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "tertiary";
    size?: "sm" | "md" | "lg";
    border?: "rounded" | "square" | "pill" | "none";
    fullWidth?: boolean;
    isLoading?: boolean;
  }
>;
