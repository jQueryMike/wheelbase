require('dotenv').config();
const fs = require('fs/promises');
const axios = require('axios');
const flatten = require('flat');

const TAILWIND_PREFIX = 'tw_';
const CONF_FILE = './tailwind-conf.json';

// const getGoogleFontsName = (url) => {
//   const replaceURLParts = 'https://fonts.googleapis.com/css2?';
//   const urlParts = new URLSearchParams(url.replace(replaceURLParts, ''));
//   const family = urlParts.getAll('family');

//   return family.map((font) => font.replace('+', / /g).split(':')[0]);
// };

const createTailwindConfigFile = async () => {
  try {
    const confStructure = {
      safelist: [],
      content: [],
      theme: {
        extend: {
          colors: {},
          typography: {},
        },
      },
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
      theme: theme.data?.properties,
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

const generateFontsConfig = () => {};

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

const generateColorPalette = async (theme) => {
  const colors = {
    primary: {
      DEFAULT: theme.primaryDefault,
      light: theme.primaryLight,
      dark: theme.primaryDark,
      contrast: theme.primaryContrast,
    },
    secondary: {
      DEFAULT: theme.secondaryDefault,
      light: theme.secondaryLight,
      dark: theme.secondaryDark,
      contrast: theme.secondaryContrast,
    },
    accent: {
      DEFAULT: theme.accentDefault,
      light: theme.accentLight,
      dark: theme.accentDark,
      contrast: theme.accentContrast,
    },
    heading: {
      DEFAULT: theme.headingDefault,
      light: theme.headingLight,
      dark: theme.headingDark,
    },
    copy: {
      DEFAULT: theme.copyDefault,
      light: theme.copyLight,
      dark: theme.copyDark,
    },
    link: {
      DEFAULT: theme.linkDefault,
      light: theme.linkLight,
      dark: theme.linkDark,
    },
    body: {
      DEFAULT: theme.bodyDefault,
      light: theme.bodyLight,
      dark: theme.bodyDark,
    },
    custom1: {
      DEFAULT: theme.custom1Default,
      constrast: theme.custom1Contrast,
    },
    custom2: {
      DEFAULT: theme.custom2Default,
      constrast: theme.custom2Contrast,
    },
    custom3: {
      DEFAULT: theme.custom3Default,
      constrast: theme.custom3Contrast,
    },
    custom4: {
      DEFAULT: theme.custom4Default,
      constrast: theme.custom4Contrast,
    },
    custom5: {
      DEFAULT: theme.custom5Default,
      constrast: theme.custom5Contrast,
    },
  };

  const tailwindConf = require(CONF_FILE);
  tailwindConf.theme.extend.colors = colors;

  await fs.writeFile(CONF_FILE, JSON.stringify(tailwindConf, null, 2));
};

const generateTypography = async (theme) => {
  const typography = {
    DEFAULT: {
      css: {
        color: theme.copyDefault,
        a: {
          color: theme.linkDefault,
          '&:hover': {
            color: theme.linkLight,
          },
        },
      },
    },
  };

  const tailwindConf = require(CONF_FILE);
  tailwindConf.theme.extend.typography = typography;

  await fs.writeFile(CONF_FILE, JSON.stringify(tailwindConf, null, 2));
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
    // await generateContentPath(data.theme, data.pages);
    generateFontsConfig();
    generateColorPalette(data.theme);
    generateTypography(data.theme);
  } catch (error) {
    console.error('Something went wrong while trying to generate the tailwind config.');
    console.error(error);
  }
};

generateTailwindConfig();
