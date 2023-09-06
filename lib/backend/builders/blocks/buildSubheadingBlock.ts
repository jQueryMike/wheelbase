import { SubheadingProps } from '@components/blocks/Subheading';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildBlockClasses from '../buildBlockClasses';

const buildSubheadingBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  inheritedThemes,
}: BlockBuilderConfig): (Block & SubheadingProps) | undefined => {
  try {
    if (!content?.subheadingText) return undefined;

    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.subheadingTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
    });

    // Build initial block
    const subheading: Block & SubheadingProps = { id, name, text: content.subheadingText, classes };

    return subheading;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildSubheadingBlock;
