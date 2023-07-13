import cn from 'classnames';
import NextLink from 'next/link';
import { HTMLAttributeAnchorTarget } from 'react';

import { Icon } from '../../utility-components/Icon';

export enum ButtonStyle {
  Primary = 'primary',
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
    | 'textContainer'
    | 'leftIcon'
    | 'rightIcon'
    | 'primaryButton'
    | 'accentButton'
    | 'plainButton'
    | 'smallButton'
    | 'mediumButton'
    | 'largeButton']?: T;
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
}

const Button = ({
  classes = {},
  text,
  href,
  target = '_self',
  leftIcon,
  rightIcon,
  type,
  onClick,
  size = ButtonSize.Medium,
  style = ButtonStyle.Primary,
}: ButtonProps) => {
  let button = (
    <button
      className={cn(classes.button, classes[`${size}Button`], classes[`${style}Button`])}
      type={type === 'button' ? 'button' : 'submit'}
      onClick={onClick}
    >
      {leftIcon && <Icon className={cn(leftIcon, classes.leftIcon)} />}
      {text && <span className={classes.textContainer}>{text}</span>}
      {rightIcon && <Icon className={cn(rightIcon, classes.rightIcon)} />}
    </button>
  );

  if (href && target === '_self') {
    button = <NextLink href={href}>{button}</NextLink>;
  } else if (href && target !== '_self') {
    button = (
      <a href={href} target={target}>
        {button}
      </a>
    );
  }

  return <div className={classes.root}>{button}</div>;
};

export default Button;
