import { HeadingProps, HeadingSize } from '@components/blocks/Heading';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildTheme from '../buildTheme';

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
  parentSettings,
  theme,
}: BlockBuilderConfig): HeadingProps | undefined => {
  try {
    if (!content?.headingText) return undefined;

    const blockThemeVariant = content?.themeVariant;
    const globalTheme = theme?.headingBlockTheme?.items[0]?.content?.properties;

    const themeVariant = blockThemeVariant || parentSettings?.variant || globalTheme?.variant || '1';
    const baseVariant = require(`/lib/components/blocks/Heading/variants/${themeVariant}`).default || undefined;

    const globalOverrides = globalTheme;
    const parentOverrides = parentSettings;
    const blockOverrides = settings;

    const heading: Block & HeadingProps = { id, name, text: content.headingText };
    heading.classes = buildTheme({ classes: baseVariant.classes, globalOverrides, parentOverrides, blockOverrides });

    if (settings?.headingTag) heading.tag = settings?.headingTag;
    if (content?.headingSize) heading.size = getSizeKey(content?.headingSize);

    return heading;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildHeadingBlock;
