/**
 * @description Build component classes
 * @param component Component name
 * @param variant Variant name
 * @param overrides Component overrides
 * @returns Component classes
 */
export default function buildClasses(variant: Record<string, string>, overrides: any = {}) {
  const output = Object.entries(overrides).reduce((acc, [key, value]) => {
    const classesKey = key.split('_')[1];
    if (classesKey) {
      const klasses = (acc[classesKey] || '').split(' ');
      klasses.push(value as string);
      acc[classesKey] = klasses.join(' ');
    }
    return acc;
  }, variant ?? {});

  return output;
}
