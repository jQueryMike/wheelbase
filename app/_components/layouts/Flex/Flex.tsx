import { FlexProps } from "./Flex.types";
import cx from "classnames";

import styles from "./Flex.module.css";

const Flex = ({
  children,
  className,
  display = "flex",
  direction = "row",
  gap = "md",
}: FlexProps) => {
  return (
    <div
      className={cx(
        className,
        styles.box,
        styles[display],
        styles[direction],
        styles[`gap-${gap}`]
      )}
    >
      {children}
    </div>
  );
};

export default Flex;
