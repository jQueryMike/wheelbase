/**
 * Capitalise a string
 * @param str String to capitalise
 * @returns Capitalised string
 */
export function capitalise(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default capitalise;
