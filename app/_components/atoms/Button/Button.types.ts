import { HTMLAttributeAnchorTarget } from 'react';

export enum ButtonStyle {
  Primary = 'primary',
  Secondary = 'secondary',
  Accent = 'accent',
  Plain = 'plain',
}

export enum ButtonSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export type ButtonClasses<T> = {
  [key in
    | 'root'
    | 'button'
    | 'buttonLoading'
    | 'buttonContent'
    | 'buttonContentLoading'
    | 'loadingIconContainer'
    | 'loadingIcon'
    | 'textContainer'
    | 'leftIcon'
    | 'rightIcon'
    | 'primaryButton'
    | 'secondaryButton'
    | 'accentButton'
    | 'plainButton'
    | 'smallButton'
    | 'mediumButton'
    | 'largeButton'
    | 'smallButtonContent'
    | 'mediumButtonContent'
    | 'largeButtonContent']?: T;
};

export interface ButtonProps {
  classes?: ButtonClasses<string>;
  text?: string;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  leftIcon?: string;
  rightIcon?: string;
  type?: 'button' | 'submit';
  style?: ButtonStyle;
  size?: ButtonSize;
  onClick?: () => void;
  loading?: boolean;
}
