import { LinkListProps } from '@components/blocks/LinkList';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';
import { v4 as uuidv4 } from 'uuid';

import buildBlockClasses from '../buildBlockClasses';

const buildLinkListBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  inheritedThemes,
}: BlockBuilderConfig): (Block & LinkListProps) | undefined => {
  try {
    if (!content?.items || content.items.length < 1) return undefined;

    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.linkListTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
    });

    // Build initial block
    const linkList: Block & LinkListProps = {
      id,
      name,
      classes,
      items: content.items.map((item: any) => ({
        id: uuidv4(),
        target: item.target || '_self',
        href: item?.url || item.route?.path ? (item.url || item.route.path).replace('/home', '') : null,
        text: item.title,
      })),
    };

    return linkList;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildLinkListBlock;
