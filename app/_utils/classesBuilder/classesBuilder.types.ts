export type ClassesProperty = undefined | string | Classes;

export interface Classes {
  [propName: string]: ClassesProperty;
}

export interface ClassesBuilderConfig {
  location: string;
  classes: Classes;
}
