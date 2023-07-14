import getPage from '@backend/getPage';
import { Page } from '@components/layout/Page';

const Home = (pageProps: any) => <Page {...pageProps} />;

export async function getStaticProps() {
  const page = await getPage({ slug: ['/'] });
  return { props: { ...page } };
}

export default Home;
