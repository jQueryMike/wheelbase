import { HeadingSize, HeadingTag } from '@components/blocks/Heading';

export type BaseComposition = {
  content?: Record<string, any>;
  appearance?: Record<string, any>;
  settings?: Record<string, any>;
  overrides?: Record<string, any>;
};

/**
 * Available tabs from compositions
 */
type TabKey = 'content' | 'appearance' | 'settings' | 'overrides';

/**
 * Tab type
 */
type Tab = [TabKey, Record<string, unknown>];

/**
 * Composition tab type
 */
type CompositionTab<T extends Tab = any> = T extends [infer Key extends string, infer Value]
  ? {
      [K in Key]: Value;
    }
  : never;

/**
 * Composition type
 */
type Composition<T extends CompositionTab[], U = {}> = T extends [infer F, ...infer R extends CompositionTab[]]
  ? Composition<
      R,
      Omit<U, keyof F> & {
        [K in keyof F]: K extends keyof U ? F[K] | U[K] : F[K];
      }
    >
  : Omit<U, never>;

/**
 * Utiltiy tyle to make type nullable
 */
export type Nullable<T> = T | null;

export type Color = {
  id: string;
  hex: string;
  opacity: number;
};

/**
 * Utility type tp dynamically generate css types that use top right bottom and left values
 */
type TopRightBottomLeft<T extends string, V> = {
  [K in 'Top' | 'Right' | 'Bottom' | 'Left' as `${T}${K & string}`]: V;
};

// type TLBR = "Top" | "Left" | "Bottom" | "Right";
// type CustomTLBRM = {
//     [K in TLBR]: `${K & string}Custom`;
// }[TLBR]
// type CombinedTLBR = TLBR | CustomTLBRM;

type WhiteSpace = 'none' | 'small' | 'medium' | 'large' | 'custom';

/**
 * Padding type
 * TODO: Need to standardise the types to match with the options as can be shared with margin
 */
export type Padding = TopRightBottomLeft<'padding', WhiteSpace>;

/**
 * Margin type
 */
export type Margin = TopRightBottomLeft<'margin', WhiteSpace>;

/**
 * Heading Composition
 */
export type HeadingComposition = Composition<
  [
    CompositionTab<
      [
        'content',
        {
          text: string;
        },
      ]
    >,
    CompositionTab<
      [
        'appearance',
        {
          color: Color;
          size: HeadingSize;
        },
      ]
    >,
    CompositionTab<
      [
        'settings',
        {
          tag: HeadingTag;
        },
      ]
    >,
    CompositionTab<
      [
        'overrides',
        {
          root: string;
          heading: string;
        },
      ]
    >,
  ]
>;

// Subheading Composition
export type SubheadingComposition = Composition<
  [
    CompositionTab<
      [
        'content',
        {
          text: string;
        },
      ]
    >,
    CompositionTab<
      [
        'appearance',
        {
          color: Color;
        },
      ]
    >,
    CompositionTab<
      [
        'overrides',
        {
          root: string;
          subheading: string;
        },
      ]
    >,
  ]
>;

export type HeadingsComposition = {
  heading: HeadingComposition;
  subheading: SubheadingComposition;
};

// Umbraco Image Content Type
// TODO: Needs some work
export type ImageContent = {
  id: string;
  name: string;
  mediaType: 'Image';
  url: string;
  extension: 'png';
  width: number;
  height: number;
  bytes: number;
  alternativeText: string;
  // TODO: Properly type these remaining properties
  properties: {};
  focalPoint: null;
  crops: [
    {
      alias: 'Square';
      width: 400;
      height: 400;
      coordinates: null;
    },
  ];
};

export type ImageComposition = Composition<
  [
    CompositionTab<
      [
        'content',
        {
          image: ImageContent[];
          altText: string;
        },
      ]
    >,
    CompositionTab<
      [
        'appearance',
        {
          fill: boolean;
          width: string;
          height: string;
          applyAspectRatio: boolean;
        },
      ]
    >,
    CompositionTab<
      [
        'settings',
        {
          priority: boolean;
          quality: number;
          loading: 'lazy' | 'eager';
        },
      ]
    >,
    CompositionTab<
      [
        'overrides',
        {
          root: string;
          imageElement: string;
        },
      ]
    >,
  ]
>;
