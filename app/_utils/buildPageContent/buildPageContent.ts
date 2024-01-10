import { buildConfig } from '@utils/buildConfig';
import { buildSEO } from '@utils/buildSEO';
import { getGlobalConfig } from '@utils/getGlobalConfig';
import { getPage } from '@utils/getPage';
import { getSharedContent } from '@utils/getSharedContent';
import { mergeVars } from '@utils/mergeVars';

export default async function buildPageContent(slug: string[]) {
  const pageData = await getPage(slug);
  const { properties: globalConfig } = await getGlobalConfig();
  const { properties: sharedContent } = await getSharedContent();
  const content = (mergeVars(pageData.properties.organismGrid.items, globalConfig, sharedContent) ?? []).map(
    (item: any) => buildConfig(item.content),
  );

  return { content, globalConfig, seo: buildSEO(pageData) };
}
