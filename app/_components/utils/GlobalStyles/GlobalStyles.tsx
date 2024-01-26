import getGlobalTheme from '@utils/getGlobalTheme/getGlobalTheme';

function buildVarName(key: string) {
  return `--${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
}

const HexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

function hexToRgb(hex: string) {
  const result = HexRegex.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function hexToRgbString(hex: string) {
  const rgb = hexToRgb(hex);
  return rgb
    ? `
  ${rgb.r} ${rgb.g} ${rgb.b}`
    : null;
}

async function buildGlobalTheme(): Promise<string> {
  const globalTheme = await getGlobalTheme();
  return `:root {${Object.entries(globalTheme.properties)
    .filter(([, value]) => value != null)
    .map(
      ([key, value]) =>
        `${buildVarName(key)}: ${HexRegex.test(value as string) ? hexToRgbString(value as string) : value};`,
    )
    .join('')}}`;
}

export const preload = () => {
  getGlobalTheme();
};

const GlobalStyles = async () => {
  const theme = await buildGlobalTheme();
  return <style>{theme}</style>;
};

export default GlobalStyles;
