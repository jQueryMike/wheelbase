import getInitialProps from '@backend/getInitialProps';
import { Footer } from '@components/blocks/Footer';
import { Header } from '@components/blocks/Header';
import { PageSection } from '@components/layout/PageSection';
import '@styles/globals.scss';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';

interface CustomAppProps extends AppProps {
  globalProps: any;
}

const App = ({ Component, pageProps, globalProps }: CustomAppProps) => (
  <>
    {globalProps.defaultSeo && (
      <DefaultSeo
        {...globalProps.defaultSeo}
        dangerouslySetAllPagesToNoFollow={process.env.ENVIRONMENT_NAME !== 'production'}
        dangerouslySetAllPagesToNoIndex={process.env.ENVIRONMENT_NAME !== 'production'}
      />
    )}
    {globalProps?.header && <Header {...globalProps.header} />}
    {globalProps?.headerSections?.map((section: any) => (
      <PageSection key={section.id} {...section} />
    ))}
    <Component {...pageProps} />;
    {globalProps?.footerSections?.map((section: any) => (
      <PageSection key={section.id} {...section} />
    ))}
    {globalProps?.footer && <Footer {...globalProps.footer} />}
  </>
);

App.getInitialProps = async () => ({ ...(await getInitialProps()) });

export default App;
