import { Heading, HeadingProps, HeadingSize, HeadingTag } from '../Heading';
import { Subheading, SubheadingProps } from '../Subheading';

export type HeadingsClasses<T> = {
  [key in 'root' | 'rootInner' | 'headingContainer' | 'subheadingContainer']?: T;
};

export interface HeadingsProps {
  classes?: HeadingsClasses<string>;
  heading?: HeadingProps;
  subheading?: SubheadingProps;
}

const Headings = ({ classes = {}, heading, subheading }: HeadingsProps) => (
  <div className={classes.root}>
    <div className={classes.rootInner}>
      {heading && (
        <div className={classes.headingContainer}>
          <Heading tag={HeadingTag.H2} size={HeadingSize.Large} {...heading} />
        </div>
      )}
      {subheading && (
        <div className={classes.subheadingContainer}>
          <Subheading {...subheading} />
        </div>
      )}
    </div>
  </div>
);

export default Headings;
