import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import { ButtonSize, ButtonStyle } from '@utils/constants';
import cn from 'classnames';
import NextLink from 'next/link';

import { Icon } from '../Icon';
import buttonClasses from './Button.classes';
import { ButtonProps } from './Button.types';

const Button = ({
  text,
  href,
  target = '_self',
  leftIcon,
  rightIcon,
  type,
  onClick,
  size = ButtonSize.Medium,
  style = ButtonStyle.Primary,
  loading = false,
  overrides,
  styling,
}: ButtonProps) => {
  const classes = buildClasses(buttonClasses, overrides);
  let button = (
    <BaseComponent
      as="button"
      className={cn(classes?.root, classes?.button, classes?.[`${size}Button`], classes?.[`${style}Button`], {
        [classes?.buttonLoading || '']: loading,
      })}
      styling={styling}
      stylingOptions={{ atomicType: 'atom' }}
      type={type === 'button' ? 'button' : 'submit'}
      onClick={onClick}
    >
      {loading && (
        <span className={classes?.loadingIconContainer}>{/* <Icon className={classes.loadingIcon} /> */}</span>
      )}
      <span
        className={cn(classes?.buttonContent, classes?.[`${size}ButtonContent`], {
          [classes?.buttonContentLoading || '']: loading,
        })}
      >
        {leftIcon && <Icon className={cn(leftIcon, classes.leftIcon)} styling={{}} />}
        {text && <span className={classes?.textContainer}>{text}</span>}
        {rightIcon && <Icon className={cn(rightIcon, classes.rightIcon)} styling={{}} />}
      </span>
    </BaseComponent>
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

  return <div className={classes?.root}>{button}</div>;
};

export default Button;
