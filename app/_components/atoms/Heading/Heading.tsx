import cn from 'classnames';

import { HeadingProps, HeadingSize, HeadingTag } from './Heading.types';
import fallbackStyle from './variants/1';

const Heading = ({ classes = fallbackStyle.classes, text, tag, size = HeadingSize.Large }: HeadingProps) => {
  const HeadingElement = tag || HeadingTag.H2;

  return (
    <div className={classes?.root}>
      <HeadingElement className={cn(classes?.heading, classes?.[`heading${size}`])} data-testid="heading">
        {text}
      </HeadingElement>
    </div>
  );
};

export default Heading;
