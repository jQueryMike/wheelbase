import { HeadingProps, HeadingSize } from '@components/blocks/Heading';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';

const getSizeKey = (size: string) => {
  switch (size) {
    case 'Extra Large':
      return HeadingSize.XL;
    case 'Large':
      return HeadingSize.LG;
    case 'Medium':
      return HeadingSize.MD;
    case 'Small':
      return HeadingSize.SM;
    case 'Extra Small':
      return HeadingSize.XS;
    default:
      return undefined;
  }
};

const buildHeadingBlock = ({
  id,
  name,
  content,
  settings,
  parentVariantId,
  parentOverrides,
  globalTheme,
}: BlockBuilderConfig): (Block & HeadingProps) | undefined => {
  try {
    if (!content?.headingText) return undefined;

    // Shortcut to block theme properties from globalTheme
    const globalHeadingThemeProperties = globalTheme?.headingTheme?.items[0]?.content?.properties;

    // Get active variant from instance > parent > global > default variant id
    const instanceVariantId = content?.themeVariant;
    const globalVariantId = globalHeadingThemeProperties?.variant;
    const blockVariantId = instanceVariantId || parentVariantId || globalVariantId || '1';
    const activeVariant = require(`/lib/components/blocks/Heading/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalHeadingThemeProperties);
    const instanceOverrides = extractClassOverrides(settings);

    // Build initial block
    const heading: Block & HeadingProps = { id, name, text: content.headingText };

    // Add classes
    heading.classes = buildTheme({
      classes: activeVariant.classes,
      globalOverrides,
      parentOverrides,
      instanceOverrides,
    });

    // Add props
    if (settings?.headingTag) heading.tag = settings?.headingTag;
    if (content?.headingSize) heading.size = getSizeKey(content?.headingSize);

    return heading;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildHeadingBlock;