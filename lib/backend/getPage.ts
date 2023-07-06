import buildPageSections from './builders/buildPageSections';

const getPage = async (params: { slug: string[] }) => {
  const themeTags = process.env.ENVIRONMENT_NAME !== ' local' ? [`theme`] : [];
  const pagesTags = process.env.ENVIRONMENT_NAME !== ' local' ? [`theme`, `page-${params.slug.join('-')}`] : [];
  const url = `${process.env.API_URL}/item/${process.env.API_ROOT_NODE_PATH}`;

  const [{ properties: theme }, pages] = await Promise.all([
    fetch(`${url}/website-theme`, { next: { tags: themeTags } }).then((res) => res.json()),
    fetch(`${url}/${params.slug.join('/')}`, { next: { tags: pagesTags } }).then((res) => res.json()),
  ]);

  const sections = buildPageSections(pages.properties?.contentGrid?.items || [], theme);

  return { sections };
};

export default getPage;
