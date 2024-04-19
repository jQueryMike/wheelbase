// import cn from 'classnames';
import { BaseComponent } from '@components/utils/BaseComponent';
import { buildClasses } from '@utils/buildClasses';
import iconClasses from './Icon.classes';

// import { CSSProperties } from 'react';
// import { hexToRgb, rgbString } from '@utils';
import { IconProps } from './Icon.types';

    // "{iconContainer} inline-flex justify-center items-center bg-accent bg-opacity-5 rounded-lg"

const Icon = async ({ icon, styling, overrides }: IconProps) => {

  const classes = buildClasses(iconClasses, overrides);

  return (
  <BaseComponent className={classes.root} as="div" styling={styling} stylingOptions={{ atomicType: "atom" }}> 
    {/* <span className={cn(`inline-block`, {[`bg-[${iconColour?.hex}]`]: iconColour?.hex})} aria-hidden="true" style={
    {
      '--body-alt': backgroundColour?.hex ? rgbString(hexToRgb(backgroundColour?.hex as `#${string}`)) : undefined,
      '--tw-bg-opacity': (backgroundColour?.opacity ?? 100) / 100,
    } as CSSProperties
  }> */}
      <i className={`${icon} text-4xl` } />
    {/* </span> */}
  </BaseComponent>
)};

export default Icon;
