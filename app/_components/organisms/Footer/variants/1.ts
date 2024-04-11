import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { FooterClasses } from '../Footer.types';
import FooterVariant from './FooterVariant';

const location = 'Footer/variants/1';

let classes: FooterClasses<ClassesProperty> = {};

classes = {
  root: tw``,
};

const footerVariant: FooterVariant = { classes: new ClassesBuilder({ location, classes }).classes };

export default footerVariant;
