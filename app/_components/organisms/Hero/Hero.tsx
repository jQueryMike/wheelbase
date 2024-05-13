// eslint-disable-next-line import/no-cycle
import BLOCKS from '@components/Blocks';
import { Heading, Image } from '@components/atoms';
import { BaseComponent } from '@components/utils/BaseComponent';
import { Block } from '@types';
import { buildClasses } from '@utils/buildClasses';
import cn from 'classnames';
import { Suspense } from 'react';

import heroClasses from './Hero.classes';
// eslint-disable-next-line import/no-cycle
import { HeroProps } from './Hero.types';

const Hero = ({
  heading,
  subheading,
  image1: image,
  contentArea = [],
  reverse,
  overrides,
  styling,
  ...rest
}: HeroProps & Block) => {
  const classes = buildClasses(heroClasses, overrides);
  const components = contentArea.map(({ name, id, ...props }: any) => [
    name,
    BLOCKS[name as keyof typeof BLOCKS],
    id,
    props,
  ]);
  return (
    <BaseComponent className={classes.root} styling={styling} stylingOptions={{ atomicType: 'organism' }} {...rest}>
      <div className={classes.rootInner}>
        <div className={classes.container}>
          <div className={cn(reverse === true ? classes?.heroContentContainerReverse : classes?.heroContentContainer)}>
            {(heading || subheading) && (
              <div className={classes?.headingsContainer} data-testid="headings-container">
                {heading && <Heading {...heading} />}
                {subheading && <Heading {...subheading} data-testid="subheading" textType="subheading" />}
              </div>
            )}
            {components?.length > 0 && (
              <div className={classes?.contentAreaContainer} data-testid="content-area" style={{ marginTop: '-6px' }}>
                {components.map(([name, Component, id, props]: any) => (
                  <Suspense fallback={<div>Loading {name}...</div>} key={id}>
                    <Component {...props} />
                  </Suspense>
                ))}
              </div>
            )}
          </div>
          {image && (
            <div
              className={cn(reverse === true ? classes?.imageContainerReverse : classes?.imageContainer)}
              data-testid="image-container"
            >
              <Image className={classes?.image} styling={image.styling} src={image.src} alt={image.alt} />
            </div>
          )}
        </div>
      </div>
    </BaseComponent>
  );
};

export default Hero;
