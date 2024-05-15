const flatten = require('flat');

const TAILWIND_PREFIX = 'tw_';

const childFields = [
  'content_contentArea_content',
  'content_buttonList_items',
  'content_features_items',
  'content_reviews_items',
];

function buildPossibilities(data, delimiter = '-') {
  return data.reduceRight((prev, curr) => {
    if (!prev.length) return curr;
    return curr.reduce((p, c) => [...p, ...prev.map((x) => (x ? [c, x].join(delimiter) : c))], []);
  }, []);
}

function updateColourSet(value, dataSet) {
  if (!value) return;
  if (!value.id || value.id.toLowerCase().startsWith('custom')) {
    dataSet.add(`[${value.hex}]/[${value.opacity / 100}]`);
  } else {
    const [variant, suffix] = value?.id?.split('.') ?? [];
    if (!variant || !suffix) return;
    dataSet.add(`${variant}${suffix.toLowerCase() === 'default' ? '' : `-${suffix.toLowerCase()}`}`);
  }
}

function getCustomClasses(
  data,
  bgColors = new Set(),
  borderColors = new Set(),
  textColors = new Set(),
  classSet = new Set(),
  maxWidth = new Set(),
) {
  data.forEach(({ content: { properties } }) => {
    Object.entries(properties).forEach(([key, value]) => {
      if (key.endsWith('_backgroundColor') && value) {
        updateColourSet(value, bgColors);
      }
      if (key.endsWith('_border') && value?.borderColor) {
        updateColourSet(value.borderColor, borderColors);
      }
      if (key.endsWith('_color') || key.endsWith('_secondaryColor')) {
        updateColourSet(value, textColors);
      }
      if (key.startsWith('overrides') && value) {
        classSet.add(value.split(' '));
      }
      if (key.endsWith('_maxWidth') && value) {
        maxWidth.add(`max-w-[${value}px]`);
      }
      if (childFields.includes(key) && value) {
        getCustomClasses(value?.items, bgColors, borderColors, textColors, classSet, maxWidth);
      }
    });
  });
  return [bgColors, borderColors, textColors, classSet, maxWidth];
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

    const addQueryPrefixes = (classes) => {
      const prefixed = classes.map((cssClass) => queries.map((query) => `${query}:${cssClass}`));
      return [...classes, ...prefixed.flat(1)];
    };

    for (let v = 0; v < 21; v++) {
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

    const customClasses = await (async () => {
      const response = await fetch(
        `${process.env.API_URL}/umbraco/delivery/api/v1/content/item/${process.env.API_ROOT_NODE_PATH}/home`,
      );
      const data = await response.json();
      return getCustomClasses(data.properties?.organismGrid?.items || []);
    })();
    const colors = customClasses
      .map((x, i) => {
        switch (i) {
          case 0:
            return Array.from(x).map((y) => `bg-${y}`);
          case 1:
            return Array.from(x).map((y) => `border-${y}`);
          case 2:
            return Array.from(x).map((y) => `text-${y}`);
          default:
            return Array.from(x).flat();
        }
      })
      .flat();

    const borders = [
      ...buildPossibilities([['rounded'], ['none', 'sm', 'md', 'lg', 'xl', 'full']]),
      ...buildPossibilities([['border'], ['none', 'solid', 'dashed', 'dotted', 'double', '0', '', '2', '4']]),
    ];
    return [
      ...layoutClasses,
      ...addQueryPrefixes(paddingClasses),
      ...addQueryPrefixes(marginClasses),
      ...safelist,
      ...colCounts.map((colCount) => `grid-cols-${colCount}`),
      ...queries.map((size) => colCounts.map((colCount) => `${size}:grid-cols-${colCount}`)).flat(),
      ...colors,
      ...gradientClasses,
      ...borders,
      ...['font-medium', 'md:text-base', 'lg:text-xl', 'xl:text-2xl', 'text-md', 'overflow-hidden'],
    ];
  } catch (error) {
    console.error('Something went wrong while trying to build the safe list.');
    console.error(error);
    return [];
  }
};

module.exports = buildSafelist;
