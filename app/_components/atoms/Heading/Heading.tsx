import { buildClasses } from '@utils/buildClasses';
import cn from 'classnames';

import { HeadingProps, HeadingSize, HeadingTag } from './Heading.types';

const Heading = async ({ variant = '1', text, tag, size = HeadingSize.Large, overrides }: HeadingProps) => {
  const HeadingElement = tag || HeadingTag.H2;
  const {
    default: { classes: variantClasses },
  } = await import(`./variants/${variant}`);
  const classes = buildClasses(variantClasses, overrides);

  return (
    <div className={classes?.root}>
      <HeadingElement className={cn(classes?.heading, classes?.[`heading${size}`])} data-testid="heading">
        {text}
      </HeadingElement>
    </div>
  );
};

export default Heading;
