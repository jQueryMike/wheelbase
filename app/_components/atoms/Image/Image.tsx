import { Block } from '@types';
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import NextImage from 'next/image';

import imageClasses from './Image.classes';
import { ImageProps } from './Image.types';

const Image = ({ overrides, styling, ...rest }: ImageProps & Block) => {
  const classes = buildClasses(imageClasses, overrides);
  return (
    <BaseComponent as="div" styling={styling} stylingOptions={{ atomicType: 'atom' }}>
      <NextImage className={classes?.image} {...rest} />
    </BaseComponent>
  );
};

export default Image;
