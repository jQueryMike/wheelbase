import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { BlockquoteClasses } from '../Blockquote';
import BlockquoteVariant from './BlockquoteVariant';

const location = 'Blockquote/variants/2';

let classes: BlockquoteClasses<ClassesProperty> = {};

classes = {
  root: tw`{root}`,

  rootInner: {
    default: tw`{rootInner}`,
  },
  headingsContainer: {
    default: tw`{headingsContainer}`,
  },
  contentAreaContainer: {
    default: tw`{contentAreaContainer}`,
  },
  blockquoteContainer: tw`{blockquoteContainer} mt-10`,

  blockquote: {
    default: tw`{blockquote} prose relative max-w-full rounded-lg bg-body-alt p-4`,
    after: tw`after:absolute after:-bottom-2 after:left-12 after:h-4 after:w-4 after:-translate-x-1/2 after:rotate-45 after:transform after:bg-body-alt`,
  },
  blockquoteName: {
    default: tw`{blockquoteName} text-[16px] font-bold text-heading`,
    sm: tw`sm:text-[16px]`,
    md: tw`md:text-[18px]`,
    lg: tw`lg:text-[20px]`,
  },
};

const blockquoteVariant: BlockquoteVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default blockquoteVariant;
