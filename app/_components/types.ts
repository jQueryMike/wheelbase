import { ComponentType } from 'react';

export type Comps<T, U = undefined> = {
  [key in keyof (U extends keyof T ? Omit<T, U> : T)]: ComponentType<any>;
};

export type VARIES<T, U = undefined> = {
  [key in keyof (U extends keyof T ? Omit<T, U> : T)]: (variant: string) => Promise<any>;
};
