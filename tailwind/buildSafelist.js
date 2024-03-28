const flatten = require('flat');

const TAILWIND_PREFIX = 'tw_';

const buildSafelist = (pages) => {
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

    const paddingPrefixes = ["p", "px", "py", "pt", "pr", "pb", "pl"];
    const marginPrefixes = ["m", "mx", "my", "mt", "mr", "mb", "ml"];

    const paddingClasses = [];
    const marginClasses = [];
    for (let v = 0; v < 8; v++) {
      const value = v;
      paddingPrefixes.map(prefix => paddingClasses.push(`${prefix}-${value}`))
      marginPrefixes.map(prefix => marginClasses.push(`${prefix}-${value}`))
    }

    return [
      ...paddingClasses,
      ...marginClasses,
      ...safelist,
      ...colCounts.map((colCount) => `grid-cols-${colCount}`),
      ...queries.map((size) => colCounts.map((colCount) => `${size}:grid-cols-${colCount}`)).flat(),
    ];
  } catch (error) {
    console.error('Something went wrong while trying to build the safe list.');
    console.error(error);
    return [];
  }
};

module.exports = buildSafelist;
