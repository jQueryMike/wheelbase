import { LetterSpacingOption } from '@types';
import mappings from '../mappings.json';

/**
 * Get letter spacing
 * @param letterSpacing letter spacing options
 * @returns letter spacing classes
 */
export function getLetterSpacing(letterSpacing: Capitalize<LetterSpacingOption> = 'Normal'): string {
  return mappings.letterSpacing[letterSpacing];
}
