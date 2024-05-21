/* eslint-disable import/extensions */
import { writeFile } from 'fs/promises';

import dotenv from 'dotenv';
import fetchData from './tailwind/fetchData.js';

import buildContent from './tailwind/buildContent.js';
import buildSafelist from './tailwind/buildSafelist.js';

import buildContainer from './tailwind/buildContainer.js';

import buildColors from './tailwind/buildColors.js';
import buildFontFamily from './tailwind/buildFontFamily.js';
import buildScreens from './tailwind/buildScreens.js';
import buildTypography from './tailwind/buildTypography.js';

dotenv.config()

const generateTailwindConfig = async () => {
  try {
    const { pages, theme, globalConfig } = await fetchData();

    const colors = await buildColors(theme);
    const safelist = await buildSafelist(pages, globalConfig)

    // console.log(safelist)

    const config = {
      content: buildContent(pages),
      safelist,
      theme: {
        container: buildContainer(),
        extend: {
          screens: buildScreens(),
          fontFamily: buildFontFamily(theme),
          typography: buildTypography(colors),
          colors,
        },
      },
    };


    await writeFile(
      process.env.ENVIRONMENT_NAME === 'local' ? './tailwind.config.local.json' : './tailwind.config.json',
      JSON.stringify(config, null, 2),
    );
  } catch (error) {
    console.error('Something went wrong while trying to generate the tailwind config.');
    console.error(error);
  }
};

generateTailwindConfig();
