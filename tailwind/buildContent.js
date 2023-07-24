const flatten = require('flat');

const EXTENSION = '{js,ts,jsx,tsx,mdx}';
const PAGE_SECTION_CONTENT_TYPES = ['OneColumn', 'TwoColumn'];

const getContentPath = (blockName, variant) => {
  const isPageSection = PAGE_SECTION_CONTENT_TYPES.includes(blockName);
  const path = isPageSection ? `./lib/components/layout/PageSection` : `./lib/components/blocks/${blockName}`;

  return `${path}/variants/${variant}.${EXTENSION}`;
};

const buildContentArray = (pages) => {
  try {
    const content = new Set();
    content.add(`./pages/**/*.${EXTENSION}`);
    content.add(`./lib/components/utility-components/**/*.${EXTENSION}`);

    if (process.env.ENVIRONMENT_NAME === 'local') {
      content.add(`./lib/components/**/*.${EXTENSION}`);
    }

    const usedBlocks = new Set();
    const representedBlocks = new Set();

    pages.forEach((page) => {
      const flatPage = flatten(page);
      const keys = Object.keys(flatPage);

      keys.forEach((key) => {
        const separatedKeys = key.split('.');
        const isThemeVariant = separatedKeys[separatedKeys.length - 1] === 'themeVariant';
        const isThemePage = flatPage.contentType === 'theme' && flatPage.name === 'Theme';

        if (isThemeVariant && (isThemePage || flatPage.contentType !== 'theme')) {
          const theme = flatPage[key.replace('.content.properties.themeVariant', '.content.contentType')];
          const blockName = (theme.charAt(0).toUpperCase() + theme.slice(1)).replace('Theme', '');
          const variant = flatPage[key];

          usedBlocks.add(blockName);

          if (variant) {
            representedBlocks.add(blockName);
            content.add(getContentPath(blockName, variant));
          }
        }
      });
    });

    [...usedBlocks]
      .filter((item) => ![...representedBlocks].includes(item))
      .forEach((item) => {
        content.add(getContentPath(item, 1));
      });

    return [...content];
  } catch (error) {
    console.error('Something went wrong while trying to build the content array.');
    console.error(error);
    return [];
  }
};

module.exports = buildContentArray;
