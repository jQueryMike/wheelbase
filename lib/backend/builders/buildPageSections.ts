import { PageSectionProps } from '@components/layout/PageSection/PageSection';
import Block from '@interfaces/Block';
import { UmbracoBlockGridItem } from '@interfaces/Umbraco';

import buildPageSectionAreas from './buildPageSectionAreas';
import buildTheme from './buildTheme';
import extractClassOverrides from './extractClassOverrides';

const buildPageSections = async (items: UmbracoBlockGridItem[], globalTheme: any): Promise<PageSectionProps[]> => {
  if (!items || items.length < 1) return [];

  // Shortcut to block theme properties from globalTheme
  const globalPageSectionThemeProperties = globalTheme?.pageSectionTheme?.items[0]?.content?.properties;

  const pageSections: (Block & PageSectionProps)[] = [];

  items.forEach(async (item) => {
    // Get active variant from instance > global > default variant id
    const instanceVariantId = item.content?.properties?.themeVariant;
    const globalVariantId = globalPageSectionThemeProperties?.themeVariant;
    const blockVariantId = instanceVariantId || globalVariantId || '1';
    const activeVariant = require(`/lib/components/layout/PageSection/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalPageSectionThemeProperties);
    const instanceOverrides = extractClassOverrides(item.settings?.properties);

    const pageSection: Block & PageSectionProps = {
      id: item.content.id,
      name: 'PageSection',
    };

    if (item.areas.length > 1) {
      const areasContainer = instanceOverrides.areasContainer || '';
      instanceOverrides.tw__areasContainer = [areasContainer, `xl:grid-cols-${item.areas.length}`].join(' ');
    }

    pageSection.classes = buildTheme({ classes: activeVariant.classes, globalOverrides, instanceOverrides });

    pageSection.areas = await buildPageSectionAreas(item.areas, globalTheme);

    pageSections.push(pageSection);
  });

  return pageSections;
};

export default buildPageSections;
