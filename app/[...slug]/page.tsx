import getPage from '@backend/getPage';
import getStaticPaths from '@backend/getStaticPaths';
import { PageSection } from '@components/sections/PageSection';

export const generateStaticParams = async () => getStaticPaths();

const Page = async ({ params }: any) => {
  const page = (await getPage(params)) || {};

  return (
    <main>
      {page.sections?.map((section: any) => (
        <PageSection key={section.id} {...section} />
      ))}
    </main>
  );
};

export default Page;
