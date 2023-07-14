import buildPageSections from './builders/buildPageSections';

const getPage = async (params: { slug: string[] }) => {
  const themeTags = process.env.ENVIRONMENT_NAME !== ' local' ? [`theme`] : [];
  const pagesTags = process.env.ENVIRONMENT_NAME !== ' local' ? [`theme`, `page-${params.slug.join('-')}`] : [];
  const url = `${process.env.API_URL}/item/${process.env.API_ROOT_NODE_PATH}`;

  const [{ properties: globalTheme }, pages] = await Promise.all([
    fetch(`${url}/theme`, { next: { tags: themeTags } }).then((res) => res.json()),
    fetch(`${url}/home/${params.slug.join('/')}`, { next: { tags: pagesTags } }).then((res) => res.json()),
  ]);

  const sections = await buildPageSections(pages.properties?.contentGrid?.items || [], globalTheme);

  return { sections, globalTheme };
};

export default getPage;
