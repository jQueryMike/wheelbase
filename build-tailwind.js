require('dotenv').config();
const fs = require('fs/promises');
const axios = require('axios');
const flatten = require('flat');

const TAILWIND_PREFIX = 'tw_';
const CONF_FILE = './tailwind-conf.json';

const createTailwindConfigFile = async () => {
  try {
    const confStructure = {
      safelist: [],
      content: [],
    };

    await fs.writeFile(CONF_FILE, JSON.stringify(confStructure, null, 2));
  } catch (error) {
    console.error('Something went wrong while trying to create the tailwind config file.');
    console.error(error);
  }
};

const fetchPagesData = async () => {
  try {
    const [homeData, pagesData, theme] = await Promise.all([
      axios.get(`${process.env.API_URL}/item/${process.env.API_ROOT_NODE_GUID}`),
      axios.get(`${process.env.API_URL}`, {
        headers: { 'Start-Item': process.env.API_ROOT_NODE_GUID },
      }),
      axios.get(`${process.env.API_URL}/item/${process.env.API_ROOT_NODE_PATH}/theme`),
    ]);

    return {
      themes: theme.data?.properties,
      pages: [...pagesData.data.items, homeData.data],
    };
  } catch (error) {
    console.error('Something went wrong while trying to fetch the pages data.');
    console.error(error);
    return null;
  }
};

const generateGridColsSafelist = () => {
  const screenSizes = ['sm', 'md', 'lg', 'xl', '2xl'];
  const colCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return screenSizes.map((size) => colCounts.map((colCount) => `${size}:grid-cols-${colCount}`)).flat();
};

const generateFontsConfig = async (theme) => {
  try {
    const fonts = {};
    const keys = Object.keys(theme);

    keys.forEach((key) => {
      if (key.endsWith('Font')) {
        const fontTag = key.replace('Font', '');
        const fontName = theme[key].replace(' ', '+');
        fonts[fontTag] = [fontName];
      }
    });

    const tailwindConf = require(CONF_FILE);
    tailwindConf.fontFamily = fonts;

    await fs.writeFile(CONF_FILE, JSON.stringify(tailwindConf, null, 2));
  } catch (error) {
    console.error('Something went wrong while trying to generate fonts');
    console.error(error);
  }
};

const generateSafeList = async (pages) => {
  try {
    const safeList = new Set();

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
                safeList.add(className);
              }
            });
          }
        }
      });
    });

    const tailwindConf = require(CONF_FILE);
    tailwindConf.safelist = [...generateGridColsSafelist(), ...safeList];

    await fs.writeFile(CONF_FILE, JSON.stringify(tailwindConf, null, 2));
  } catch (error) {
    console.error('Something went wrong while trying to generate the safe list.');
    console.error(error);
  }
};

// const generateContentPath = async (theme, pages) => {
//   try {
//     //
//   } catch (error) {
//     console.error('Something went wrong while trying to generate the tailwind content path.');
//     console.error(error);
//   }
// };

const generateTailwindConfig = async () => {
  try {
    const data = await fetchPagesData();
    await createTailwindConfigFile();
    await generateSafeList(data.pages);
    await generateFontsConfig(data.themes);
    // await generateContentPath(data.theme, data.pages);
  } catch (error) {
    console.error('Something went wrong while trying to generate the tailwind config.');
    console.error(error);
  }
};

generateTailwindConfig();
