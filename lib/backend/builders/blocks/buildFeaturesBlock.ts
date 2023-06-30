import { FeaturesProps } from '@components/blocks/Features';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildBlocks from '../buildBlocks';
import buildTheme from '../buildTheme';
import buildFeaturesBlockItems from './buildFeaturesBlockItems';
import buildHeadingBlock from './buildHeadingBlock';

const buildFeaturesBlock = ({ id, name, content, settings }: BlockBuilderConfig): FeaturesProps | undefined => {
  try {
    const features: Block & FeaturesProps = { id, name };

    const themeVariant = content?.theme[0]?.name.split(' ').at(-1) || '1';
    const baseClasses = require(`/lib/components/blocks/Features/themes/${themeVariant}/features.classes`).default;
    features.classes = buildTheme({
      classes: baseClasses,
      gridColsOverrides: [{ className: 'itemsContainer', config: content }],
      overrides: settings,
    });

    const heading = content?.heading?.items[0];
    if (heading) {
      features.heading = buildHeadingBlock({
        id: heading.id,
        name: 'Heading',
        content: heading.content.properties,
        settings: heading.settings.properties,
      });
    }

    const subheading = content?.subheading?.items[0];
    if (subheading) {
      features.subheading = buildHeadingBlock({
        id: subheading.id,
        name: 'Heading',
        content: subheading.content.properties,
        settings: subheading.settings.properties,
      });
    }

    features.items = buildFeaturesBlockItems(content?.items.items, themeVariant) || [];
    features.startContent = buildBlocks(content?.startContent.items) || [];
    features.endContent = buildBlocks(content?.endContent?.items) || [];

    return features;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildFeaturesBlock;
