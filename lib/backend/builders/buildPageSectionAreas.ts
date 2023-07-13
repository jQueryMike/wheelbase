import { PageSectionArea } from '@components/layout/PageSection/PageSection';
import { UmbracoBlockGridArea } from '@interfaces/Umbraco';
import { v4 as uuidv4 } from 'uuid';

import buildBlocks from './buildBlocks';

const buildPageSectionAreas = (areas: UmbracoBlockGridArea[], globalTheme: any): PageSectionArea[] => {
  if (!areas) return [];

  const pageSectionAreas: PageSectionArea[] = [];

  areas.forEach((area) => {
    pageSectionAreas.push({
      id: uuidv4(),
      columnSpan: area.columnSpan,
      blocks: buildBlocks({ items: area.items, globalTheme }),
    });
  });

  return pageSectionAreas;
};

export default buildPageSectionAreas;
