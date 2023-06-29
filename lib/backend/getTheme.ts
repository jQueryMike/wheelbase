import { UmbracoImage } from '@interfaces/Umbraco';

const getTheme = (themes: any, images: UmbracoImage[]): { [propName: string]: { [propName: string]: string } } => {
  if (!images || images.length < 1) return {};

  try {
    return themes[`theme${images[0].name.split(' ').at(-1)}`];
  } catch (error) {
    return {};
  }
};

export default getTheme;
