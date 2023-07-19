import { HeadingsProps } from '@components/blocks/Headings';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildHeadingBlock from './buildHeadingBlock';
import buildSubheadingBlock from './buildSubheadingBlock';

const buildHeadingsBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
}: BlockBuilderConfig): (Block & HeadingsProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalHeadingsThemeProperties = globalTheme?.headingsTheme?.items[0]?.content?.properties;

    // Get active variant from instance > global > default variant id
    const instanceVariantId = content?.themeVariant;
    const globalVariantId = globalHeadingsThemeProperties?.themeVariant;
    const blockVariantId = instanceVariantId || globalVariantId || '1';
    const activeVariant = require(`/lib/components/blocks/Headings/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalHeadingsThemeProperties);
    const instanceOverrides = extractClassOverrides(settings);

    // Build initial block
    const headings: Block & HeadingsProps = { id, name };

    // Add classes
    headings.classes = buildTheme({
      classes: activeVariant.classes,
      globalOverrides,
      instanceOverrides,
    });

    // Add heading
    const heading = content?.heading?.items[0];
    if (heading) {
      const headingThemeProperties = globalHeadingsThemeProperties?.headingTheme?.items[0]?.content?.properties;

      headings.heading = buildHeadingBlock({
        id: heading.content.id,
        name: 'Heading',
        content: heading.content.properties,
        settings: heading.settings.properties,
        parentVariantId: headingThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(headingThemeProperties),
        globalTheme,
      });
    }

    // Add subheading
    const subheading = content?.subheading?.items[0];
    if (subheading) {
      const subheadingThemeProperties = globalHeadingsThemeProperties?.subheadingTheme?.items[0]?.content?.properties;

      headings.subheading = buildSubheadingBlock({
        id: subheading.content.id,
        name: 'Subheading',
        content: subheading.content.properties,
        settings: subheading.settings.properties,
        parentVariantId: subheadingThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(subheadingThemeProperties),
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
