import { FontSizeOptions, TextType } from '@types';
import { getFontSize } from './getFontSize';

type FontSizeCase = [string, TextType, FontSizeOptions, string];

const cases: FontSizeCase[] = [
  ['test heading with extra small font size', 'heading', 'Extra Small', 'md:text-base lg:text-lg'],
  ['test heading with small font size', 'heading', 'Small', 'md:text-xl lg:text-[22px] xl:text-2xl'],
  ['test heading with medium font size', 'heading', 'Medium', 'md:text-3xl lg:text-[34px] xl:text-4xl'],
  ['test heading with large font size', 'heading', 'Large', 'md:text-4xl lg:text-[40px] xl:text-[44px]'],
  ['test heading with extra large font size', 'heading', 'Extra Large', 'md:text-[40px] lg:text-[46px] xl:text-[56px]'],
  ['test subheading with extra small font size', 'subheading', 'Extra Small', 'md:text-sm lg:text-base'],
  ['test subheading with small font size', 'subheading', 'Small', 'md:text-base lg:text-lg xl:text-xl'],
  ['test subheading with medium font size', 'subheading', 'Medium', 'md:text-base lg:text-xl xl:text-2xl'],
  ['test subheading with large font size', 'subheading', 'Large', 'md:text-3xl lg:text-[34px] xl:text-4xl'],
  [
    'test subheading with extra large font size',
    'subheading',
    'Extra Large',
    'md:text-4xl lg:text-[40px] xl:text-[44px]',
  ],
  ['test text with extra small font size', 'text', 'Extra Small', 'md:text-sm lg:text-base'],
  ['test text with small font size', 'text', 'Small', 'md:text-base lg:text-lg xl:text-xl'],
  ['test text with medium font size', 'text', 'Medium', 'md:text-base lg:text-xl xl:text-2xl'],
  ['test text with large font size', 'text', 'Large', 'md:text-3xl lg:text-[34px] xl:text-4xl'],
  ['test text with extra large font size', 'text', 'Extra Large', 'md:text-4xl lg:text-[40px] xl:text-[44px]'],
];

describe('getFontSize test suite', () => {
  it.each(cases)('%s', (_, textType, textSize, expected) => {
    expect(getFontSize(textSize, textType)).toBe(expected);
  });
});
