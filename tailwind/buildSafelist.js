const flatten = require('flat');

const TAILWIND_PREFIX = 'tw_';

const childFields = [
  'content_contentArea_content',
  'content_buttonList_items',
  'content_features_items',
  'content_reviews_items',
];

function getColors(data, bgColors = new Set(), borderColors = new Set(), textColors = new Set()) {
  data.forEach(({ content: { properties } }) => {
    Object.entries(properties).forEach(([key, value]) => {
      if (key.endsWith('_backgroundColor') && value) {
        bgColors.add(`[${value.hex}]/[${value.opacity / 100}]`);
      }
      if (key.endsWith('_borderColor') && value) {
        borderColors.add(`[${value.hex}]/[${value.opacity / 100}]`);
      }
      if (key.endsWith('_color') && value?.id.toLowerCase().startsWith('custom')) {
        textColors.add(`[${value.hex}]/[${value.opacity / 100}]`);
      }
      if (childFields.includes(key)) {
        getColors(value.items, bgColors, textColors);
      }
    });
  });
  return [bgColors, borderColors, textColors];
}

const buildSafelist = async (pages) => {
  try {
    const safelist = new Set();

    pages.forEach((page) => {
      const flatPage = flatten(page);
      const keys = Object.keys(flatPage);

      keys.forEach((key) => {
        const separatedKeys = key.split('.');
        const lastKey = separatedKeys[separatedKeys.length - 1];

        if (lastKey.startsWith(TAILWIND_PREFIX)) {
          if (flatPage[key] && typeof flatPage[key] === 'string') {
            const classes = flatPage[key].split(' ');

            classes.forEach((className) => {
              if (className) {
                safelist.add(className);
              }
            });
          }
        }
      });
    });

    const queries = [
      '2xs',
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
      '2xl',
      '@xs',
      '@sm',
      '@md',
      '@lg',
      '@xl',
      '@2xl',
      '@3xl',
      '@4xl',
      '@5xl',
      '@6xl',
      '@7xl',
    ];
    const colCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    const paddingPrefixes = ['p', 'px', 'py', 'pt', 'pr', 'pb', 'pl'];
    const marginPrefixes = ['m', 'mx', 'my', 'mt', 'mr', 'mb', 'ml'];

    const paddingClasses = [];
    const marginClasses = [];
    for (let v = 0; v < 8; v++) {
      const value = v;
      paddingPrefixes.map((prefix) => paddingClasses.push(`${prefix}-${value}`));
      marginPrefixes.map((prefix) => marginClasses.push(`${prefix}-${value}`));
    }
    // TODO: will need to expand on these and separate into other functions
    const layoutClasses = ['w-1/2', 'col-start-2', 'col-span-2'];
    for (let v = 0; v < 6; v++) {
      const value = v;
      queries.map((query) => layoutClasses.push(`${query}:gap-${value}`));
      queries.map((query) => layoutClasses.push(`${query}:grid-cols-${value}`));
    }
    /**
     * Build up all of the available gradient classes.
     */
    const gradientClasses = [
      'none',
      ...['t', 'b']
        .reduce(
          (prev, curr) => [...prev, ...['l', 'r'].reduce((p, c) => [...p, `${curr}${c}`], [])],
          ['t', 'b', 'l', 'r'],
        )
        .map((x) => `gradient-to-${x}`),
    ].map((x) => `bg-${x}`);

    const colorsData = await (async () => {
      const response = await fetch(
        `${process.env.API_URL}/umbraco/delivery/api/v2/content?fetch=children:${process.env.API_ROOT_NODE_GUID}&filter=contentType:!theme&filter=contentType:!globalConfig`,
      );
      const data = await response.json();
      return getColors(data.items[0]?.properties?.organismGrid?.items || []);
    })();
    const colors = colorsData
      .map((x, i) => {
        switch (i) {
          case 0:
            return Array.from(x).map((y) => `bg-${y}`);
          case 1:
            return Array.from(x).map((y) => `border-${y}`);
          case 2:
            return Array.from(x).map((y) => `text-${y}`);
          default:
            return [];
        }
      })
      .flat();
    return [
      ...layoutClasses,
      ...paddingClasses,
      ...marginClasses,
      ...safelist,
      ...colCounts.map((colCount) => `grid-cols-${colCount}`),
      ...queries.map((size) => colCounts.map((colCount) => `${size}:grid-cols-${colCount}`)).flat(),
      ...colors,
      ...gradientClasses,
      ...["bg-secondary-dark", "border-[#e69138]/[1]", "border-1"]
    ];
  } catch (error) {
    console.error('Something went wrong while trying to build the safe list.');
    console.error(error);
    return [];
  }
};

module.exports = buildSafelist;
