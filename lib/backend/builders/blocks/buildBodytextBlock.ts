import { BodyTextProps } from '@components/blocks/BodyText';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildBlockClasses from '../buildBlockClasses';
import extractInheritedTheme from '../extractInheritedTheme';
import buildHeadingsBlock from './buildHeadingsBlock';

const buildBodytextBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  globalConfig,
  inheritedThemes,
}: BlockBuilderConfig): (Block & BodyTextProps) | undefined => {

  try {
    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.imageWithContentTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
    });

    // Build initial block
    const bodyText: Block & BodyTextProps = { id, name, classes };

    // Add headings
    const headings = content?.headings?.items[0];
    if (headings) {
      const headingsTheme = globalBlockTheme?.headingsTheme?.items[0]?.content?.properties;

      bodyText.headings = buildHeadingsBlock({
        id: headings.content.id,
        name: 'Headings',
        content: headings.content.properties,
        settings: headings.settings.properties,
        inheritedThemes: [headingsTheme, ...extractInheritedTheme('headings', inheritedThemes)],
        globalTheme,
        globalConfig,
      });
    }

    return bodyText;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildBodytextBlock;
