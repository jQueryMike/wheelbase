import { Image } from '@components/atoms';
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';

import imageLinkClasses from './ImageLink.classes';
import { ImageLinkProps } from './ImageLink.types';

const ImageLink = ({ styling, overrides, ...image }: ImageLinkProps) => {
  const classes = buildClasses(imageLinkClasses, overrides);

  return (
    <BaseComponent styling={styling} stylingOptions={{ atomicType: 'atom' }}>
      <Image
        alt={image.alt || 'ImageLink'}
        loading={image.loading || 'lazy'}
        width={image.width || '128'}
        height={image.height || '128'}
        className={classes?.imageLink}
        src={image.src}
        id=""
        name=""
      />
    </BaseComponent>
  );
};

export default ImageLink;
