// eslint-disable-next-line import/no-cycle
import BLOCKS from '@components/Blocks';
import { Heading } from '@components/atoms';
import { BaseComponent } from '@components/utils/BaseComponent';
import { Block } from '@types';
import { buildClasses } from '@utils/buildClasses';
import cn from 'classnames';
import NextImage from 'next/image';
import { Suspense } from 'react';

import heroClasses from './Hero.classes';
// eslint-disable-next-line import/no-cycle
import { HeroProps } from './Hero.types';

const Hero = async ({
  heading,
  subheading,
  image1: image,
  contentArea = [],
  imagePlacement,
  overrides,
  ...rest
}: HeroProps & Block) => {
  const classes = buildClasses(heroClasses, overrides);
  const components = contentArea.map(({ name, id, ...props }: any) => [
    name,
    BLOCKS[name as keyof typeof BLOCKS],
    id,
    props,
  ]);
  const resolvedHeading = heading ? await Heading(heading) : undefined;
  const resolvedSubheading = subheading
    ? await Heading({ ...subheading, 'data-testid': 'subheading', textType: 'subheading' })
    : undefined;
  return (
    <BaseComponent className={classes.root} {...rest}>
      <div className={classes.rootInner}>
        <div className={classes.container}>
          <div
            className={cn(
              imagePlacement === 'left' ? classes?.heroContentContainerReverse : classes?.heroContentContainer,
            )}
          >
            {(heading || subheading) && (
              <div className={classes?.headingsContainer} data-testid="headings-container">
                {resolvedHeading}
                {resolvedSubheading}
              </div>
            )}
            {components?.length > 0 && (
              <div className={classes?.contentAreaContainer} data-testid="content-area">
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
              className={cn(imagePlacement === 'left' ? classes?.imageContainerReverse : classes?.imageContainer)}
              data-testid="image-container"
            >
              <NextImage className={classes?.image} {...image} data-testid="image" />
            </div>
          )}
        </div>
      </div>
    </BaseComponent>
  );
};

export default Hero;
