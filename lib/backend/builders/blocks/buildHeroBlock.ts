import { HeadingSize, HeadingTag } from '@components/blocks/Heading';
import { HeroProps } from '@components/blocks/Hero';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildBlockClasses from '../buildBlockClasses';
import extractInheritedTheme from '../extractInheritedTheme';
import buildHeadingsBlock from './buildHeadingsBlock';
import buildImageBlock from './buildImageBlock';

const buildHeroBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  inheritedThemes,
}: BlockBuilderConfig): (Block & HeroProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.heroTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
    });

    // Build initial block
    const hero: Block & HeroProps = { id, name, classes };

    // Add headings
    const headings = content?.headings?.items[0];
    if (headings) {
      const headingsTheme = globalBlockTheme?.headingsTheme?.items[0]?.content?.properties;
      const headingsContent = { ...headings.content.properties };

      if (headingsContent?.heading?.items[0]) {
        if (!headingsContent.heading.items[0].content.properties.headingTag)
          headingsContent.heading.items[0].content.properties.headingTag = HeadingTag.H1;
        if (!headingsContent.heading.items[0].content.properties.headingSize) {
          headingsContent.heading.items[0].content.properties.headingSize = HeadingSize.ExtraLarge;
        }
      }

      hero.headings = buildHeadingsBlock({
        id: headings.content.id,
        name: 'Headings',
        content: headingsContent,
        settings: headings.settings.properties,
        inheritedThemes: [headingsTheme, ...extractInheritedTheme('headings', inheritedThemes)],
        globalTheme,
      });
    }

    const heroImage = content?.image ? content?.image[0] : null;
    if (heroImage) {
      const heroImageTheme = globalBlockTheme?.heroImageTheme?.items[0]?.content?.properties;

      hero.image = buildImageBlock({
        id: heroImage.id,
        name: 'Image',
        content: { ...heroImage },
        inheritedThemes: [heroImageTheme, ...extractInheritedTheme('image', inheritedThemes)],
        globalTheme,
      });
    }

    hero.contentArea = buildAdditionalContent({
      items: content?.contentArea?.items,
      globalBlockTheme,
      globalTheme,
      inheritedThemes,
    });

    return hero;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildHeroBlock;
