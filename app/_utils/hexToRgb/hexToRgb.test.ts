import { HEX, hexToRgb, rgbString } from './hexToRgb';

describe('hexToRgb', () => {
  it.each([
    ['should convert #ffffff hex to rgb', '#ffffff', { r: 255, g: 255, b: 255 }, '255 255 255'],
    ['should convert #000000 hex to rgb', '#000000', { r: 0, g: 0, b: 0 }, '0 0 0'],
  ])('%s', (_, input, expectedRGB, expectedStr) => {
    expect(hexToRgb(input as HEX)).toEqual(expectedRGB);
    expect(rgbString(expectedRGB)).toEqual(expectedStr);
  });
});
