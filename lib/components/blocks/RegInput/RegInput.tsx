import { BlockList } from '@components/utility-components/BlockList';
import Block from '@interfaces/Block';
import cn from 'classnames';
import Link from 'next/link';
import React, { useState } from 'react';

import { Headings, HeadingsProps } from '../Headings';

export type RegInputClasses<T> = {
  [key in
    | 'root'
    | 'rootInner'
    | 'headingsContainer'
    | 'regContainer'
    | 'regInputWrapper'
    | 'regInput'
    | 'regInputButton'
    | 'contentAreaContainer'
    | 'contentArea1Container'
    | 'contentArea2Container']?: T;
};
export interface RegInputProps {
  classes?: RegInputClasses<string>;
  clickBuyUrl?: string;
  headings?: HeadingsProps;
  contentArea1?: Block[];
  contentArea2?: Block[];
}

const RegInput = ({ classes = {}, clickBuyUrl, headings, contentArea1, contentArea2 }: RegInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const encodedReg = (reg: string) => {
    try {
      return btoa(reg);
    } catch (error) {
      console.error('Error encoding registration:', error);
      return '';
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.rootInner}>
        {headings && (
          <div className={classes.headingsContainer}>
            <Headings {...headings} />
          </div>
        )}
        {contentArea1 && contentArea1?.length > 0 && (
          <div className={cn(classes.contentAreaContainer, classes.contentArea1Container)}>
            <BlockList blocks={contentArea1} />
          </div>
        )}
        <div className={classes.regContainer}>
          <div className={classes.regInputWrapper}>
            <input type="text" name="RegInput" className={classes.regInput} onChange={handleInputChange} />
          </div>
          <Link className={classes.regInputButton} href={clickBuyUrl + encodedReg(inputValue)}>
            Get a valuation
          </Link>
        </div>
        {contentArea2 && contentArea2?.length > 0 && (
          <div className={cn(classes.contentAreaContainer, classes.contentArea2Container)}>
            <BlockList blocks={contentArea2} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RegInput;
