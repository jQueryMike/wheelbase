import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
// import { ButtonSize, ButtonStyle } from '@utils/constants';
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
  return (
    <NextLink
      href={href || ''}
      target={target || '_self'}
      className={cn(classes?.buttonContent, {
        [classes?.buttonContentLoading || '']: loading,
      })}
    >
      <BaseComponent
        as="span"
        className={cn(classes.root, classes[`${style}Button`], classes[`${size}Button`])}
        styling={styling}
        stylingOptions={{ atomicType: 'atom' }}
      >
        {leftIcon && <Icon icon={leftIcon} className={classes.leftIcon} styling={{}} />}
        {text && <span className={classes?.textContainer}>{text}</span>}
        {rightIcon && <Icon icon={rightIcon} className={classes.rightIcon} styling={{}} />}
      </BaseComponent>
    </NextLink>
  );
};

export default Button;
