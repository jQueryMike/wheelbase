/* eslint-disable react/no-danger */
import getInitialProps from '@backend/getInitialProps';
import { Footer } from '@components/blocks/Footer';
import { Header } from '@components/blocks/Header';
import { PageSection } from '@components/layout/PageSection';
import '@styles/globals.scss';
import buildColorVariables from '@utilities/buildColorVariables';
import * as DOMPurify from 'isomorphic-dompurify';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';

interface CustomAppProps extends AppProps {
  globalProps: any;
}

const App = ({ Component, pageProps, globalProps }: CustomAppProps) => {
  const colorPalette = DOMPurify.sanitize(buildColorVariables(globalProps.colorPalette));
  const globalCSS = DOMPurify.sanitize(globalProps.globalCSS);

  return (
    <>
      <Head>
        {colorPalette && <style type="text/css" dangerouslySetInnerHTML={{ __html: colorPalette }} />}
        {globalCSS && <style type="text/css" dangerouslySetInnerHTML={{ __html: globalCSS }} />}
      </Head>
      {globalProps.defaultSeo && <DefaultSeo {...globalProps.defaultSeo} />}
      {globalProps?.header && (
        <Header {...globalProps.header} drawerNavigationProps={globalProps.drawerNavigationProps} />
      )}

      {globalProps?.headerSections?.map((section: any) => (
        <PageSection key={section.id} {...section} />
      ))}
      <Component {...pageProps} />
      {globalProps?.footerSections?.map((section: any) => (
        <PageSection key={section.id} {...section} />
      ))}
      {globalProps?.footer && <Footer {...globalProps.footer} />}
    </>
  );
};
App.getInitialProps = async () => ({ ...(await getInitialProps()) });

export default App;
