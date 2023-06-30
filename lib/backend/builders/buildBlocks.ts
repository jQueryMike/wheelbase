import Block from '@interfaces/Block';
import { UmbracoBlockGridItem } from '@interfaces/Umbraco';
import { v4 as uuidv4 } from 'uuid';

const buildBlocks = (items: UmbracoBlockGridItem[]) => {
  const blocks: Block[] = [];

  items.forEach((item) => {
    try {
      const name = item.content.contentType.charAt(0).toUpperCase() + item.content.contentType.slice(1);
      const builder = require(`./blocks/build${name}Block`).default;
      const block = builder({
        id: item.content?.id || uuidv4(),
        name,
        content: item.content?.properties,
        settings: item.settings?.properties,
      });
      if (block) blocks.push(block);
    } catch (error) {
      console.error(error);
    }
  });

  return blocks;
};

export default buildBlocks;
