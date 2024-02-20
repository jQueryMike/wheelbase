import * as Atoms from './atoms';
import * as Molecules from './molecules';
import * as Organisms from './organisms';
import { VARIES } from './types';

const atoms: VARIES<typeof Atoms, 'HeadingSize' | 'HeadingTag' | 'Icon'> = {
  Button: async (variant: string) => import(`./atoms/Button/variants/${variant}`),
  Heading: async (variant: string) => import(`./atoms/Heading/variants/${variant}`),
  Image: async (variant: string) => import(`./atoms/Image/variants/${variant}`),
  Text: async (variant: string) => import(`./atoms/Text/variants/${variant}`),
};

const molecules: VARIES<typeof Molecules> = {
  ButtonList: async (variant: string) => import(`./molecules/ButtonList/variants/${variant}`),
};

const organisms: VARIES<typeof Organisms> = {
  Hero: async (variant: string) => import(`./organisms/Hero/variants/${variant}`),
  TextAndImage: async (variant: string) => import(`./organisms/TextAndImage/variants/${variant}`),
};

const VARIANTS = {
  ...atoms,
  ...molecules,
  ...organisms,
};

export default VARIANTS;
