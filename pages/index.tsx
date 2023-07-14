import getPage from '@backend/getPage';
import { Page } from '@components/layout/Page';
import axios from 'axios';

const Home = (pageProps: any) => <Page {...pageProps} />;

export async function getStaticProps() {
  const [page, theme] = await Promise.all([
    getPage({ slug: ['/'] }),
    axios.get(`${process.env.API_URL}/item/${process.env.API_ROOT_NODE_PATH}/theme`),
  ]);

  return { props: { ...page, googleFontsHref: theme.data.properties.googleFontsHref } };
}

export default Home;
