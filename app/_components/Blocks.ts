/* eslint-disable import/no-cycle */
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

const atoms = {
  Button: dynamic(() => import('./atoms/Button/Button'), {}),
  Heading: dynamic(() => import('./atoms/Heading/Heading'), {}),
  Image: dynamic(() => import('./atoms/Image/Image'), {}),
  Text: dynamic(() => import('./atoms/Text/Text'), {}),
};

const molecules = {};

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

export default BLOCKS;
