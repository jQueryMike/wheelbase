/* eslint-disable react/no-danger */
import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import * as DOMPurify from 'isomorphic-dompurify';

import textContentClasses from './Text.classes';
import { TextProps } from './Text.types';

const Text = ({ text, overrides, styling }: TextProps) => {
  if (!text) return null;

  const classes = buildClasses(textContentClasses, overrides);
  return (
    <BaseComponent
      as="div"
      data-testid="text-content"
      styling={styling}
      stylingOptions={{ atomicType: 'atom' }}
      className={classes?.root}
    >
      <div
        data-testid="text-content-text"
        className={classes?.textContent}
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }}
      />
    </BaseComponent>
  );
};

export default Text;
