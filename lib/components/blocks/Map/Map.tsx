import Block from '@interfaces/Block';
import cn from 'classnames';

import { BlockList } from '../../utility-components/BlockList';
import { Headings, HeadingsProps } from '../Headings';

export type MapClasses<T> = {
  [key in
    | 'root'
    | 'rootInner'
    | 'headingsContainer'
    | 'contentAreaContainer'
    | 'contentArea1Container'
    | 'contentArea2Container'
    | 'mapContainer'
    | 'map']?: T;
};

export interface MapProps {
  classes?: MapClasses<string>;
  headings?: HeadingsProps;
  googleMapLink: string;
  contentArea1?: Block[];
  contentArea2?: Block[];
}

const Map = ({ classes = {}, headings, contentArea1 = [], contentArea2 = [], googleMapLink }: MapProps) => (
  <div className={classes.root}>
    <div className={classes.rootInner}>
      {headings && (
        <div className={classes.headingsContainer}>
          <Headings {...headings} />
        </div>
      )}
      {contentArea1?.length > 0 && (
        <div className={cn(classes.contentAreaContainer, classes.contentArea1Container)}>
          <BlockList blocks={contentArea1} />
        </div>
      )}
      <div className={classes.mapContainer}>
        <iframe
          title={headings?.heading?.text || 'Map'}
          className={classes.map}
          data-testid="iframe"
          src={googleMapLink}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          width="100%"
          height="100%"
        />
      </div>
      {contentArea2?.length > 0 && (
        <div className={cn(classes.contentAreaContainer, classes.contentArea2Container)}>
          <BlockList blocks={contentArea2} />
        </div>
      )}
    </div>
  </div>
);

export default Map;
