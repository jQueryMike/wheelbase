import BLOCKS from '@components/Blocks';
import { buildPageContent } from '@utils';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { Suspense } from 'react';

import { GlobalStyles } from '@components';

export default async function Page({ params }: any) {
  const { content, seo } = await buildPageContent(params.slug);
  const components = content.map(({ name, id, ...props }: any) => [name, BLOCKS[name], id, props]);
  return (
    <>
      <Head>
        <NextSeo {...seo} />
      </Head>
      <main>
        <GlobalStyles />
        {components.map(([name, Component, id, props]: any) => (
          <Suspense fallback={<div>Loading {name}...</div>} key={id}>
            <Component {...props} />
          </Suspense>
        ))}
      </main>
    </>
  );
}
