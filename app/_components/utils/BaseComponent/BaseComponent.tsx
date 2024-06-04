import { BaseComponentProps } from './BaseComponent.types';
import { buildStyling } from '@utils/buildStyling';
import cn from 'classnames';
import { PropsWithChildren } from 'react';

const BaseComponent = <T extends keyof HTMLElementTagNameMap>({
  as,
  className,
  styling,
  stylingOptions = { atomicType: 'organism' },
  children,
  datatestid,
}: PropsWithChildren<BaseComponentProps<T>>) => {
  const Component = as || 'section';
  const [baseClasses, baseVars] = buildStyling(styling, stylingOptions);

  return (
    // @ts-ignore - TS doesn't like the `as` prop as too generic
    <Component className={cn(className, baseClasses)} style={baseVars} data-testid={datatestid}>
      {children}
    </Component>
  );
};

export default BaseComponent;
