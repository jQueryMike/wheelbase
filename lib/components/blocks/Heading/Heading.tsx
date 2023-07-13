import cn from 'classnames';

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

export enum HeadingSize {
  XL = 'Xl',
  LG = 'Lg',
  MD = 'Md',
  SM = 'Sm',
  XS = 'Xs',
}

export type HeadingClasses<T> = {
  [key in 'root' | 'heading' | `heading${'Xl' | 'Lg' | 'Md' | 'Sm' | 'Xs'}`]?: T;
};

export interface HeadingProps {
  classes?: HeadingClasses<string>;
  text?: string;
  tag?: HeadingTag;
  size?: HeadingSize;
}

const Heading = ({ classes = {}, text, tag = HeadingTag.H2, size = HeadingSize.LG }: HeadingProps) => {
  const HeadingElement = tag;

  return (
    <div className={classes.root}>
      <HeadingElement className={cn(classes.heading, classes[`heading${size}`])} data-testid="heading">
        {text}
      </HeadingElement>
    </div>
  );
};

export default Heading;
