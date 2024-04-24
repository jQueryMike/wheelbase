import { LineHeightOption } from '@types';

const lineHeightMapping: {
  [key in Capitalize<LineHeightOption>]: string;
} = {
  None: 'leading-none',
  Tight: 'leading-tight',
  Snug: 'leading-snug',
  Normal: 'leading-normal',
  Relaxed: 'leading-relaxed',
  Loose: 'leading-loose',
};

/**
 * Get line height
 * @param lineHeight line height options
 * @returns line height classes
 */
export function getLineHeight(lineHeight: Capitalize<LineHeightOption> = 'Normal'): string {
  return lineHeightMapping[lineHeight];
}
