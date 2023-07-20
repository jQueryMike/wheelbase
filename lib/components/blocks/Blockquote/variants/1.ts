import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { BlockquoteClasses } from '../Blockquote';
import BlockquoteVariant from './BlockquoteVariant';

const location = 'Blockquote/variants/1';

let classes: BlockquoteClasses<ClassesProperty> = {};

classes = {
  root: tw`h-auto bg-blue-900 p-2`,
  container: tw`relative mb-2 w-1/2 flex-1 rounded-lg p-2`,
  headingsContainer: tw`font-extrabold text-blue-900`,
  textContainer: tw`text-blue-900`,
  blockquoteColour: tw`bg-yellow-400`,
  blockquoteContainer: tw`ml-4 p-2`,
  blockquoteArrow: tw`absolute left-[90%] mt-1 h-2 w-2 -translate-x-1/2 rotate-45 transform`,
};

const blockquoteVariant: BlockquoteVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default blockquoteVariant;
