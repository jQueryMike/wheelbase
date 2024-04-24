import BLOCKS from '@components/Blocks';
import { buildPageContent } from '@utils';
import { Metadata } from 'next';
import { Suspense } from 'react';

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { seo } = await buildPageContent(params.slug);
  return {
    ...seo,
  } as Metadata;
}

export default async function Page({ params }: any) {
  const { content } = await buildPageContent(params.slug);
  const components = content.map(({ name, id, ...props }: any) => [
    name,
    BLOCKS[name as keyof typeof BLOCKS],
    id,
    props,
  ]);
  return (
    <main>
      {components.map(([name, Component, id, props]: any) => (
        <Suspense fallback={<div>Loading {name}...</div>} key={id}>
          <Component {...props} />
        </Suspense>
      ))}
    </main>
  );
}
