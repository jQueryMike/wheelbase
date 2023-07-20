import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { BlockquoteClasses } from '../Blockquote';
import BlockquoteVariant from './BlockquoteVariant';

const location = 'Blockquote/variants/1';

let classes: BlockquoteClasses<ClassesProperty> = {};

classes = {
  root: tw`space-y-4`,
  blockquoteContainer: tw`space-y-4`,
  blockquote: {
    default: tw`relative bg-gray-200 p-4`,
    after: tw`after:absolute after:-bottom-2 after:left-10 after:h-4 after:w-4 after:-translate-x-1/2 after:rotate-45 after:transform after:bg-gray-200`,
  },
  blockquoteName: tw`font-bold`,
};

const blockquoteVariant: BlockquoteVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default blockquoteVariant;
