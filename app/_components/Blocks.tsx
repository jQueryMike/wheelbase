/* eslint-disable import/no-cycle */
import { Block } from '@types';
import dynamic from 'next/dynamic';
import { ComponentType, Suspense } from 'react';

const atoms = {
  Button: dynamic(() => import('./atoms/Button/Button'), {}),
  Heading: dynamic(() => import('./atoms/Heading/Heading'), {}),
  Image: dynamic(() => import('./atoms/Image/Image'), {}),
  Subheading: dynamic(() => import('./atoms/Subheading/Subheading'), {}),
  Text: dynamic(() => import('./atoms/Text/Text'), {}),
};

const molecules = {
  Headings: dynamic(() => import('./molecules/Headings/Headings'), {}),
  Features: dynamic(() => import('./molecules/Features/Features'), {}),
};

const organisms = {
  Hero: dynamic(() => import('./organisms/Hero/Hero'), {}),
};

/**
 * Map of all blocks
 */
const BLOCKS: {
  [key: string]: ComponentType<any>;
} = {
  ...atoms,
  ...molecules,
  ...organisms,
};

/**
 * Render a block
 */
export async function RenderBlocks({ name, id, ...props }: Block) {
  const Component = BLOCKS[name] ?? (() => <pre>{JSON.stringify({ name, id, props }, null, 2)}</pre>);
  // console.log('RenderBlocks', { name, id, props });
  return (
    <Suspense fallback={<div>Loading...</div>} key={id}>
      <Component {...props} />
    </Suspense>
  );
}

export default BLOCKS;
