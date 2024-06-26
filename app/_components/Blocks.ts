/* eslint-disable import/no-cycle */
import dynamic from 'next/dynamic';

import * as Layouts from './_layouts';
import * as Atoms from './atoms';
import * as Molecules from './molecules';
import * as Organisms from './organisms';
import { Comps } from './types';

const layouts: Comps<typeof Layouts> = {
  Grid: dynamic(() => import('./_layouts/Grid/Grid')),
};

const atoms: Comps<
  typeof Atoms,
  | 'Icon'
  | 'HeadingSize'
  | 'HeadingTag'
  | 'Avatar'
  | 'ImageLink'
  | 'ItemRating'
  | 'CompanyInfo'
  | 'EmailAddress'
  | 'PhoneNumbers'
  | 'SocialItem'
  | 'Address'
  | 'Map'
  | 'NavigationItem'
  | 'CompanyInfo'
  | 'DrawerNavigation'
> = {
  Button: dynamic(() => import('./atoms/Button/Button'), {}),
  Heading: dynamic(() => import('./atoms/Heading/Heading'), {}),
  Image: dynamic(() => import('./atoms/Image/Image'), {}),
  Text: dynamic(() => import('./atoms/Text/Text'), {}),
};

const molecules: Comps<typeof Molecules, 'AccordionItem' | 'ReviewItem' | 'FeatureItem'> = {
  ButtonList: dynamic(() => import('./molecules/ButtonList/ButtonList'), {}),
};

const organisms: Comps<Omit<typeof Organisms, 'Header' | 'Footer'>> = {
  Hero: dynamic(() => import('./organisms/Hero/Hero'), {}),
  TextAndImage: dynamic(() => import('./organisms/TextAndImage/TextAndImage'), {}),
  Features: dynamic(() => import('./organisms/Features/Features')),
  FeaturesList: dynamic(() => import('./organisms/FeaturesList/FeaturesList')),
  Reviews: dynamic(() => import('./organisms/Reviews/Reviews')),
  Accordion: dynamic(() => import('./organisms/Accordion/Accordion')),
  Contact: dynamic(() => import('./organisms/Contact/Contact')),
  ImageBlock: dynamic(() => import('./organisms/ImageBlock/ImageBlock')),
};
/**
 * Map of all blocks
 */
const BLOCKS = {
  ...layouts,
  ...atoms,
  ...molecules,
  ...organisms,
};

export default BLOCKS;
