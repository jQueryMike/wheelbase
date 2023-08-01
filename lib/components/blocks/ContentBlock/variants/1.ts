import ClassesBuilder, { ClassesProperty, tw } from '@utilities/ClassesBuilder';

import { ContentBlockClasses } from '../ContentBlock';
import ContentBlockVariant from './ContentBlockVariant';

const location = 'ContentBlock/variants/1';

let classes: ContentBlockClasses<ClassesProperty> = {};

classes = {
  root: {
    default: tw`relative mx-auto flex w-full max-w-[1600px] flex-col items-center`,
    lg: tw`lg:my-16 lg:flex-row lg:flex-wrap lg:gap-x-16 lg:px-16`,
    before: tw`before:absolute before:left-0 before:h-full before:w-full before:rounded-[64px] before:bg-[#F2EFEF] before:content-none lg:before:content-['']`,
  },
  contentBodyText: {
    default: tw`order-2 flex-1 shrink-[2] grow-[2] basis-[320px]`,
    lg: tw`lg:order-1`,
  },
  contentBodyImage: {
    default: tw`relative order-1 mx-[16px] max-w-[420px] shrink-[1] grow-[1] basis-[160px] self-center`,
    lg: tw`lg:order-2 lg:mx-0 lg:my-[-64px] lg:max-w-[640px]`,
  },
  contentWrapper: {
    default: tw`mt-[-48px] rounded-[32px] bg-[#F2EFEF] p-8 pt-[96px] text-center`,
    lg: tw`lg:mt-0 lg:rounded-none lg:bg-transparent lg:px-0 lg:py-16 lg:text-left`,
  },
  headingsContainer: tw`relative`,
  bodyContent: {
    default: tw`relative text-[#757070] [&>p]:mb-3`,
  },
  contentAreaContainer: {
    default: tw`relative mt-8 flex flex-row flex-wrap justify-center gap-2`,
    lg: tw`lg:justify-start`,
  },
  contentImg: {
    default: tw`aspect-square h-full w-full rounded-[32px] object-cover drop-shadow-2xl`,
    lg: tw`lg:rounded-[64px]`,
  },
  contentSubImg: {
    default: tw`absolute bottom-[-24px] left-6 aspect-square h-auto w-[33%] rounded-[16px] object-cover drop-shadow-xl`,
    lg: tw`lg:bottom-8 lg:left-[-32px] lg:rounded-[32px] `,
  },
};

const contentBlockVariant: ContentBlockVariant = {
  classes: new ClassesBuilder({ location, classes }).classes,
};

export default contentBlockVariant;
