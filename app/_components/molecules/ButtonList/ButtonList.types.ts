import { Sizes } from "@utils/constants";

export type ButtonListClasses<T = string> = {
  [key in 'root' | 'list' | 'listItem']?: T;
};

export interface ButtonListProps {
  variant?: '1' | string;
  gap?: Sizes;
  items: any[];
  overrides?: {
    [key in keyof ButtonListClasses]?: string;
  };
}
