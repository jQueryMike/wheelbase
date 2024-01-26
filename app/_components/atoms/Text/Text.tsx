/* eslint-disable react/no-danger */
import { buildClasses } from '@utils/buildClasses';
import * as DOMPurify from 'isomorphic-dompurify';

import { TextProps } from './Text.types';

const Text = async ({ variant = '1', text, overrides }: TextProps) => {
  if (!text) return null;

  const {
    default: { classes: variantClasses },
  } = await import(`./variants/${variant}`);
  const classes = buildClasses(variantClasses, overrides);

  return (
    <div className={classes?.root}>
      <div className={classes?.textContent} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }} />
    </div>
  );
};

export default Text;
