/* eslint-disable no-restricted-syntax */
import PageSection from '@interfaces/PageSection';
import { UmbracoBlockGridItem } from '@interfaces/Umbraco';
import { v4 as uuidv4 } from 'uuid';

import buildPageSectionAreas from './buildPageSectionAreas';
import buildPageSectionSettings from './buildPageSectionSettings';

const buildPageSections = (items: UmbracoBlockGridItem[]): PageSection[] => {
  if (!items || items.length < 1) return [];

  const pageSections: PageSection[] = [];

  items.forEach((item) => {
    const areas = buildPageSectionAreas(item.areas) || [];
    const settings = buildPageSectionSettings(item.settings);
    if (areas.length) {
      pageSections.push({ id: uuidv4(), areas, settings });
    }
  });

  return pageSections;
};

export default buildPageSections;
