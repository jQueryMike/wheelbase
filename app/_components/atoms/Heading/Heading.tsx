import { HeadingProps } from "./Heading.types";

import cx from "classnames";

import styles from "./Heading.module.css";

const Heading = ({ as, text }: HeadingProps) => {
  const Component = as || "h1";
  return <Component className={cx(styles.heading)}>{text}</Component>;
};

export default Heading;
