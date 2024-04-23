async function buildColors() {
  const response = await fetch(
    `${process.env.API_URL}/umbraco/delivery/api/v1/content/item/${process.env.API_ROOT_NODE_PATH}/theme`,
  );
  const { properties: themeColors } = await response.json();
  if (!themeColors) return {};
  const colorMap = Object.entries(themeColors)
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

module.exports = buildColors;