import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { BlockquoteClasses } from '../Blockquote';
import BlockquoteVariant from './BlockquoteVariant';

const location = 'Blockquote/variants/1';

let classes: BlockquoteClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`space-y-4 @container`,
    '@xl': tw`@xl:space-y-6`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl': tw`@xl:space-y-6`,
  },
  blockquoteContainer: tw`space-y-4 py-6 @container`,

  blockquote: {
    default: tw`bg-body-light prose relative max-w-full rounded-lg p-4`,
    after: tw`after:bg-body-light after:absolute after:-bottom-2 after:left-12 after:h-4 after:w-4 after:-translate-x-1/2 after:rotate-45 after:transform`,
    '@xl': tw`@xl:p-5`,
    '@3xl': tw`@3xl:p-6`,
    '@5xl': tw`@5xl:p-8`,
  },
  blockquoteName: {
    default: tw`text-heading text-[16px] font-bold`,
    sm: tw`sm:text-[16px]`,
    md: tw`md:text-[18px]`,
    lg: tw`lg:text-[20px]`,
  },
};

const blockquoteVariant: BlockquoteVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default blockquoteVariant;
