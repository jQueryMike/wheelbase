import { HeadingsProps } from '@components/blocks/Headings';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildBlockClasses from '../buildBlockClasses';
import extractInheritedTheme from '../extractInheritedTheme';
import buildHeadingBlock from './buildHeadingBlock';
import buildSubheadingBlock from './buildSubheadingBlock';

const buildHeadingsBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  inheritedThemes,
}: BlockBuilderConfig): (Block & HeadingsProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.headingsTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
    });

    // Build initial block
    const headings: Block & HeadingsProps = { id, name, classes };

    // Add heading
    const heading = content?.heading?.items[0];
    if (heading) {
      const headingTheme = globalBlockTheme?.headingTheme?.items[0]?.content?.properties;

      headings.heading = buildHeadingBlock({
        id: heading.content.id,
        name: 'Heading',
        content: heading.content.properties,
        settings: heading.settings.properties,
        globalTheme,
        inheritedThemes: [headingTheme, ...extractInheritedTheme('heading', inheritedThemes)],
      });
    }

    // Add subheading
    const subheading = content?.subheading?.items[0];
    if (subheading) {
      const subheadingTheme = globalBlockTheme?.subheadingTheme?.items[0]?.content?.properties;

      headings.subheading = buildSubheadingBlock({
        id: subheading.content.id,
        name: 'Subheading',
        content: subheading.content.properties,
        settings: subheading.settings.properties,
        inheritedThemes: [subheadingTheme, ...extractInheritedTheme('subheading', inheritedThemes)],
        globalTheme,
      });
    }

    return headings;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildHeadingsBlock;
