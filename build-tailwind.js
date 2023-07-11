require('dotenv').config();
const fs = require('fs/promises');
const axios = require('axios');
const flatten = require('flat');

const TAILWIND_PREFIX = 'tw_';

const generateSafeList = async () => {
  try {
    const pagesData = await axios.get(`${process.env.API_URL}`, {
      headers: { 'Start-Item': process.env.API_ROOT_NODE_GUID },
    });

    const safeList = new Set();
    const pages = pagesData.data.items;

    pages.forEach((page) => {
      const flatContent = flatten(page);
      const keys = Object.keys(flatContent);

      keys.forEach((key) => {
        const separatedKeys = key.split('.');
        const lastKey = separatedKeys[separatedKeys.length - 1];

        if (lastKey.startsWith(TAILWIND_PREFIX)) {
          if (flatContent[key] && typeof flatContent[key] === 'string') {
            const classes = flatContent[key].split(' ');

            classes.forEach((className) => {
              if (className) {
                safeList.add(className);
              }
            });
          }
        }
      });
    });

    await fs.writeFile('./safelist.json', JSON.stringify([...safeList], null, 2));
  } catch (error) {
    console.error('Something went wrong while trying to generate the safe list.');
    console.error(error);
  }
};

generateSafeList();
