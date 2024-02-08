/* eslint-disable react/no-danger */
import { HEX, hexToRgb, rgbString } from '@utils';
import { buildClasses } from '@utils/buildClasses';
import * as DOMPurify from 'isomorphic-dompurify';
import { CSSProperties } from 'react';

import { TextProps } from './Text.types';

const Text = async ({ variant = '1', text, color, overrides }: TextProps) => {
  if (!text) return null;

  const {
    default: { classes: variantClasses },
  } = await import(`./variants/${variant}`);
  const classes = buildClasses(variantClasses, overrides);

  return (
    <div
      className={classes?.root}
      style={
        {
          '--tw-text-opacity': color?.opacity,
          '--copy': rgbString(hexToRgb(color?.hex as HEX)),
          color: 'rgb(var(--copy) / var(--tw-text-opacity))',
        } as CSSProperties
      }
    >
      <div className={classes?.textContent} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(text) }} />
    </div>
  );
};

export default Text;
