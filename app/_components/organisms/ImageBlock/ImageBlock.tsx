import imageBlockClasses from './ImageBlock.classes';
import { ImageBlockProps } from './ImageBlock.types';
import { BaseComponent } from '@components/utils';
import { Block } from '@types';
import { buildClasses } from '@utils/buildClasses';
import NextImage from 'next/image';

const ImageBlock = ({
  imageLink: image,
  styling,
  overrides,
}: ImageBlockProps & Block) => {
  if (!image) {
    return;
  }

  const classes = buildClasses(imageBlockClasses, overrides);

  return (
    <BaseComponent
      as="div"
      className={classes?.root}
      styling={styling}
      stylingOptions={{ atomicType: 'organism' }}
    >
      <div
        className={classes?.imageContainer}
        data-testid="fullscreen-image-container"
      >
        <NextImage
          className={classes?.image}
          {...image}
          sizes="100vw"
          width="0"
          height="0"
        />
      </div>
    </BaseComponent>
  );
};

export default ImageBlock;
