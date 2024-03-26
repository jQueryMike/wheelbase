// eslint-disable-next-line import/no-cycle
import BLOCKS from '@components/Blocks';
import { Heading } from '@components/atoms';
import { Block } from '@types';
import { buildClasses } from '@utils/buildClasses';
import cn from 'classnames';
import NextImage from 'next/image';
import { CSSProperties, Suspense } from 'react';

// eslint-disable-next-line import/no-cycle
import { HeroProps } from './Hero.types';

const GradientDirectionMap = {
  'Left to Right': 'to-l',
  'Right to Left': 'to-r',
  'Top to Bottom': 'to-b',
  'Bottom to Top': 'to-t',
  'Top Left to Bottom Right': 'to-br',
  'Top Right to Bottom Left': 'to-bl',
  'Bottom Left to Top Right': 'to-tr',
  'Bottom Right to Top Left': 'to-tl',
};

const Hero = async ({
  variant = '1',
  heading,
  subheading,
  image1: image,
  contentArea = [],
  imagePlacement,
  backgroundColor,
  backgroundGradientColor,
  gradientDirection,
  overrides,
}: HeroProps & Block) => {
  const {
    default: { classes: variantClasses },
  } = await import(`./variants/${variant}`);
  const classes = buildClasses(variantClasses, overrides);
  const components = contentArea.map(({ name, id, ...props }: any) => [
    name,
    BLOCKS[name as keyof typeof BLOCKS],
    id,
    props,
  ]);
  const resolvedHeading = heading ? await Heading(heading) : undefined;
  const resolvedSubheading = subheading ? await Heading({ ...subheading, 'data-testid': 'subheading' }) : undefined;
  return (
    <section
      className={cn(
        classes?.root,
        [`bg-gradient-${gradientDirection ? GradientDirectionMap[gradientDirection] : 'none'}`],
        {
          [`bg-[${backgroundColor?.hex}]`]: backgroundColor?.hex && !backgroundGradientColor,
          [`from-[${backgroundColor?.hex}]`]: backgroundColor?.hex && backgroundGradientColor,
          [`to-[${backgroundGradientColor?.hex}]`]: backgroundGradientColor?.hex,
        },
      )}
      style={
        {
          '--tw-gradient-from': backgroundColor?.hex,
          '--tw-gradient-to': backgroundGradientColor?.hex,
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to, --tw-gradient-from)',
        } as CSSProperties
      }
    >
      <div className={classes?.rootInner}>
        <div className={classes?.container}>
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
    </section>
  );
};

export default Hero;
