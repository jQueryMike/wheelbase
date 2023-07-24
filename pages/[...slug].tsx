import getPage from '@backend/getPage';
import getPaths from '@backend/getStaticPaths';
import { Page, PageProps } from '@components/layout/Page';
import { GetStaticPropsContext } from 'next';

function SlugPage(pageProps: PageProps): JSX.Element {
  return <Page {...pageProps} />;
}

export async function getStaticPaths() {
  const paths = await getPaths();
  return paths;
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  if (!params?.slug) return { notFound: true };

  const slugArray = Array.isArray(params.slug) ? params.slug : [params.slug];
  const page = await getPage({ slug: slugArray });
  return { props: { ...page } };
}

export default SlugPage;
