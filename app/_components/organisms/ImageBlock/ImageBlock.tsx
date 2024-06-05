import { BaseComponent } from '@components/utils';
import { Block } from '@types';
import { buildLink } from '@utils';
import { buildClasses } from '@utils/buildClasses';
import NextImage from 'next/image';
import Link from 'next/link';
import cn from 'classnames';
import { ImageBlockProps } from './ImageBlock.types';
import imageBlockClasses from './ImageBlock.classes';

const ImageBlock = ({ imageLink: image, maxHeight, styling, overrides }: ImageBlockProps & Block) => {
  if (!image) {
    return null;
  }

  const classes = buildClasses(imageBlockClasses, overrides);
  const {fullscreen} = image;
  const parsedLink = buildLink(image.link);

  const renderImage = <NextImage className={!fullscreen ? classes.image : classes.imageFullscreen} {...image} />;

  return (
    <BaseComponent
      as="div"
      className={cn(!fullscreen ? classes.root : classes.rootFullscreen, `max-h-[${maxHeight}px]`)}
      styling={styling}
      stylingOptions={{ atomicType: 'organism' }}
    >
      <div
        className={!fullscreen ? classes.imageContainer : classes.imageContainerFullscreen}
        data-testid="fullscreen-image-container"
      >
        {image.link ? (
          <Link {...parsedLink} data-testid="image-link">
            {renderImage}
          </Link>
        ) : (
          renderImage
        )}
      </div>
    </BaseComponent>
  );
};

export default ImageBlock;
