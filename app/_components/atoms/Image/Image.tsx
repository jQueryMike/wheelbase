import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import NextImage from 'next/image';

import imageClasses from './Image.classes';
import { ImageProps } from './Image.types';

const Image = ({ overrides, styling, ...rest }: ImageProps) => {
  const classes = buildClasses(imageClasses, overrides);
  const { width = 1000, height = 1000 } = rest;
  return (
    <BaseComponent as="div" styling={styling} stylingOptions={{ atomicType: "atom" }} data-testid="image">
      <NextImage className={classes?.image} height={height} width={width} style={{ width: '100%', height: 'auto' }} {...rest} />
    </BaseComponent>
  );
};

export default Image;
