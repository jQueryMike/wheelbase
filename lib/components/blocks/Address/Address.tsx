import { BlockList } from '@components/utility-components/BlockList';
import Block from '@interfaces/Block';

import { Heading, HeadingProps, HeadingSize, HeadingTag } from '../Heading';
import { Subheading, SubheadingProps } from '../Subheading';

export type AddressClasses<T> = {
  [key in
    | 'root'
    | 'container'
    | 'headingContainer'
    | 'heading'
    | 'subheadingContainer'
    | 'subheading'
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
  heading?: HeadingProps;
  subheading?: SubheadingProps;
  titleTag?: HeadingTag;
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
  heading,
  subheading,
  separator = ', ',
  contentArea1,
  contentArea2,
}: AddressProps) => {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {(heading || subheading) && (
          <div className={classes.headingContainer}>
            {heading && (
              <div className={classes.headingContainer}>
                <Heading tag={HeadingTag.H2} size={HeadingSize.Large} {...heading} />
              </div>
            )}
            {subheading && (
              <div className={classes.subheadingContainer}>
                <Subheading {...subheading} />
              </div>
            )}
          </div>
        )}
        {contentArea1?.length && (
          <div className={classes.contentArea1Container}>
            <BlockList blocks={contentArea1} />
          </div>
        )}
        {contentArea2?.length && (
          <div className={classes.contentArea1Container}>
            <BlockList blocks={contentArea2} />
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
      </div>
    </div>
  );
};

export default Address;
