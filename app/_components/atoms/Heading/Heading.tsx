import cn from 'classnames';

import { HeadingProps, HeadingSize, HeadingTag } from './Heading.types';

const Heading = ({ classes = {}, text, tag, size = HeadingSize.Large }: HeadingProps) => {
  const HeadingElement = tag || HeadingTag.H2;

  return (
    <div className={classes.root}>
      <HeadingElement className={cn(classes.heading, classes[`heading${size}`])} data-testid="heading">
        {text}
      </HeadingElement>
    </div>
  );
};

export default Heading;
