require('dotenv').config();

const fs = require('fs/promises');

const fetchData = require('./tailwind/fetchData');

const buildContent = require('./tailwind/buildContent');
const buildSafelist = require('./tailwind/buildSafelist');

const buildContainer = require('./tailwind/buildContainer');

const buildColors = require('./tailwind/buildColors');
const buildFontFamily = require('./tailwind/buildFontFamily');
const buildScreens = require('./tailwind/buildScreens');
const buildTypography = require('./tailwind/buildTypography');

const generateTailwindConfig = async () => {
  try {
    const { pages, theme } = await fetchData();

    const colors = buildColors(theme);

    const config = {
      content: buildContent(pages),
      safelist: buildSafelist(pages),
      theme: {
        container: buildContainer(),
        extend: {
          screens: buildScreens(),
          colors,
          fontFamily: buildFontFamily(theme),
          typography: buildTypography(colors),
        },
      },
    };

    await fs.writeFile(
      process.env.ENVIRONMENT_NAME === 'local' ? './tailwind.config.local.json' : './tailwind.config.json',
      JSON.stringify(config, null, 2),
    );
  } catch (error) {
    console.error('Something went wrong while trying to generate the tailwind config.');
    console.error(error);
  }
};

generateTailwindConfig();
