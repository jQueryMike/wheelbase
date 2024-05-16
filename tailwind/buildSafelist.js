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

function buildSafelistColors(data) {
  return data
    .map((items) => getCustomClasses(items))
    .reduce(
      (prev, [bgColors, borderColors, textColors, classSet]) => {
        Array.from(bgColors).forEach((x) => prev[0].add(x));
        Array.from(borderColors).forEach((x) => prev[1].add(x));
        Array.from(textColors).forEach((x) => prev[2].add(x));
        Array.from(classSet)
          .flat()
          .forEach((x) => prev[3].add(x));
        return prev;
      },
      [new Set(), new Set(), new Set(), new Set()],
    )
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
}

const buildSafelist = async (pages, globalConfig) => {
  try {
    const safelist = new Set();
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

    const borders = [
      ...buildPossibilities([['rounded'], ['none', 'sm', 'md', 'lg', 'xl', 'full']]),
      ...buildPossibilities([['border'], ['none', 'solid', 'dashed', 'dotted', 'double', '0', '', '2', '4']]),
    ];
    return Array.from(
      new Set([
        ...layoutClasses,
        ...addQueryPrefixes(paddingClasses),
        ...addQueryPrefixes(marginClasses),
        ...safelist,
        ...colCounts.map((colCount) => `grid-cols-${colCount}`),
        ...queries.map((size) => colCounts.map((colCount) => `${size}:grid-cols-${colCount}`)).flat(),
        ...buildSafelistColors([
          ...pages.map((page) => page.properties?.organismGrid?.items || []),
          globalConfig?.header?.items || [],
          globalConfig?.footer?.items || [],
        ]),
        ...gradientClasses,
        ...borders,
        ...['font-medium', 'md:text-base', 'lg:text-xl', 'xl:text-2xl', 'text-md', 'overflow-hidden'],
      ]),
    );
  } catch (error) {
    console.error('Something went wrong while trying to build the safe list.');
    console.error(error);
    return [];
  }
};

export default buildSafelist;
