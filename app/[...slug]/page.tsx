import { RenderBlocks } from '@components/Blocks';
import { buildPageContent } from '@utils';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { Suspense } from 'react';

import { GlobalStyles } from '@components';

import { PageProps } from '.next/types/app/page';

export default async function Page({ params }: PageProps) {
  const { content, seo } = await buildPageContent(params.slug);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>} key="head">
        <Head>
          <GlobalStyles />
          <NextSeo {...seo} />
        </Head>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>} key="main">
        <main>{content.map(RenderBlocks)}</main>
      </Suspense>
    </>
  );
}
