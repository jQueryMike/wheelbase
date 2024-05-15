import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import cn from 'classnames';
import NextLink from 'next/link';

import { Icon } from '../Icon';
import buttonClasses from './Button.classes';
import { ButtonProps } from './Button.types';

const Button = ({
  style,
  size,
  text,
  href,
  target = '_self',
  leftIcon,
  rightIcon,
  loading = false,
  overrides,
  styling,
}: ButtonProps) => {
  const classes = buildClasses(buttonClasses, overrides);

  if (!text) {
    return null;
  }

  return (
    <NextLink data-testid="button-link" href={href || ''} target={target || '_self'}>
      <BaseComponent
        data-testid="button-root"
        as="span"
        className={cn(classes.root, classes[`${style}Button`], classes[`${size}Button`])}
        styling={styling}
        stylingOptions={{ atomicType: 'atom' }}
      >
        <span
          data-testid="button-content"
          className={cn(classes?.buttonContent, {
            [classes?.buttonContentLoading || '']: loading,
          })}
        >
          {leftIcon && (
            <span data-testid="button-left-icon" className={classes.leftIcon}>
              <Icon icon={leftIcon} styling={{}} />
            </span>
          )}
          <span className={classes?.textContainer}>{text}</span>
          {text && (
            <span data-testid="button-text" className={classes?.textContainer}>
              {text}
            </span>
          )}
          {rightIcon && (
            <span data-testid="button-right-icon" className={classes.rightIcon}>
              <Icon icon={rightIcon} styling={{}} />
            </span>
          )}
        </span>
      </BaseComponent>
    </NextLink>
  );
};

export default Button;
