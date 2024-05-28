import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import { ImageBlockProps } from './ImageBlock.types';
import imageBlockClasses from './ImageBlock.classes';
import { Block } from '@types';
import { Image } from '@components/atoms';

const ImageBlock = ({ imageBlock: image, styling, overrides }: ImageBlockProps & Block) => {
  const classes = buildClasses(imageBlockClasses, overrides);
  return (
    <BaseComponent as="div" className={classes.root} styling={styling} stylingOptions={{ atomicType: 'organism' }}>
      <section className="relative overflow-hidden w-full max-h-[360px] md:max-h-[420] lg:md:max-h-[500] aspect-[1/1] md:aspect-[3/1] lg:aspect-[4/1] lg:max-h-[500px]">
        <div className="absolute inset-0">
            {/* <Image src={'/'} alt="" width="0" height="0" decoding="async" data-nimg="1" className="h-full w-full object-cover object-center" sizes="100vw" ></Image> */}
            
            
            {image && (
                <div
                className={''}
                data-testid="image-container"
                >
                    <Image className={classes?.image} {...image} />
                </div>
          )}
        </div>
        </section>
    </BaseComponent>
  );
};

export default ImageBlock;
