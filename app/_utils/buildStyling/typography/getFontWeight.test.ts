import { FontWeightType } from '@types';
import { getFontWeight } from './getFontWeight';

type FontSizeCase = [string, FontWeightType, string];

const cases: FontSizeCase[] = [
  ['test heading with thin font weight', 'Thin', 'font-thin'],
  ['test heading with extralight font weight', 'Extralight', 'font-extralight'],
  ['test heading with light font weight', 'Light', 'font-light'],
  ['test heading with normal font weight', 'Normal', 'font-normal'],
  ['test heading with medium font weight', 'Medium', 'font-medium'],
  ['test heading with semibold font weight', 'Semibold', 'font-semibold'],
  ['test heading with bold font weight', 'Bold', 'font-bold'],
  ['test heading with extrabold font weight', 'Extrabold', 'font-extrabold'],
];

describe('getFontWeight test suite', () => {
  it.each(cases)('%s', (_, fontWeight, expected) => {
    expect(getFontWeight(fontWeight)).toBe(expected);
  });
});
