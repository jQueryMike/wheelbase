import { useState } from "react";

export default function useToggle(
  initialValue: boolean = false
): [boolean, (val?: boolean) => void] {
  const [value, setValue] = useState(initialValue);
  const toggle = (val?: boolean) =>
    setValue((currentValue) =>
      typeof val === "boolean" ? val : !currentValue
    );
  return [value, toggle];
}
