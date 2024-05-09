// file deepcode ignore DuplicateCaseBody: switch statements will never fallthrough because cases are return statements.
import { ButtonSize, ButtonStyle } from '@utils/constants';
import { v4 as uuidv4 } from 'uuid';

function imageBuilder(
  config: any,
  fallbackImage: any = {
    id: uuidv4(),
    name: 'Image',
    alt: 'Placholder Image',
    width: '128',
    height: '128',
  },
) {
  const {
    content: { image: imageData, altText, ...content },
    appearance,
    settings,
  } = config;
  const { id, name, url, width, height } = imageData?.[0] || fallbackImage;
  const isFill = settings.fill === 'true';
  const w = appearance.width ?? width;
  const h = appearance.height ?? height;
  const image = {
    id,
    name: 'Image',
    src: url ? `${process.env.MEDIA_URL}${url}` : undefined,
    alt: altText || name,
    ...(settings.loading ? { ...settings, fill: isFill } : { ...settings, fill: isFill, loading: 'lazy' }),
    ...(isFill ? { sizes: `${appearance.width ?? w}px`, objectFit: 'contain' } : { width: w, height: h }),
    styling: config.styling,
    ...content,
  };

  return image;
}

export const BuilderMap = new Map([
  [
    'image',
    (config: any) =>
      imageBuilder(config, {
        id: uuidv4(),
        name: 'Image',
        url: '/media/vprlmnok/placeholder_view_vector.svg', // remote url, can't get public folder in build
        src: '/media/vprlmnok/placeholder_view_vector.svg', // remote url, can't get public folder in build
        alt: 'Placholder Image',
        width: '300',
        height: '200',
      }),
  ],
  ['avatar', imageBuilder],
  ['imageLink', imageBuilder],
  [
    'button',
    (config: any) => {
      const getSizeKey = (size?: string) => {
        switch (size) {
          case 'Large':
            return ButtonSize.Large;
          case 'Medium':
            return ButtonSize.Medium;
          case 'Small':
            return ButtonSize.Small;
          default:
            return ButtonSize.Medium;
        }
      };

      const getStyleKey = (style?: string) => {
        switch (style) {
          case 'Primary':
            return ButtonStyle.Primary;
          case 'Secondary':
            return ButtonStyle.Secondary;
          case 'Accent':
            return ButtonStyle.Accent;
          case 'Plain':
            return ButtonStyle.Plain;
          default:
            return ButtonStyle.Primary;
        }
      };
      const link = config.content?.url?.[0];
      let href = null;
      if (link?.url) {
        if (link?.route?.path) {
          href = link.route.path.replace('/home', '');
        } else {
          href = link.url.replace('/home', '');
        }
      }
      const button = {
        id: config.id,
        name: 'Button',
        text: link?.title ?? null,
        href,
        leftIcon: config.content?.leftIcon ?? null,
        rightIcon: config.content?.rightIcon ?? null,
        size: getSizeKey(config.appearance?.size),
        style: getStyleKey(config.appearance?.style),
        styling: config.styling,
      };
      return button;
    },
  ],
  [
    'text',
    (config: any) => {
      const text = {
        id: config.id,
        name: 'Text',
        text: config.content?.text.markup,
        ...config.settings,
        ...config.appearance,
        styling: config.styling,
      };
      return text;
    },
  ],
]);

export function builder({ name, id, content, appearance, settings, overrides, styling }: any) {
  return {
    name,
    id,
    ...content,
    ...appearance,
    ...settings,
    overrides,
    styling,
  };
}
