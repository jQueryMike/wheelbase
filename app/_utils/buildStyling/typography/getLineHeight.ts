import { LineHeightOption } from '@types';
import mappings from '../mappings.json';

/**
 * Get line height
 * @param lineHeight line height options
 * @returns line height classes
 */
export function getLineHeight(lineHeight: Capitalize<LineHeightOption> = 'Normal'): string {
  return mappings.lineHeight[lineHeight];
}
