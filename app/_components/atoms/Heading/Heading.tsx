import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';

import headingClasses from './Heading.classes';
import { HeadingProps, HeadingTag } from './Heading.types';

const Heading = async ({
  text,
  tag,
  textType = 'heading',
  styling,
  overrides,
  'data-testid': dataTestId = 'heading',
}: HeadingProps) => {
  console.log({ text, styling });
  const classes = buildClasses(headingClasses, overrides);
  return (
    <BaseComponent
      as={tag || HeadingTag.H2}
      className={classes.root}
      styling={styling}
      stylingOptions={{ atomicType: 'atom', textType }}
      data-testid={dataTestId}
    >
      {text}
    </BaseComponent>
  );
};

export default Heading;
