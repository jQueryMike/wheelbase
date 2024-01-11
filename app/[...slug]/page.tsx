import { RenderBlocks } from '@components/Blocks';
import { buildPageContent } from '@utils';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { Suspense } from 'react';

import { GlobalStyles } from '@components';

export default async function Page({ params }: any) {
  const { content, seo } = await buildPageContent(params.slug);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>} key="head">
        <GlobalStyles />
        <Head>
          <NextSeo {...seo} />
        </Head>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>} key="main">
        <main>{content.map(RenderBlocks)}</main>
      </Suspense>
    </>
  );
}
