import { ComponentType } from 'react';

export type Comps<T, U = undefined> = {
  [key in keyof (U extends keyof T ? Omit<T, U> : T)]: ComponentType<any>;
};

export type VARIES<T, U = undefined> = {
  [key in keyof (U extends keyof T ? Omit<T, U> : T)]: (variant: string) => Promise<any>;
};

export type Spacing = {
  paddingTop: string;
  paddingBottom: string;
  paddingLeft: string;
  paddingRight: string;
  marginTop: string;
  marginBottom: string;
  marginLeft: string;
  marginRight: string;
};

export type BaseProps<T = {}> = T & {
  spacing: Spacing;
  fontSize: string;
};
