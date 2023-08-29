const buildFontFamily = (theme) => {
  try {
    const fonts = {};
    const keys = Object.keys(theme);

    keys.forEach((key) => {
      if (key.endsWith('Font')) {
        if (theme[key]) {
          const fontTag = key.replace('Font', '');
          fonts[fontTag] = [`"${theme[key]}"`, `"Inter"`];
        }
      }
    });

    return fonts;
  } catch (error) {
    console.error('Something went wrong while trying to build font family.');
    console.error(error);
    return {};
  }
};

module.exports = buildFontFamily;
