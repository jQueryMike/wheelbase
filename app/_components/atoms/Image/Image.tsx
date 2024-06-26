import NextImage from 'next/image';
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import imageClasses from './Image.classes';
import { ImageProps } from './Image.types';

const Image = ({ overrides, styling, imageAsBackground, ...rest }: ImageProps) => {
  const classes = buildClasses(imageClasses, overrides);
  return (
    <BaseComponent as="div" styling={styling} stylingOptions={{ atomicType: 'atom' }} datatestid="image">
      <NextImage className={classes?.image} {...rest} />
    </BaseComponent>
  );
};

export default Image;
