import { BlockList } from '@components/utility-components/BlockList';
import Block from '@interfaces/Block';

import { Heading, HeadingProps, HeadingSize, HeadingTag } from '../Heading';
import { Headings, HeadingsProps } from '../Headings';
import { Subheading, SubheadingProps } from '../Subheading';

export type AddressClasses<T> = {
  [key in
    | 'root'
    | 'container'
    | 'headingsContainer'
    | 'contentAreaContainer'
    | 'contentArea1Container'
    | 'contentArea2Container'
    | 'addressContainer'
    | 'address'
    | 'title']?: T;
};

export function formatAddress(
  line1?: string,
  line2?: string,
  county?: string,
  town?: string,
  postcode?: string,
  separator: string = ', ',
): string {
  const addressLines: string[] = [];

  if (line1) addressLines.push(line1);
  if (line2) addressLines.push(line2);
  if (county) addressLines.push(county);
  if (town) addressLines.push(town);
  if (postcode) addressLines.push(postcode);

  return addressLines.join(separator);
}

export interface AddressProps {
  classes?: AddressClasses<string>;
  line1?: string;
  line2?: string;
  county?: string;
  town?: string;
  postcode?: string;
  companyName?: string;
  headings?: HeadingsProps;
  separator?: string;
  contentArea1?: Block[];
  contentArea2?: Block[];
}

const Address = ({
  classes = {},
  line1,
  line2,
  county,
  town,
  postcode,
  companyName,
  headings,
  separator = ', ',
  contentArea1,
  contentArea2,
}: AddressProps) => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {headings && (
          <div className={classes.headingsContainer}>
            <Headings {...headings} />
          </div>
        )}
        {contentArea1?.length && (
          <div className={classes.contentArea1Container}>
            <BlockList blocks={contentArea1} />
          </div>
        )}
        <div className={classes.addressContainer}>
          <address className={classes.address}>
            {companyName && <span>{companyName}</span>}
            <p className="whitespace-pre-line">
              {formatAddress(
                (line1 = line1),
                (line2 = line2),
                (county = county),
                (town = town),
                (postcode = postcode),
                (separator = separator),
              )}
            </p>
          </address>
        </div>
        {contentArea2?.length && (
          <div className={classes.contentArea1Container}>
            <BlockList blocks={contentArea2} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Address;
