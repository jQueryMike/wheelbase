import getStylingClasses from './getStylingClasses.js';

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
      if (/(_content|_items)$/.test(key) && value) {
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
      (prev, [bgColors, borderColors, textColors, classSet, maxWidth]) => {
        Array.from(bgColors).forEach((x) => prev[0].add(x));
        Array.from(borderColors).forEach((x) => prev[1].add(x));
        Array.from(textColors).forEach((x) => prev[2].add(x));
        Array.from(classSet)
          .flat()
          .forEach((x) => prev[3].add(x));
        Array.from(maxWidth).forEach((x) => prev[4].add(x));
        return prev;
      },
      [new Set(), new Set(), new Set(), new Set(), new Set()],
    )
    .map((x, i) => {
      switch (i) {
        case 0:
          return Array.from(x).map((y) => `bg-${y}`);
        case 1:
          return Array.from(x).map((y) => `border-${y}`);
        case 2:
          return Array.from(x).map((y) => `text-${y}`);
        case 3:
          return Array.from(x).flat();
        case 4:
          return Array.from(x);
        default:
          return Array.from(x).flat();
      }
    })
    .flat();
}

const stylingClasses = getStylingClasses();

const buildSafelist = async (pages, globalConfig) => {
  try {
    const gradientClasses = [
      'none',
      ...['t', 'b']
        .reduce(
          (prev, curr) => [...prev, ...['l', 'r'].reduce((p, c) => [...p, `${curr}${c}`], [])],
          ['t', 'b', 'l', 'r'],
        )
        .map((x) => `gradient-to-${x}`),
    ].map((x) => `bg-${x}`);
    return Array.from(
      new Set([
        ...stylingClasses,
        ...buildSafelistColors([
          ...pages.map((page) => page.properties?.organismGrid?.items || []),
          globalConfig?.header?.items || [],
          globalConfig?.footer?.items || [],
          globalConfig?.companyInfoItems?.items || [],
        ]),
        ...gradientClasses,
      ]),
    );
  } catch (error) {
    console.error('Something went wrong while trying to build the safe list.');
    console.error(error);
    return [];
  }
};

export default buildSafelist;
