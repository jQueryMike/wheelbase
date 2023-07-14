import { PageSectionArea } from '@components/layout/PageSection/PageSection';
import { UmbracoBlockGridArea } from '@interfaces/Umbraco';
import { v4 as uuidv4 } from 'uuid';

import buildBlocks from './buildBlocks';

const buildPageSectionAreas = async (areas: UmbracoBlockGridArea[], globalTheme: any): Promise<PageSectionArea[]> => {
  if (!areas) return [];

  const pageSectionAreas: PageSectionArea[] = [];

  areas.forEach(async (area) => {
    pageSectionAreas.push({
      id: uuidv4(),
      columnSpan: area.columnSpan,
      blocks: await buildBlocks({ items: area.items, globalTheme }),
    });
  });

  return pageSectionAreas;
};

export default buildPageSectionAreas;
