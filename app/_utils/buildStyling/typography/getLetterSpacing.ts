import { LetterSpacingOption } from '@types';

const letterSpacingMapping: {
  [Key in Capitalize<LetterSpacingOption>]: string;
} = {
  Tighter: 'tracking-tighter',
  Tight: 'tracking-tight',
  Normal: 'tracking-normal',
  Wide: 'tracking-wide',
  Wider: 'tracking-wider',
  Widest: 'tracking-widest',
};

/**
 * Get letter spacing
 * @param letterSpacing letter spacing options
 * @returns letter spacing classes
 */
export function getLetterSpacing(letterSpacing: Capitalize<LetterSpacingOption> = 'Normal'): string {
  return letterSpacingMapping[letterSpacing];
}
