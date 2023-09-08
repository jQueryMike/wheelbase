import { NextSeo, NextSeoProps } from 'next-seo';
import Head from 'next/head';

import { PageSection } from '../PageSection';
import { PageSectionProps } from '../PageSection/PageSection';

export interface PageProps {
  sections: PageSectionProps[];
  globalTheme: any;
  seo?: NextSeoProps;
}

const Page = ({ globalTheme, sections, seo }: PageProps) => {
  if (!globalTheme) return null;

  return (
    <>
      <NextSeo {...seo} />
      <Head>
        {globalTheme.fontProvider === 'Google' && (
          <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          </>
        )}
        <link rel="stylesheet" href={globalTheme.fontLinkHref} />
      </Head>
      <main>
        {sections?.map((section: any) => (
          <PageSection key={section.id} {...section} />
        ))}
      </main>
    </>
  );
};

export default Page;
