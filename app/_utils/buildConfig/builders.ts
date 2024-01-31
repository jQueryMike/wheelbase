import { ButtonSize, ButtonStyle } from '@utils/constants';
import { v4 as uuidv4 } from 'uuid';

export const BuilderMap = new Map([
  [
    'image',
    (config: any) => {
      const {
        content: { image: imageData, altText },
        appearance,
        settings,
      } = config;
      const { id, name, url, alternativeText, width, height } = imageData?.[0] || {
        id: uuidv4(),
        name: 'Image',
        url: '/media/vprlmnok/placeholder_view_vector.svg', // remote url, can't get public folder in build
        src: '/media/vprlmnok/placeholder_view_vector.svg', // remote url, can't get public folder in build
        alt: 'Placholder Image',
        alternativeText: 'Placholder Image',
        width: '300',
        height: '200',
      };
      const image = {
        id,
        name: 'Image',
        ...(settings.loading ? settings : { ...settings, loading: 'lazy' }),
        src: `${process.env.MEDIA_URL}${url}`,
        alt: altText || alternativeText || name,
        width,
        height,
        fill: appearance.fill || !width || !height,
      };
      return image;
    },
  ],
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
      };
      return text;
    },
  ],
]);

export function builder({ name, id, content, appearance, settings, variants }: any) {
  return {
    name,
    id,
    ...content,
    ...appearance,
    ...settings,
    ...variants,
  };
}
