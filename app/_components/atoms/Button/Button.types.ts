import { ButtonSize, ButtonStyle } from '@utils/constants';
import { HTMLAttributeAnchorTarget } from 'react';

export type ButtonClasses<T = string> = {
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
  variant?: '1' | '2' | '5' | string;
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
  overrides?: {
    [key in keyof ButtonClasses]?: string;
  };
}
