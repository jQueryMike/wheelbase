// eslint-disable-next-line import/no-cycle
import BLOCKS from '@components/Blocks';
import { Heading } from '@components/atoms';
import { AtomicType } from '@types';
import { buildClasses } from '@utils/buildClasses';
import { buildStyling } from '@utils/buildStyling';
import cn from 'classnames';
import NextImage from 'next/image';
import { CSSProperties, Suspense } from 'react';

// eslint-disable-next-line import/no-cycle
import { TextAndImageProps } from './TextAndImage.types';

enum GradientDirection {
  RTL = 'Right to Left',
  LTR = 'Left to Right',
}

const BLOCK_TYPE: AtomicType = 'organism';

const TextAndImage = async ({
  variant = '1',
  heading,
  subheading,
  image1: image,
  contentArea = [],
  reverse,
  backgroundColor,
  backgroundGradientColor,
  gradientDirection,
  overrides,
  spacing,
}: TextAndImageProps) => {
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
  const resolvedSubheading = subheading ? await Heading(subheading) : undefined;
  return (
    <section
      className={cn(
        classes?.root,
        {
          [`bg-[${backgroundColor?.hex}]`]: backgroundColor?.hex && !backgroundGradientColor,
          'bg-gradient-to-br': gradientDirection === GradientDirection.LTR,
          'bg-gradient-to-bl': gradientDirection === GradientDirection.RTL,
          [`from-[${backgroundColor?.hex}]`]: backgroundColor?.hex && backgroundGradientColor,
          [`to-[${backgroundGradientColor?.hex}]`]: backgroundGradientColor?.hex,
        },
        buildStyling({ spacing }, BLOCK_TYPE),
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
        <div className={cn(classes?.container, { 'grid-flow-dense': reverse })}>
          <div
            className={reverse ? classes?.textAndImageContentContainerReverse : classes?.textAndImageContentContainer}
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
              className={cn(reverse ? classes?.imageContainerReverse : classes?.imageContainer)}
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

export default TextAndImage;
