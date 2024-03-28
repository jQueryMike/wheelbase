import { AtomicType } from "@types";
import { getSpacing } from "./spacing/getSpacing";

/**
 * @description Build component classes
 * @param component Component name
 * @param variant Variant name
 * @param overrides Component overrides
 * @returns Component classes
 */
export default function buildStyling({ spacing }: any, atomicType: AtomicType) {
  const classes: Array<string> = [];
  classes.push(getSpacing(spacing, atomicType));
  return classes.join(" ");
}
