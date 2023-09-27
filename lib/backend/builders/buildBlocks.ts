import Block from '@interfaces/Block';
import { UmbracoBlockGridItem } from '@interfaces/Umbraco';
import { v4 as uuidv4 } from 'uuid';

import buildAccordionBlock from './blocks/buildAccordionBlock';
import buildAddressBlock from './blocks/buildAddressBlock';
import buildBlockquoteBlock from './blocks/buildBlockquoteBlock';
import buildButtonBlock from './blocks/buildButtonBlock';
import buildButtonListBlock from './blocks/buildButtonListBlock';
import buildContactDetailsBlock from './blocks/buildContactDetailsBlock';
import buildContactFormBlock from './blocks/buildContactFormBlock';
import buildFeaturesBlock from './blocks/buildFeaturesBlock';
import buildHeadingBlock from './blocks/buildHeadingBlock';
import buildHeadingsBlock from './blocks/buildHeadingsBlock';
import buildHeroBlock from './blocks/buildHeroBlock';
import buildImageBlock from './blocks/buildImageBlock';
import buildImageWithContentBlock from './blocks/buildImageWithContentBlock';
import buildLinkListBlock from './blocks/buildLinkListBlock';
import buildMapBlock from './blocks/buildMapBlock';
import buildOpeningTimesBlock from './blocks/buildOpeningTimesBlock';
import buildRegInputBlock from './blocks/buildRegInputBlock';
import buildSubheadingBlock from './blocks/buildSubheadingBlock';
import buildTextContentBlock from './blocks/buildTextContentBlock';

const buildBlocks = async ({
  items,
  globalTheme,
  globalConfig,
}: {
  items: UmbracoBlockGridItem[];
  globalTheme?: { [propName: string]: any };
  globalConfig?: any;
}) => {
  const blocks: Block[] = [];

  items.forEach((item) => {
    try {
      const name = (item.content.contentType.charAt(0).toUpperCase() + item.content.contentType.slice(1)).replaceAll(
        'Block',
        '',
      );
      const config = {
        id: item.content?.id || uuidv4(),
        name,
        content: item.content?.properties,
        settings: item.settings?.properties,
        globalTheme,
        globalConfig,
      };

      if (name === 'Address') {
        const block = buildAddressBlock(config);
        if (block) blocks.push(block);
      }

      if (name === 'Accordion') {
        const block = buildAccordionBlock(config);
        if (block) blocks.push(block);
      }

      if (name === 'Blockquote') {
        const block = buildBlockquoteBlock(config);
        if (block) blocks.push(block);
      }

      if (name === 'Button') {
        const block = buildButtonBlock(config);
        if (block) blocks.push(block);
      }

      if (name === 'ButtonList') {
        const block = buildButtonListBlock(config);
        if (block) blocks.push(block);
      }

      if (name === 'ContactDetails') {
        const block = buildContactDetailsBlock(config);
        if (block) blocks.push(block);
      }

      if (name === 'ContactForm') {
        const block = buildContactFormBlock(config);
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

      if (name === 'Headings') {
        const block = buildHeadingsBlock(config);
        if (block) blocks.push(block);
      }

      if (name === 'Hero') {
        const block = buildHeroBlock(config);
        if (block) blocks.push(block);
      }

      if (name === 'Image') {
        const block = buildImageBlock(config);
        if (block) blocks.push(block);
      }

      if (name === 'ImageWithContent') {
        const block = buildImageWithContentBlock(config);
        if (block) blocks.push(block);
      }

      if (name === 'LinkList') {
        const block = buildLinkListBlock(config);
        if (block) blocks.push(block);
      }

      if (name === 'Map') {
        const block = buildMapBlock(config);
        if (block) blocks.push(block);
      }

      if (name === 'OpeningTimes') {
        const block = buildOpeningTimesBlock(config);
        if (block) blocks.push(block);
      }

      if (name === 'RegInput') {
        const block = buildRegInputBlock(config);
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
    } catch (error) {
      console.error(error);
    }
  });

  return blocks;
};

export default buildBlocks;
