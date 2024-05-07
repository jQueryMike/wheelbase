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

const Map = ({ src, styling, overrides }: MapProps) => {
  const parsedSrc = extractSrcFromGoogleMaps(src);
  const classes = buildClasses(mapClasses, overrides);
  return (
    <BaseComponent
      as="div"
      className={'{mapArea} col-span-12 lg:col-span-7 xl:col-span-8'}
      styling={styling}
      stylingOptions={{ atomicType: 'atom' }}
    >
      <div className="{mapConatiner} h-full w-full">
        <iframe
          src={parsedSrc}
          width="600"
          height="450"
          loading="lazy"
          className="{map} h-full min-h-[420px] w-full border-0"
        ></iframe>
      </div>
    </BaseComponent>
  );
};

export default Map;
