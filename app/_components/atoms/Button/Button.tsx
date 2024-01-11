import cn from 'classnames';
import NextLink from 'next/link';

// TODO Implement the icon component
//import { Icon } from '../../utility-components/Icon';
import { ButtonProps, ButtonSize, ButtonStyle } from './Button.types';

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
  loading = false,
}: ButtonProps) => {
  let button = (
    <button
      className={cn(classes.button, classes[`${size}Button`], classes[`${style}Button`], {
        [classes.buttonLoading || '']: loading,
      })}
      type={type === 'button' ? 'button' : 'submit'}
      onClick={onClick}
    >
      {loading && (
        <span className={classes.loadingIconContainer}>{/* <Icon className={classes.loadingIcon} /> */}</span>
      )}
      <span
        className={cn(classes.buttonContent, classes[`${size}ButtonContent`], {
          [classes.buttonContentLoading || '']: loading,
        })}
      >
        {/* {leftIcon && <Icon className={cn(leftIcon, classes.leftIcon)} />} */}
        {text && <span className={classes.textContainer}>{text}</span>}
        {/* {rightIcon && <Icon className={cn(rightIcon, classes.rightIcon)} />} */}
      </span>
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
