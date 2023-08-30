import { PrimaryNavigationProps } from '@components/blocks/PrimaryNavigation';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildBlockClasses from '../buildBlockClasses';

const buildPrimaryNavigationBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  inheritedThemes,
}: BlockBuilderConfig): (Block & PrimaryNavigationProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.primaryNavigationTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
    });

    // Build initial block
    const primaryNavigation: Block & PrimaryNavigationProps = { id, name, classes };

    if (content?.burgerIcon) primaryNavigation.burgerIcon = content.burgerIcon;

    if (content?.menuText) primaryNavigation.menuText = content.menuText;

    if (content?.closeIcon) primaryNavigation.closeIcon = content.closeIcon;

    if (content?.subMenuIcon) primaryNavigation.subMenuIcon = content.subMenuIcon;

    return primaryNavigation;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildPrimaryNavigationBlock;
