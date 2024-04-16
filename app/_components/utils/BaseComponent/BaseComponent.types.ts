import { BaseProps } from '@components/types';

export type BaseComponentProps<T extends keyof HTMLElementTagNameMap> = BaseProps<{
  overrides?: any; // TODO: Define method for overrides
  className?: string;
}> & {
  as?: T;
  stylingOptions?: any;
} & React.HTMLProps<HTMLElementTagNameMap[T]>;
