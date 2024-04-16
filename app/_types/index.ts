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

/**
 * Color type
 */
export type Color = {
  /** Color Id, should match a theme value or be custom */
  id: string;
  /** Color hex value */
  hex: string;
  /** Color opacity */
  opacity: number;
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

/**
 * Atomic types
 */
export type AtomicType = 'atom' | 'molecule' | 'organism';

/**
 * Spacing types
 */
export type SpacingType = 'padding' | 'margin';

/**
 * Spacing Positions
 */
export type SpacingPositon = 'top' | 'bottom' | 'left' | 'right';

/**
 * Size types to map to values
 */
export type SizeType = 'none' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';

/**
 * Spacing map
 */
export type SpacingMap = {
  /** Map atomic types */
  [key1 in AtomicType]: {
    /** Map spacing types */
    [key2 in SpacingType]?: {
      /** Map size types */
      [key3 in Partial<SizeType>]?: string;
    };
  };
};

/**
 * Positions within a size
 */
export type Positions = 'top' | 'bottom' | 'left' | 'right';

/**
 * Sizes within a spacing type
 */
export type Size = {
  /** Map over positions top, bottom, left, right */
  [key in Positions]: SizeType;
};

/**
 * Keys for spacing values
 */
export type SpacingKey = `${SpacingType}${Capitalize<SpacingPositon>}`;

/**
 * Spacing config type
 */
export type SpacingConfig = {
  [key in SpacingType]: Size;
};

/**
 * Spacing type for padding and margin
 */
export type Spacing = {
  /** Map over Spacing types */
  [key in SpacingKey]: Size;
};

/**
 * Font sizing for text size
 */
export type FontSize = string;

/**
 * Text types
 */
export type TextType = 'heading' | 'subheading' | 'text';

/**
 * Text types
 */
export type FontSizeOptions = 'Extra Small' | 'Small' | 'Medium' | 'Large' | 'Extra Large';

/**
 * Positions within a size
 */
export type ScreenSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

/**
 * Spacing map
 */
export type FontSizeMap = {
  /** Map atomic types */
  [key1 in TextType]: {
    /** Map spacing types */
    [key2 in FontSizeOptions]: {
      [key3 in ScreenSizes]?: string;
    };
  };
};

/**
 * Font weight types
 */
export type FontWeightType = 'Thin' | 'Extralight' | 'Light' | 'Normal' | 'Medium' | 'Semibold' | 'Bold' | 'Extrabold';

/**
 * Spacing map
 */
export type FontWeightMap = {
  /** Map atomic types */
  [key1 in FontWeightType]?: string;
};
