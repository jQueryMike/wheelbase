import cn from 'classnames';
import NextLink from 'next/link';
import { HTMLAttributeAnchorTarget } from 'react';

export type ButtonClasses<T> = {
  [key in
    | 'root'
    | 'button'
    | 'textContainer'
    | 'text'
    | 'leftIconContainer'
    | 'leftIcon'
    | 'rightIconContainer'
    | 'rightIcon']?: T;
};

export interface ButtonProps {
  classes?: ButtonClasses<string>;
  text?: string;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  leftIcon?: string;
  rightIcon?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

const Button = ({ classes = {}, text, href, target = '_self', leftIcon, rightIcon, type, onClick }: ButtonProps) => {
  let button = (
    <button className={classes.button} type={type === 'button' ? 'button' : 'submit'} onClick={onClick}>
      {leftIcon && (
        <span className={classes.leftIconContainer}>
          <i className={cn(leftIcon, classes.leftIcon)} />
        </span>
      )}
      {text && (
        <span className={classes.textContainer}>
          <span className={classes.text}>{text}</span>
        </span>
      )}
      {rightIcon && (
        <span className={classes.rightIconContainer}>
          <i className={cn(rightIcon, classes.rightIcon)} />
        </span>
      )}
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

  return <span className={classes.root}>{button}</span>;
};

export default Button;
