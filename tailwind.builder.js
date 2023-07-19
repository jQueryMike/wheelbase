require('dotenv').config();

const fs = require('fs/promises');

const fetchData = require('./tailwind/fetchData');

const buildContent = require('./tailwind/buildContent');
const buildSafelist = require('./tailwind/buildSafelist');

const buildColors = require('./tailwind/buildColors');
const buildFontFamily = require('./tailwind/buildFontFamily');
const buildTypography = require('./tailwind/buildTypography');

const generateTailwindConfig = async () => {
  try {
    const { pages, theme } = await fetchData();

    const config = {
      content: buildContent(pages),
      safelist: buildSafelist(pages),
      theme: {
        extend: {
          colors: buildColors(theme),
          fontFamily: buildFontFamily(theme),
          typography: buildTypography(theme),
        },
      },
    };

    await fs.writeFile('./tailwind.config.json', JSON.stringify(config, null, 2));
  } catch (error) {
    console.error('Something went wrong while trying to generate the tailwind config.');
    console.error(error);
  }
};

generateTailwindConfig();
