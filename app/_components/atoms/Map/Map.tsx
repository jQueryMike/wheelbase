import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';

import mapClasses from './Map.classes';
import { MapProps } from './Map.types';

const extractSrcFromGoogleMaps = (googleMapLink: string): string | undefined => {
  if (!googleMapLink) return undefined;
  const regex = /src="([^"]+)"/;
  const match = googleMapLink.match(regex);

  if (match && match.length >= 2) {
    return match[1];
  }

  return undefined;
};

const Map = ({ src, fullWidth, styling, overrides }: MapProps) => {
  const parsedSrc = extractSrcFromGoogleMaps(src);
  const classes = buildClasses(mapClasses, overrides);
  return (
    <BaseComponent as="div" className={fullWidth ? classes.rootFullWidth : classes.root} styling={styling} stylingOptions={{ atomicType: 'atom' }}>
        <iframe src={parsedSrc} title="google map" loading="lazy" className={classes.map} />
    </BaseComponent>
  );
};

export default Map;
