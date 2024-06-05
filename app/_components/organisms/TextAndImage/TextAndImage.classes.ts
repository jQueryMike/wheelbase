/* eslint-disable no-nested-ternary */
import cn from 'classnames';
import { ClassesBuilder, tw } from '@utils';

const location = 'TextAndImage/TextAndImage.classes';

const classes = ({ imageAsBackground = false, reverse = false }) => ({
  root: cn(imageAsBackground ? 'relative overflow-hidden' : '@container/image-with-text', {
    'grid-flow-dense': reverse,
  }),
  rootInner: {
    default: tw``,
  },
  container: {
    default: tw`container mx-auto grid h-full gap-6`,
    md: tw`md:grid-cols-2 md:gap-12`,
    lg: tw`lg:gap-16`,
    xl: tw`xl:gap-20`,
  },
  headingsContainer: {
    default: tw`space-y-2`,
  },
  contentAreaContainer: {
    default: tw`space-y-4`,
    '@xl/image-with-text': tw``,
  },
  tint: 'absolute top-0 left-0 h-full w-full pointer-events-none z-10',
  image: tw`object-cover`,
  contentContainer: imageAsBackground
    ? 'z-20'
    : reverse
    ? 'order-2 my-8 flex flex-col justify-center md:my-16 lg:my-20 xl:my-24'
    : 'my-8 flex flex-col justify-center md:my-16 lg:my-20 xl:my-24',
  imageContainer: imageAsBackground
    ? '[&>div>img]:absolute [&>div>img]:top-1/2 [&>div>img]:left-1/2 [&>div>img]:h-full [&>div>img]:w-full [&>div>img]:translate-y-[-50%] [&>div>img]:translate-x-[-50%]'
    : reverse
    ? 'relative order-1'
    : 'relative',
});

// eslint-disable-next-line @typescript-eslint/no-shadow
const textAndImageClasses = (props: any) => new ClassesBuilder({ location, classes: classes(props) }).classes;

export default textAndImageClasses;
