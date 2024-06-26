import { BaseProps } from '@components/types';
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

export type ButtonProps = BaseProps<{
  classes?: ButtonClasses<string>;
  text?: string;
  testId?: string;
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
}>;
