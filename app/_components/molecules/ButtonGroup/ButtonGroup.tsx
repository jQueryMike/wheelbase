import { ButtonGroupProps } from "./ButtonGroup.types";
import cx from "classnames";

import styles from "./ButtonGroup.module.css";
import { Button } from "@components";

const ButtonGroup = ({
  orientation = "horizontal",
  size = "md",
  border = "rounded",
  items,
}: ButtonGroupProps) => (
  <div
    className={cx(
      styles.buttonGroup,
      styles[orientation],
      styles[size],
      styles[border]
    )}
  >
    {items.map((btn) => (
      <Button key={btn.id} {...btn} border="square" />
    ))}
  </div>
);

export default ButtonGroup;
