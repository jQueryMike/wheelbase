import { Dispatch, SetStateAction, useState } from 'react';

export default function useToggle(
  initialValue: boolean = false,
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] {
  const [value, setValue] = useState(initialValue);
  const toggle = () => setValue(!value);
  return [value, toggle, setValue];
}
