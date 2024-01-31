/**
 * Property type
 * This is used to determine the nested keys of a long form key
 */
export type Property<T extends string> =
  T extends `${infer X extends string}_${infer Y extends string}_${infer Z extends string}` ? [X, Y, Z] : never;

/**
 * Block type
 * Base block type for all blocks
 */
export type Block = {
  /** Block Id */
  id: string;
  /** Block Name */
  name: string;
  /** Block keys */
  [propName: string]: any;
};

// ? Look into dynamic keys for multiple content areas
// type ContentAreaKey<T extends number> = `contentArea${T}`;

/**
 * Block Config type
 */
export type BlockConfig = {
  /** Block Id */
  id: string;
  /** Block Name */
  name: string;
  /** Block Content */
  content?: any;
  /** Block Appearance */
  appearance?: any;
  /** Block Settings */
  settings?: any;
  /** Block overrides */
  overrides?: any;
  /** Block Headings */
  headings?: any;
  /** Block Content Area */
  contentArea?: BlockConfig[];
};

/**
 * Utility type
 */
