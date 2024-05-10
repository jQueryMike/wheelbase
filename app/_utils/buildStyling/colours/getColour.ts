import { Color, TailwindColourPrefix } from '@types';

export const getColour = (color: Color, prefix: TailwindColourPrefix = 'bg'): string => {
  if (!color?.id || color.id.toLowerCase().startsWith('custom')) {
    /* eslint-disable-next-line no-unsafe-optional-chaining */
    return `${prefix}-[${color?.hex}]/[${color?.opacity / 100}]`;
  }
  const [key, suffix] = color.id.split(`.`);
  return `${prefix}-${suffix === `default` ? key : [key, suffix].join('-')}`;
};
