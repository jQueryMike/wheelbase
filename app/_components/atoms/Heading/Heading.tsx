import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';

import headingClasses from './Heading.classes';
import { HeadingProps, HeadingTag } from './Heading.types';

const Heading = ({
  text,
  tag,
  textType = 'heading',
  styling,
  overrides,
  'data-testid': dataTestId = 'heading',
}: HeadingProps) => {
  const classes = buildClasses(headingClasses, overrides);
  return (
    <BaseComponent
      as={tag || HeadingTag.H2}
      className={classes.root}
      styling={styling}
      stylingOptions={{ atomicType: 'atom', textType }}
      datatestid={dataTestId}
    >
      {text}
    </BaseComponent>
  );
};

export default Heading;
