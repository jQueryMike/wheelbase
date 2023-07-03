import getPage from '@backend/getPage';
import getStaticPaths from '@backend/getStaticPaths';
import { Page } from '@components/layout/Page';

export const generateStaticParams = async () => getStaticPaths();

const SlugPage = async ({ params }: any) => {
  const page = (await getPage(params)) || {};

  return <Page sections={page.sections}/>;
};

export default SlugPage;
