import { PageSectionProps } from '@components/layout/PageSection/PageSection';
import Block from '@interfaces/Block';
import { UmbracoBlockGridItem } from '@interfaces/Umbraco';

import buildBlockClasses from './buildBlockClasses';
import buildPageSectionAreas from './buildPageSectionAreas';

const buildPageSections = async (
  items: UmbracoBlockGridItem[],
  globalTheme: any,
  globalConfig?: any,
): Promise<PageSectionProps[]> => {
  if (!items || items.length < 1) return [];

  // Shortcut to block theme properties from globalTheme
  const globalBlockTheme = globalTheme?.pageSectionTheme?.items[0]?.content?.properties;

  const pageSections: (Block & PageSectionProps)[] = [];

  items.forEach(async (item) => {
    // Get active variant from instance > global > default variant id
    // const instanceVariantId = item.content?.properties?.themeVariant;
    // const globalVariantId = globalPageSectionThemeProperties?.themeVariant;
    // const blockVariantId = instanceVariantId || globalVariantId || '1';
    // const activeVariant = require(`/lib/components/layout/PageSection/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    // const globalOverrides = extractClassOverrides(globalPageSectionThemeProperties);
    const itemSettings = item.settings?.properties || {};

    if (item.areas.length > 1) {
      const areasContainer = itemSettings.tw_areasContainer || '';
      itemSettings.tw_areasContainer = [areasContainer, `xl:grid-cols-${item.areas.length}`].join(' ');
    }

    // Build classes
    const classes = buildBlockClasses({
      name: 'PageSection',
      location: 'layout',
      globalBlockTheme,
      instanceVariant: item.content?.properties?.themeVariant,
      instanceSettings: itemSettings,
    });

    const pageSection: Block & PageSectionProps = {
      id: item.content.id,
      name: 'PageSection',
      classes,
    };

    pageSection.areas = await buildPageSectionAreas(item.areas, globalTheme, globalConfig);

    pageSections.push(pageSection);
  });

  return pageSections;
};

export default buildPageSections;
