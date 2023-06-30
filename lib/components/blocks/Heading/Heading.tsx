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

export type HeadingClasses<T> = {
  [key in 'root' | 'heading']?: T;
};

export interface HeadingProps {
  classes?: HeadingClasses<string>;
  text?: string;
  tag?: HeadingTag;
}

const Heading = ({ classes = {}, text, tag = HeadingTag.H2 }: HeadingProps) => {
  const HeadingElement = tag;

  return (
    <div className={classes.root}>
      <HeadingElement className={classes.heading} data-testid="heading">
        {text}
      </HeadingElement>
    </div>
  );
};

export default Heading;
