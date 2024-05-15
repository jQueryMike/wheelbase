import mapClasses from "./Map.classes";
import { MapProps } from "./Map.types";
import { BaseComponent } from "@components/utils";
import { buildClasses } from "@utils/buildClasses";

const extractSrcFromGoogleMaps = (
  googleMapLink: string
): string | undefined => {
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
    <BaseComponent
      as="div"
      data-testid="map-container"
      className={fullWidth ? classes.rootFullWidth : classes.root}
      styling={styling}
      stylingOptions={{ atomicType: "atom" }}
    >
      <div className={classes.mapContainer}>
        {parsedSrc && (
          <iframe
            data-testid="map-iframe"
            src={parsedSrc}
            title="google map"
            loading="lazy"
            className={classes.map}
          />
        )}
      </div>
    </BaseComponent>
  );
};

export default Map;
