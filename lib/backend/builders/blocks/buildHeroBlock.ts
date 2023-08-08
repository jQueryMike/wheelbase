import { HeadingSize, HeadingTag } from '@components/blocks/Heading';
import { HeroProps } from '@components/blocks/Hero';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildHeadingsBlock from './buildHeadingsBlock';
import buildImageBlock from './buildImageBlock';

const buildHeroBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
}: BlockBuilderConfig): (Block & HeroProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalHeroThemeProperties = globalTheme?.heroTheme?.items[0]?.content?.properties;

    // Get active variant from instance > global > default variant id
    const instanceVariantId = content?.themeVariant;
    const globalVariantId = globalHeroThemeProperties?.themeVariant;
    const blockVariantId = instanceVariantId || globalVariantId || '1';
    const activeVariant = require(`/lib/components/blocks/Hero/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalHeroThemeProperties);
    const instanceOverrides = extractClassOverrides(settings);

    // Build initial block
    const hero: Block & HeroProps = { id, name };

    // Add classes
    hero.classes = buildTheme({
      classes: activeVariant.classes,
      globalOverrides,
      instanceOverrides,
    });

    // Add headings
    const headings = content?.headings?.items[0];
    if (headings) {
      const headingsThemeProperties = globalHeroThemeProperties?.headingsTheme?.items[0]?.content?.properties;

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
        parentVariantId: headingsThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(headingsThemeProperties),
        globalTheme,
      });
    }

    const heroImage = content?.image[0] || null;
    if (heroImage) {
      const heroImageThemeProperties = globalHeroThemeProperties?.heroImageTheme?.items[0]?.content?.properties;

      hero.image = buildImageBlock({
        id: heroImage.id,
        name: 'Image',
        content: { ...heroImage },
        parentVariantId: heroImageThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(heroImageThemeProperties),
        globalTheme,
      });
    }

    hero.contentArea = buildAdditionalContent({
      items: content?.contentArea?.items,
      parentThemeProperties: globalHeroThemeProperties,
      globalTheme,
    });

    return hero;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildHeroBlock;
