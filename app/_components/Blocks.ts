/* eslint-disable import/no-cycle */
import dynamic from 'next/dynamic';

import * as Atoms from './atoms';
import * as Molecules from './molecules';
import * as Organisms from './organisms';
import { Comps } from './types';

const atoms: Comps<typeof Atoms, 'HeadingSize' | 'HeadingTag' | 'Icon'> = {
  Button: dynamic(() => import('./atoms/Button/Button'), {}),
  Heading: dynamic(() => import('./atoms/Heading/Heading'), {}),
  Image: dynamic(() => import('./atoms/Image/Image'), {}),
  Text: dynamic(() => import('./atoms/Text/Text'), {}),
};

const molecules: Comps<typeof Molecules> = {
  ButtonList: dynamic(() => import('./molecules/ButtonList/ButtonList'), {}),
};

const organisms: Comps<typeof Organisms> = {
  Hero: dynamic(() => import('./organisms/Hero/Hero'), {}),
  TextAndImage: dynamic(() => import('./organisms/TextAndImage/TextAndImage'), {}),
};

/**
 * Map of all blocks
 */
const BLOCKS = {
  ...atoms,
  ...molecules,
  ...organisms,
};

export default BLOCKS;