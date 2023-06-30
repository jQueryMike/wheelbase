import { PageSection } from '../PageSection';
import { PageSectionProps } from '../PageSection/PageSection';

export interface PageProps {
  sections: PageSectionProps[];
}

const Page = ({ sections }: PageProps) => (
  <main>
    {sections?.map((section: any) => (
      <PageSection key={section.id} {...section} />
    ))}
  </main>
);

export default Page;
