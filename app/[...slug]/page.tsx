import getPage from '@backend/getPage';
import getStaticPaths from '@backend/getStaticPaths';

export const generateStaticParams = async () => getStaticPaths();

const Page = async ({ params }: any) => {
  const page = (await getPage(params)) || {};

  return <Page sections={page.sections}/>;
};

export default Page;
