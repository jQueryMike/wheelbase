async function buildColors(theme) {
  if (!theme) return {};
  const colorMap = Object.entries(theme)
    .filter(([, value]) => value)
    .reduce((prev, [key, value]) => {
      const output = { ...prev };
      // eslint-disable-next-line prefer-const
      let [variant, suffix] = key
        .replace(/([A-Z])/g, ',$1')
        .toLowerCase()
        .split(',');
      suffix = suffix === 'default' ? suffix.toUpperCase() : suffix;
      if (!output[variant]) {
        output[variant] = {
          [suffix]: value,
        };
      } else {
        output[variant][suffix] = value;
      }
      return output;
    }, {});
  return colorMap;
}

export default buildColors;
