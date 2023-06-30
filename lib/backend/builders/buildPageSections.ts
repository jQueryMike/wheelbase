import { PageSectionProps } from '@components/layout/PageSection/PageSection';
import Block from '@interfaces/Block';
import { UmbracoBlockGridItem } from '@interfaces/Umbraco';

import buildPageSectionAreas from './buildPageSectionAreas';
import buildTheme from './buildTheme';

const buildPageSections = (items: UmbracoBlockGridItem[]): PageSectionProps[] => {
  if (!items || items.length < 1) return [];

  const pageSections: (Block & PageSectionProps)[] = [];

  items.forEach((item) => {
    let pageSectionClasses = {};
    const themeVariant = item.content.properties.theme[0]?.name.split(' ').at(-1);

    if (themeVariant) {
      const classes = require(`/lib/components/layout/PageSection/themes/${themeVariant}/pageSection.classes`).default;
      pageSectionClasses = buildTheme({
        classes,
        overrides: item.settings?.properties,
      });
    }

    pageSections.push({
      id: item.content.id,
      name: 'PageSection',

      areas: buildPageSectionAreas(item.areas),
      classes: pageSectionClasses,
    });
  });

  return pageSections;
};

export default buildPageSections;
