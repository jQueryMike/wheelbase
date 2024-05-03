/**
 * @description Build component classes
 * @param component Component name
 * @param variant Variant name
 * @param overrides Component overrides
 * @returns Component classes
 */
export default function buildClasses(variant: Record<string, string>, overrides: any = {}) {
  return Object.entries(overrides).reduce((acc, [key, value]) => {
    const classes = new Set((acc[key] || '').split(' '));
    classes.add(value as string);
    acc[key] = Array.from(classes).join(' ');
    return acc;
  }, variant ?? {});
}
