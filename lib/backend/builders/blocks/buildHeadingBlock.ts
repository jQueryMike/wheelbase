import { HeadingProps, HeadingSize } from '@components/blocks/Heading';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildBlockClasses from '../buildBlockClasses';

const getSizeKey = (size: string) => {
  if (!size) return undefined;

  switch (size.replaceAll(' ', '')) {
    case 'ExtraLarge':
      return HeadingSize.ExtraLarge;
    case 'Large':
      return HeadingSize.Large;
    case 'Medium':
      return HeadingSize.Medium;
    case 'Small':
      return HeadingSize.Small;
    case 'ExtraSmall':
      return HeadingSize.ExtraSmall;
    default:
      return undefined;
  }
};

const buildHeadingBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  inheritedThemes,
}: BlockBuilderConfig): (Block & HeadingProps) | undefined => {
  try {
    if (!content?.headingText) return undefined;

    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.headingTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
    });

    // Build initial block
    const heading: Block & HeadingProps = { id, name, text: content.headingText, classes };

    // Add props
    if (content?.headingTag) heading.tag = content?.headingTag;

    const headingSize = getSizeKey(content?.headingSize);
    if (headingSize) heading.size = headingSize;

    return heading;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildHeadingBlock;
