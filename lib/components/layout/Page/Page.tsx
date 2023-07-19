import Head from 'next/head';

import { PageSection } from '../PageSection';
import { PageSectionProps } from '../PageSection/PageSection';

export interface PageProps {
  sections: PageSectionProps[];
  globalTheme: any;
}

const Page = ({ sections, globalTheme }: PageProps) => (
  <>
    <Head>
      <link rel="stylesheet" href={globalTheme?.googleFontsHref} />
    </Head>
    <main>
      {sections?.map((section: any) => (
        <PageSection key={section.id} {...section} />
      ))}
    </main>
  </>
);

export default Page;
