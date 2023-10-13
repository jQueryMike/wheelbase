import { DrawerNavigationItem, DrawerNavigationProps } from '@components/blocks/DrawerNavigation';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildBlockClasses from '../buildBlockClasses';

const buildDrawerNavigationItem = (item: any, omitChildren = false): DrawerNavigationItem => {
  const children = omitChildren
    ? []
    : item.children.map((childItem: any) => buildDrawerNavigationItem(childItem)) || [];

  return {
    id: item.id,
    href: item.url,
    text: item.name,
    children,
  };
};

const buildDrawerNavigationBlock = ({
  items = [],
  id,
  name,
  content,
  settings,
  globalTheme,
  inheritedThemes,
}: BlockBuilderConfig & { items: any[] }): (Block & DrawerNavigationProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.drawerNavigationTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
    });

    // Build initial block
    const drawerNavigation: Block & DrawerNavigationProps = { id, name, classes };

    if (content?.menuButtonIcon) drawerNavigation.menuButtonIcon = content.menuButtonIcon;
    if (content?.menuButtonText) drawerNavigation.menuButtonText = content.menuButtonText;
    if (content?.closeButtonIcon) drawerNavigation.closeButtonIcon = content.closeButtonIcon;
    if (content?.closeButtonText) drawerNavigation.closeButtonText = content.closeButtonText;
    if (content?.toggleButtonIcon) drawerNavigation.toggleButtonIcon = content.toggleButtonIcon;

    if (items.length > 0) {
      drawerNavigation.items = [
        buildDrawerNavigationItem(items[0], true),
        ...items[0].children.map((item: any) => buildDrawerNavigationItem(item)),
      ];
    }

    return drawerNavigation;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildDrawerNavigationBlock;
