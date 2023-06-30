import getPage from '@backend/getPage';
import { Page } from '@components/layout/Page';

export const generateStaticParams = () => ['/'];

const Home = async () => {
  const page = (await getPage({ slug: [''] })) || {};

  return <Page sections={page.sections} />;
};

export default Home;
