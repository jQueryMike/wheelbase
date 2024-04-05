/* eslint-disable react/no-danger */
import { HEX, hexToRgb, rgbString } from '@utils';
import { buildClasses } from '@utils/buildClasses';
import { buildStyling } from '@utils/buildStyling';
import * as DOMPurify from 'isomorphic-dompurify';
import { CSSProperties } from 'react';
import { AtomicType } from '@types';
import cn from 'classnames';

import { TextProps } from './Text.types';

const BLOCK_TYPE: AtomicType = 'atom';

const Text = async ({ variant = '1', text, color, overrides, spacing }: TextProps) => {
  if (!text) return null;

  const {
    default: { classes: variantClasses },
  } = await import(`./variants/${variant}`);
  const classes = buildClasses(variantClasses, overrides);

  return (
    <div
      className={cn(classes?.root, buildStyling({ spacing }, BLOCK_TYPE))}
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
