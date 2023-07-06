import { ImageProps } from '@components/blocks/Image';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

const buildImageBlock = ({ id, name, content }: BlockBuilderConfig): ImageProps | undefined => {
  try {
    if (!content?.url) return undefined;

    const image: Block & ImageProps = {
      id,
      name,
      width: 100,
      height: 100,
      src: `${process.env.MEDIA_URL}${content.url}`,
      alt: content.name,
    };

    return image;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildImageBlock;
