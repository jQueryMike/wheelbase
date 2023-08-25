import buildPageSections from './builders/buildPageSections';
import mergeVars from './mergeVars';

const getPage = async (params: { slug: string[] }) => {
  const themeTags = process.env.ENVIRONMENT_NAME !== ' local' ? [`theme`] : [];
  const globalConfigTags = process.env.ENVIRONMENT_NAME !== ' local' ? [`global-config`] : [];
  const pagesTags = process.env.ENVIRONMENT_NAME !== ' local' ? [`theme`, `page-${params.slug.join('-')}`] : [];
  const url = `${process.env.API_URL}/item/${process.env.API_ROOT_NODE_PATH}`;

  const [{ properties: globalTheme }, { properties: globalConfig }, page] = await Promise.all([
    fetch(`${url}/theme`, { next: { tags: themeTags } }).then((res) => res.json()),
    fetch(`${url}/global-config`, { next: { tags: globalConfigTags } }).then((res) => res.json()),
    fetch(`${url}/home/${params.slug.join('/')}`, { next: { tags: pagesTags } }).then((res) => res.json()),
  ]);

  const sections = await buildPageSections(
    mergeVars(page, globalConfig).properties?.contentGrid?.items || [],
    globalTheme,
    globalConfig,
  );

  return { sections, globalConfig, globalTheme };
};

export default getPage;
