import Block from '@interfaces/Block';
import { UmbracoBlockGridItem } from '@interfaces/Umbraco';
import { v4 as uuidv4 } from 'uuid';

import buildAccordionBlock from './blocks/buildAccordionBlock';
import buildButtonBlock from './blocks/buildButtonBlock';
import buildFeaturesBlock from './blocks/buildFeaturesBlock';
import buildHeadingBlock from './blocks/buildHeadingBlock';
import buildMapBlock from './blocks/buildMapBlock';
import buildSubheadingBlock from './blocks/buildSubheadingBlock';
import buildTelephoneNumberBlock from './blocks/buildTelephoneNumberBlock';
import buildTextContentBlock from './blocks/buildTextContentBlock';

const buildBlocks = async ({
  items,
  globalTheme,
}: {
  items: UmbracoBlockGridItem[];
  globalTheme?: { [propName: string]: any };
}) => {
  const blocks: Block[] = [];

  items.forEach((item) => {
    try {
      const name = item.content.contentType.charAt(0).toUpperCase() + item.content.contentType.slice(1);
      const config = {
        id: item.content?.id || uuidv4(),
        name,
        content: item.content?.properties,
        settings: item.settings?.properties,
        globalTheme,
      };

      if (name === 'Accordion') {
        const block = buildAccordionBlock(config);
        if (block) blocks.push(block);
      }

      if (name === 'Button') {
        const block = buildButtonBlock(config);
        if (block) blocks.push(block);
      }

      if (name === 'Features') {
        const block = buildFeaturesBlock(config);
        if (block) blocks.push(block);
      }

      if (name === 'Heading') {
        const block = buildHeadingBlock(config);
        if (block) blocks.push(block);
      }

      if (name === 'Map') {
        const block = buildMapBlock(config);
        if (block) blocks.push(block);
      }

      if (name === 'Subheading') {
        const block = buildSubheadingBlock(config);
        if (block) blocks.push(block);
      }

      if (name === 'TextContent') {
        const block = buildTextContentBlock(config);
        if (block) blocks.push(block);
      }

      if (name === 'TelephoneNumber') {
        const block = buildTelephoneNumberBlock(config);
        if (block) blocks.push(block);
      }
    } catch (error) {
      console.error(error);
    }
  });

  return blocks;
};

export default buildBlocks;
