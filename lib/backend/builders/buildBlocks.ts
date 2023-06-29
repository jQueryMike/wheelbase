import Block from '@interfaces/Block';
import { UmbracoBlockGridItem } from '@interfaces/Umbraco';

const buildBlocks = (items: UmbracoBlockGridItem[]) => {
  const blocks: Block[] = [];

  items.forEach((item) => {
    try {
      const name = item.content.contentType.charAt(0).toUpperCase() + item.content.contentType.slice(1);
      const builder = require(`./blocks/build${name}Block`).default;
      const block = builder(name, item);
      if (block) blocks.push(block);
    } catch (error) {
      console.error(error);
    }
  });

  return blocks;
};

export default buildBlocks;
