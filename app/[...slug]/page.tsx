import { buildPageContent } from '@utils';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { Suspense } from 'react';

import { BlockList, GlobalStyles } from '@components';

import { PageProps } from '.next/types/app/page';

export default async function Page({ params }: PageProps) {
  const { content, seo } = await buildPageContent(params.slug);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Head>
          <GlobalStyles />
          <NextSeo {...seo} />
        </Head>
      </Suspense>
      <main>
        <BlockList blocks={content} />
      </main>
    </>
  );
}
