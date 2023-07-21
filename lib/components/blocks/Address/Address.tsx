/* eslint-disable react/no-danger */
import { BlockList } from '@components/utility-components/BlockList';
import Block from '@interfaces/Block';
import * as DOMPurify from 'isomorphic-dompurify';

import { Headings, HeadingsProps } from '../Headings';

export type AddressClasses<T> = {
  [key in
    | 'root'
    | 'container'
    | 'headingsContainer'
    | 'contentAreaContainer'
    | 'contentArea1Container'
    | 'contentArea2Container'
    | 'addressContainer'
    | 'address']?: T;
};

export interface AddressProps {
  classes?: AddressClasses<string>;
  headings?: HeadingsProps;
  address?: string;
  contentArea1?: Block[];
  contentArea2?: Block[];
}

const Address = ({ classes = {}, headings, address, contentArea1 = [], contentArea2 = [] }: AddressProps) => (
  <div className={classes.root}>
    <div className={classes.container}>
      {headings && (
        <div className={classes.headingsContainer}>
          <Headings {...headings} />
        </div>
      )}
      {contentArea1?.length > 0 && (
        <div className={classes.contentArea1Container}>
          <BlockList blocks={contentArea1} />
        </div>
      )}
      <div className={classes.addressContainer}>
        {address && (
          <address className={classes.address} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(address) }} />
        )}
      </div>
      {contentArea2?.length > 0 && (
        <div className={classes.contentArea2Container}>
          <BlockList blocks={contentArea2} />
        </div>
      )}
    </div>
  </div>
);

export default Address;
