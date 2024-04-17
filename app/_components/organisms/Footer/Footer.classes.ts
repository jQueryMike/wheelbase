import { ClassesBuilder, ClassesProperty, tw } from '@utils';

import { FooterClasses } from './Footer.types';

const location = 'Footer/Footer.classes';

let classes: FooterClasses<ClassesProperty> = {};

classes = {
  root: tw``,
};

const footerClasses = new ClassesBuilder({ location, classes }).classes;

export default footerClasses;
