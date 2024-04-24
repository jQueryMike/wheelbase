import { Image } from '@components/atoms';
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';

import imageLinkClasses from './ImageLink.classes';
import { ImageLinkProps } from './ImageLink.types';

const ImageLink = ({ styling, imageLink, overrides }: ImageLinkProps) => {
  const classes = buildClasses(imageLinkClasses, overrides);

  return (
    <BaseComponent styling={styling} stylingOptions={{ atomicType: 'atom' }}>
      <Image
        alt={imageLink.alt || 'ImageLink'}
        loading={imageLink.loading || 'lazy'}
        width={imageLink.width || '128'}
        height={imageLink.height || '128'}
        className={classes?.imageLink}
        src={imageLink.src}
        id=""
        name=""
      />
    </BaseComponent>
  );
};

export default ImageLink;
