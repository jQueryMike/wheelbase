/**
 * Property type
 * This is used to determine the nested keys of a long form key
 */
export type Property<T extends string> = T extends `${infer X extends string}_${infer Y extends
  string}_${infer Z extends string}`
  ? [X, Y, Z]
  : never;

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
export type SpacingType = 'spacing';

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
    /** Map size types */
    [key2 in Partial<SizeType>]?: {
      [key3 in ScreenSizes]?: string;
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
 * Line height options
 */
export type LineHeightOption = 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';

/**
 * Letter spacing options
 */
export type LetterSpacingOption = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';

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

/**
 * Grid Column options
 */
export type GridColumnOptions = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Grid Gap options
 */
export type GridGapOptions = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Grid Cols Map
 */
export type GridColumnMap = {
  [key1 in GridColumnOptions]?: {
    [key2 in ScreenSizes]?: string;
  };
};

/**
 * Grid Cols Map
 */
export type GridGapMap = {
  [key1 in GridGapOptions]?: {
    [key2 in ScreenSizes]?: string;
  };
};

/**
 * Tailwing colour prefixes
 */
export type TailwindColourPrefix = 'bg' | 'text' | 'border';

/**
 * Border width option
 */

export type BorderWidthOptions = 'none' | 'thin' | 'regular' | 'bold';

/**
 * Border width Map
 */

export type BorderWidthMap = {
  [key in BorderWidthOptions]?: string;
};

/**
 * Border radius option
 */

export type BorderRadiusOptions = 'none' | 'small' | 'medium' | 'large' | 'extra large' | 'full';

/**
 * Border radius Map
 */

export type BorderRadiusMap = {
  [key in BorderRadiusOptions]?: string;
};

/**
 * Border style option
 */

export type BorderStyleOptions = 'none' | 'solid' | 'dashed' | 'dotted' | 'double';

/**
 * Border style Map
 */

export type BorderStyleMap = {
  [key in BorderStyleOptions]?: string;
};
