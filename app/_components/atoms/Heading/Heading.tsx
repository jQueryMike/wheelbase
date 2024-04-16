import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import cn from 'classnames';

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
  const HeadingElement = tag || HeadingTag.H2;
  const classes = buildClasses(headingClasses, overrides);
  // ! Left for reference
  // const styling = {
  //   spacing,
  //   fontSize: size,
  //   fontWeight: fontWeight || (textType === 'heading' ? 'Bold' : 'Medium'),
  // };
  return (
    <BaseComponent
      as="div"
      className={classes.root}
      styling={styling}
      stylingOptions={{ atomicType: 'atom', textType }}
      data-testid={dataTestId}
    >
      <HeadingElement className={cn(classes?.heading)} data-testid={dataTestId}>
        {text}
      </HeadingElement>
    </BaseComponent>
  );
};

export default Heading;
