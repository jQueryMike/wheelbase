import { ButtonProps } from "./Button.types";
import cx from "classnames";

import styles from "./Button.module.css";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  border = "rounded",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cx(
        styles.button,
        styles[variant],
        styles[size],
        styles[border]
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
