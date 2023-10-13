import defaultPalette from '@constants/defaultPalette';
import { flatten } from 'flat';

import convertToRGB from './convertToRGB';

const flatDefaultPalette: any = flatten(defaultPalette);

const buildColorVariables = (colorPalette: any) => {
  const flatPalette: any = flatten(colorPalette);

  const items: [string, string][] = [
    ['primary', 'DEFAULT'],
    ['primary', 'light'],
    ['primary', 'dark'],
    ['primary', 'contrast'],

    ['secondary', 'DEFAULT'],
    ['secondary', 'light'],
    ['secondary', 'dark'],
    ['secondary', 'contrast'],

    ['accent', 'DEFAULT'],
    ['accent', 'light'],
    ['accent', 'dark'],
    ['accent', 'contrast'],

    ['success', 'DEFAULT'],
    ['success', 'contrast'],

    ['error', 'DEFAULT'],
    ['error', 'contrast'],

    ['heading', 'DEFAULT'],
    ['heading', 'light'],
    ['heading', 'dark'],

    ['copy', 'DEFAULT'],
    ['copy', 'light'],
    ['copy', 'dark'],

    ['link', 'DEFAULT'],
    ['link', 'light'],
    ['link', 'dark'],

    ['body', 'DEFAULT'],
    ['body', 'light'],

    ['divider', 'DEFAULT'],

    ['custom1', 'DEFAULT'],
    ['custom1', 'contrast'],

    ['custom2', 'DEFAULT'],
    ['custom2', 'contrast'],

    ['custom3', 'DEFAULT'],
    ['custom3', 'contrast'],

    ['custom4', 'DEFAULT'],
    ['custom4', 'contrast'],

    ['custom5', 'DEFAULT'],
    ['custom5', 'contrast'],
  ];

  const variables = items
    .map(
      (item: [string, string]) =>
        `--${item.join('-').replace('-DEFAULT', '')}:${convertToRGB(
          flatPalette[`${item[0]}.${item[1]}`] || flatDefaultPalette[`${item[0]}.${item[1]}`],
        )};`,
    )
    .join('');

  return `:root{${variables}}`;
};

export default buildColorVariables;
