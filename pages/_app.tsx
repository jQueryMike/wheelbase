import getInitialProps from '@backend/getInitialProps';
import { Header } from '@components/blocks/Header';
import { PageSection } from '@components/layout/PageSection';
import '@styles/globals.scss';
import { AppProps } from 'next/app';

interface CustomAppProps extends AppProps {
  globalProps: any;
}

const App = ({ Component, pageProps, globalProps }: CustomAppProps) => (
  <>
    {globalProps?.header && <Header {...globalProps.header} />}
    {globalProps?.headerSections?.map((section: any) => (
      <PageSection key={section.id} {...section} />
    ))}
    <Component {...pageProps} />;
    {globalProps?.footerSections?.map((section: any) => (
      <PageSection key={section.id} {...section} />
    ))}
  </>
);

App.getInitialProps = async () => ({ ...(await getInitialProps()) });

export default App;
