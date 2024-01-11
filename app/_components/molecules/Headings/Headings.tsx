import { Heading, HeadingSize, HeadingTag, Subheading } from '../../atoms';
import { HeadingsProps } from './Headings.types';
import fallbackStyle from './variants/1';

const Headings = ({ classes = fallbackStyle.classes, heading, subheading }: HeadingsProps) => (
  <div className={classes?.root}>
    <div className={classes?.rootInner}>
      {heading && (
        <div className={classes?.headingContainer}>
          <Heading tag={HeadingTag.H2} size={HeadingSize.Large} {...heading} />
        </div>
      )}
      {subheading && (
        <div className={classes?.subheadingContainer}>
          <Subheading {...subheading} />
        </div>
      )}
    </div>
  </div>
);

export default Headings;
