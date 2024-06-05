// eslint-disable-next-line import/no-cycle
import textAndImageClasses from "./TextAndImage.classes";
// eslint-disable-next-line import/no-cycle
import { TextAndImageProps } from "./TextAndImage.types";
// eslint-disable-next-line import/no-cycle
import BLOCKS from "@components/Blocks";
import { Heading, Image } from "@components/atoms";
import { BaseComponent } from "@components/utils/BaseComponent";
import { buildClasses } from "@utils/buildClasses";
import cn from "classnames";
import { Suspense } from "react";

const TextAndImage = async ({
  heading,
  subheading,
  image1: image,
  contentArea = [],
  reverse,
  overrides,
  tint,
  ...rest
}: TextAndImageProps) => {
  const classes = buildClasses(textAndImageClasses, overrides);
  const components = contentArea.map(({ name, id, ...props }: any) => [
    name,
    BLOCKS[name as keyof typeof BLOCKS],
    id,
    props,
  ]);
  const resolvedHeading = heading ? await Heading(heading) : undefined;
  const resolvedSubheading = subheading
    ? await Heading({
        ...subheading,
        "data-testid": "subheading",
        textType: "subheading",
      })
    : undefined;

  const rootClassName = cn(
    image?.imageAsBackground ? "relative overflow-hidden" : classes.root,
    {
      "grid-flow-dense": reverse,
    }
  );

  let textAndImageContentContainerClassName;
  if (image?.imageAsBackground) {
    textAndImageContentContainerClassName = classes?.textAndImageContentIndex;
  } else {
    textAndImageContentContainerClassName = reverse
      ? classes?.textAndImageContentContainerReverse
      : classes?.textAndImageContentContainer;
  }

  let imageContainerClassName;
  if (image?.imageAsBackground) {
    imageContainerClassName = classes.imageAsBackground;
  } else {
    imageContainerClassName = reverse
      ? classes?.imageContainerReverse
      : classes?.imageContainer;
  }

  return (
    <BaseComponent className={rootClassName} {...rest}>
      <div className={classes.rootInner}>
        <div className={classes.container}>
          <div className={textAndImageContentContainerClassName}>
            {(heading || subheading) && (
              <div
                className={classes?.headingsContainer}
                data-testid="headings-container"
              >
                {resolvedHeading}
                {resolvedSubheading}
              </div>
            )}
            {components?.length > 0 && (
              <div
                className={classes?.contentAreaContainer}
                data-testid="content-area"
              >
                {components.map(([name, Component, id, props]: any) => (
                  <Suspense fallback={<div>Loading {name}...</div>} key={id}>
                    <Component {...props} />
                  </Suspense>
                ))}
              </div>
            )}
          </div>
          {image && (
            <>
              {image.imageAsBackground && (
                <BaseComponent
                  as="span"
                  styling={tint.styling}
                  className={classes.tint}
                />
              )}
              <div
                className={imageContainerClassName}
                data-testid="image-container"
              >
                <Image className={classes?.image} {...image} />
              </div>
            </>
          )}
        </div>
      </div>
    </BaseComponent>
  );
};

export default TextAndImage;
