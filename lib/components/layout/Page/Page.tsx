import Head from 'next/head';

import { PageSection } from '../PageSection';
import { PageSectionProps } from '../PageSection/PageSection';

export interface PageProps {
  sections: PageSectionProps[];
  googleFontsHref: string;
}

const Page = ({ googleFontsHref, sections }: PageProps) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="stylesheet" href={googleFontsHref} />
    </Head>
    <main>
      {sections?.map((section: any) => (
        <PageSection key={section.id} {...section} />
      ))}
    </main>
  </>
);

export default Page;
