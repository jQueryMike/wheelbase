import { ButtonListProps } from '@components/blocks/ButtonList';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildBlockClasses from '../buildBlockClasses';
import extractInheritedTheme from '../extractInheritedTheme';
import buildButtonBlock from './buildButtonBlock';

const buildButtonListBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  globalConfig,
  inheritedThemes,
}: BlockBuilderConfig): (Block & ButtonListProps) | undefined => {
  try {
    if (!content?.items?.items || content.items.items.length < 1) return undefined;

    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.buttonListTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
    });

    const buttonTheme = globalBlockTheme?.buttonTheme?.items[0]?.content?.properties;

    // Build initial block
    const buttonList: Block & ButtonListProps = {
      id,
      name,
      classes,
      items: content.items.items
        .map((item: any) =>
          buildButtonBlock({
            id: item.content.id,
            name: 'Button',
            content: item.content?.properties,
            settings: item.settings?.properties,
            inheritedThemes: [buttonTheme, ...extractInheritedTheme('button', inheritedThemes)],
            globalTheme,
            globalConfig,
          }),
        )
        .filter((item: any) => !!item),
    };

    return buttonList;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildButtonListBlock;
