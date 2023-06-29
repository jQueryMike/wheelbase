import buildPageSections from './builders/buildPageSections';

const getPage = async (params: { slug: string[] }) => {
  const tags = process.env.ENVIRONMENT_NAME !== ' local' ? [`page-${params.slug.join('-')}`] : [];
  const url = `${process.env.API_URL}/item/${process.env.API_ROOT_NODE_PATH}/${params.slug.join('/')}`;
  const res = await fetch(url, { next: { tags } });
  const data = await res.json();
  const sections = buildPageSections(data.properties?.contentGrid?.items || []);

  return { sections };
};

export default getPage;
