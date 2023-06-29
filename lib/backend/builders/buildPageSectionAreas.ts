/* eslint-disable no-await-in-loop */

/* eslint-disable no-restricted-syntax */
import PageSectionArea from '@interfaces/PageSectionArea';
import { UmbracoBlockGridArea } from '@interfaces/Umbraco';
import { v4 as uuidv4 } from 'uuid';

import buildBlocks from './buildBlocks';

const buildPageSectionAreas = (areas: UmbracoBlockGridArea[]): PageSectionArea[] => {
  if (!areas) return [];

  const pageSectionAreas: PageSectionArea[] = [];

  areas.forEach((area) => {
    pageSectionAreas.push({
      id: uuidv4(),
      columnSpan: area.columnSpan,
      blocks: buildBlocks(area.items),
    });
  });

  return pageSectionAreas;
};

export default buildPageSectionAreas;
