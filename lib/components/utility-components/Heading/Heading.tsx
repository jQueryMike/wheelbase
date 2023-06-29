import { PropsWithChildren } from 'react';

// export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';

export enum HeadingTag {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  DIV = 'div',
  SPAN = 'span',
  P = 'p',
}

export interface HeadingProps extends PropsWithChildren {
  tag?: HeadingTag;
  className?: string;
}

const Heading = ({ tag = HeadingTag.H1, className, children }: HeadingProps) => {
  const HeadingTagComponent = tag;

  return (
    <HeadingTagComponent className={className} data-testid="heading">
      {children}
    </HeadingTagComponent>
  );
};

export default Heading;
