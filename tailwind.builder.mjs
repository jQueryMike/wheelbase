/* eslint-disable import/extensions */
import dotenv from 'dotenv';
import { writeFile } from 'fs/promises';

import buildColors from './tailwind/buildColors.js';
import buildContainer from './tailwind/buildContainer.js';
import buildContent from './tailwind/buildContent.js';
import buildFontFamily from './tailwind/buildFontFamily.js';
import buildSafelist from './tailwind/buildSafelist.js';
import buildScreens from './tailwind/buildScreens.js';
import buildTypography from './tailwind/buildTypography.js';
import fetchData from './tailwind/fetchData.js';

dotenv.config();

const generateTailwindConfig = async () => {
  try {
    const { pages, theme, globalConfig } = await fetchData();

    const colors = await buildColors(theme);
    const safelist = await buildSafelist(pages, globalConfig);

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
        fontSize: {
          xs: '0.75rem',
          sm: '0.875rem',
          base: '1rem',
          lg: '1.125rem',
          xl: '1.25rem',
          '2xl': '1.5rem',
          '3xl': '1.875rem',
          '4xl': '2.25rem',
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
