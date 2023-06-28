require('dotenv').config();
const fs = require('fs/promises');
const axios = require('axios');
const flatten = require('flat');

const TAILWIND_PREFIX = 'tw_';

const generateSafeList = async () => {
  try {

    const { data } = await axios.get(`${process.env.API_URL}`, {
      params: {
        fetch: `children:${process.env.API_ROOT_NODE_PATH}`,
      },
    });

    const safeList = new Set();

    const pages = data.items;

    pages.forEach((page) => {

      const pageContent = page.properties.contentGrid.items;

      pageContent.forEach((content) => {

        const flatContent = flatten(content);
        const keys = Object.keys(flatContent);

        keys.forEach((key) => {

          const seperatedKeys = key.split('.');
          const lastKey = seperatedKeys[seperatedKeys.length - 1];
          
          if (lastKey.startsWith(TAILWIND_PREFIX)) {
            const classes = flatContent[key].split(' ');

            classes.forEach((className) => {
              if (className) {
                safeList.add(className);
              }
            });
          }
        });

      });
    });

    await fs.writeFile('./safelist.json', JSON.stringify([...safeList], null, 2));

  } catch (error) {
    console.error('Something went wrong while trying to generate the safe list.');
    console.error(error);
  }
};

generateSafeList();