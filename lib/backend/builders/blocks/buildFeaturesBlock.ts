import { FeaturesProps } from '@components/blocks/Features';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildBlocks from '../buildBlocks';
import buildTheme from '../buildTheme';
import buildFeaturesBlockItems from './buildFeaturesBlockItems';
import buildHeadingBlock from './buildHeadingBlock';

const buildFeaturesBlock = ({ id, name, content, settings, theme }: BlockBuilderConfig): FeaturesProps | undefined => {
  try {
    const features: Block & FeaturesProps = { id, name };

    const blockThemeVariant = content?.themeVariant;
    const globalTheme = theme?.featuresBlockTheme?.items[0]?.content?.properties;

    const themeVariant = blockThemeVariant || globalTheme?.varient || '1';
    const baseVariant = require(`/lib/components/blocks/Features/variants/${themeVariant}`).default || undefined;

    const blockOverrides = settings;

    features.classes = buildTheme({
      classes: baseVariant.classes,
      gridColsOverrides: [{ className: 'itemsContainer', config: content }],
      globalOverrides: globalTheme,
      blockOverrides,
    });

    const heading = content?.heading?.items[0];
    if (heading) {
      features.heading = buildHeadingBlock({
        id: heading.id,
        name: 'Heading',
        content: heading.content.properties,
        settings: heading.settings.properties,
        parentSettings: globalTheme?.headingBlockTheme?.items[0]?.content?.properties,
        theme,
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
    features.startContent = buildBlocks(content?.startContent.items, theme) || [];
    features.endContent = buildBlocks(content?.endContent?.items, theme) || [];

    return features;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildFeaturesBlock;
