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
  const fullscreen = image.fullscreen;

  return (
    <BaseComponent
      as="div"
      className={!fullscreen ? classes.root : classes.rootFullscreen}
      styling={styling}
      stylingOptions={{ atomicType: 'organism' }}
    >
      <div
        className={
          !fullscreen
            ? classes.imageContainer
            : classes.imageContainerFullscreen
        }
        data-testid="fullscreen-image-container"
      >
        <NextImage
          className={!fullscreen ? classes.image : classes.imageFullscreen}
          {...image}
        />
      </div>
    </BaseComponent>
  );
};

export default ImageBlock;
