import { BlockList } from '@components/utility-components/BlockList';
import Block from '@interfaces/Block';
import cn from 'classnames';
import { useMemo } from 'react';

import { Heading, HeadingProps, HeadingSize, HeadingTag } from '../Heading';
import { Subheading, SubheadingProps } from '../Subheading';

export type MapClasses<T> = {
  [key in
    | 'root'
    | 'headingsContainer'
    | 'headingContainer'
    | 'heading'
    | 'subheadingContainer'
    | 'subheading'
    | 'contentAreaContainer'
    | 'contentArea1Container'
    | 'contentArea2Container'
    | 'mapContainer'
    | 'map']?: T;
};

export interface MapProps {
  classes?: MapClasses<string>;
  heading?: HeadingProps;
  subheading?: SubheadingProps;
  googleMapLink: string;
  contentArea1?: Block[];
  contentArea2?: Block[];
}

export const extractSrcFromGoogleMaps = (googleMapLink: string): string | undefined => {
  const regex = /src="([^"]+)"/;
  const match = googleMapLink.match(regex);

  if (match && match.length >= 2) {
    return match[1];
  }

  return;
};

const Map = ({ classes = {}, heading, subheading, contentArea1, contentArea2, googleMapLink }: MapProps) => {
  const extractedSrc = useMemo(() => extractSrcFromGoogleMaps(googleMapLink), [googleMapLink]);

  return (
    <div className={classes.root}>
      {(heading || subheading) && (
        <div className={classes.headingsContainer}>
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
        <div className={cn(classes.contentAreaContainer, classes.contentArea1Container)}>
          <BlockList blocks={contentArea1} />
        </div>
      )}
      {contentArea2?.length && (
        <div className={cn(classes.contentAreaContainer, classes.contentArea2Container)}>
          <BlockList blocks={contentArea2} />
        </div>
      )}
      <div className={classes.mapContainer}>
        <iframe
          data-testid="iframe"
          src={extractedSrc}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
