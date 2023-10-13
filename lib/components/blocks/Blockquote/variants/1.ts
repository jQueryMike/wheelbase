import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { BlockquoteClasses } from '../Blockquote';
import BlockquoteVariant from './BlockquoteVariant';

const location = 'Blockquote/variants/1';

let classes: BlockquoteClasses<ClassesProperty> = {};

classes = {
  root: tw`@container/blockquote`,
  rootInner: {
    default: tw`space-y-4`,
    '@xl/blockquote': tw`@xl/blockquote:space-y-6`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl/blockquote': tw`@xl/blockquote:space-y-6`,
  },
  blockquoteContainer: tw`space-y-4 py-2`,

  blockquote: {
    default: tw`prose relative max-w-full rounded-lg bg-body-alt p-4`,
    after: tw`after:absolute after:-bottom-2 after:left-12 after:h-4 after:w-4 after:-translate-x-1/2 after:rotate-45 after:transform after:bg-body-alt`,
    '@xl/blockquote': tw`@xl/blockquote:p-5`,
    '@3xl/blockquote': tw`@3xl/blockquote:p-6`,
    '@5xl/blockquote': tw`@5xl/blockquote:p-8`,
  },
  blockquoteName: {
    default: tw`text-[16px] font-bold text-heading`,
    sm: tw`sm:text-[16px]`,
    md: tw`md:text-[18px]`,
    lg: tw`lg:text-[20px]`,
  },
};

const blockquoteVariant: BlockquoteVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default blockquoteVariant;
