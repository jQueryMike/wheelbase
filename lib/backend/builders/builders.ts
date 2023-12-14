import { ButtonProps, ButtonSize, ButtonStyle } from '@components/blocks/Button';
import { HeadingsProps } from '@components/blocks/Headings';
import { HeroProps } from '@components/blocks/Hero/Hero.types';
import { ImageProps } from '@components/blocks/Image/Image.types';
import { TextProps } from '@components/blocks/Text/Text';
import Block from '@interfaces/Block';
import { BaseComposition, HeadingsComposition, ImageComposition } from 'lib/types';
import { v4 as uuidv4 } from 'uuid';

import buildBlockClasses from './buildBlockClasses';
import buildClasses from './buildClasses';

/**
 * Sanitise name of block
 * @param name Possibly incorrectly formatted name
 * @returns lowercase name without trailing numbers
 */
export function getName(name: string) {
  return name.replace(/(\d+|Atom)$/, '').toLowerCase();
}

/**
 * Map of builders for each block type
 */
const BuilderMap = new Map<string, (...args: any) => unknown>();

/**
 * Fallback image props
 */
const DefaultImage: Block & ImageProps = {
  id: uuidv4(),
  name: 'Image',
  url: '/media/vprlmnok/placeholder_view_vector.svg', // remote url, can't get public folder in build
  src: '/media/vprlmnok/placeholder_view_vector.svg', // remote url, can't get public folder in build
  alt: 'Placholder Image',
  alternativeText: 'Placholder Image',
  width: '300',
  height: '200',
};

/*
 *
 * @param param0 Button composition
 * @param id
 * @param buttonTheme
 * @param globalConfig
 */
function buildButton(config: BaseComposition, id: string, buttonTheme: any, globalConfig: any) {
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

  const buttonClasses = buildClasses('Button', 'blocks', '1', config.appearance, config.overrides, buttonTheme);
  const link = config.content?.url?.[0];
  let href = null;
  if (link?.url) {
    if (link?.route?.path) {
      href = link.route.path.replace('/home', '');
    } else {
      href = link.url.replace('/home', '');
    }
  }
  const button: Block & ButtonProps = {
    id,
    name: 'Button',
    classes: buttonClasses,
    text: link?.title ?? null,
    href,
    leftIcon: config.content?.leftIcon ?? null,
    rightIcon: config.content?.rightIcon ?? null,
    size: getSizeKey(config.appearance?.size),
    style: getStyleKey(config.appearance?.style),
  };
  return button;
}

BuilderMap.set('button', buildButton);

/**
 * Headings builder
 * @param param0 Headings composition as a union of heading and subheading compositions
 * @param headingTheme Heading theme from the global theme
 * @param globalConfig Global config object (unused)
 * @returns Headings block
 */
function buildHeadings({ heading, subheading }: HeadingsComposition, id: string, headingTheme: any, globalConfig: any) {
  const headingClasses = buildClasses(
    'Heading',
    'blocks',
    '2',
    heading?.appearance ?? {},
    heading?.overrides ?? {},
    headingTheme,
  );
  const subheadingClasses = buildClasses(
    'Subheading',
    'blocks',
    '2',
    subheading?.appearance ?? {},
    subheading?.overrides ?? {},
    headingTheme,
  );

  // console.log('heading', headingClasses);
  // console.log('subheading', subheadingClasses);
  const headings: Block & HeadingsProps = {
    id,
    name: 'Headings',
    classes: buildBlockClasses({
      name: 'Headings',
      location: 'blocks',
      globalBlockTheme: headingTheme,
      instanceVariant: '2',
      instanceSettings: {},
    }),
    // TODO: Build classes with theme < variant < appearance < overrides
    heading: {
      ...heading?.content,
      // ...heading.appearance,
      ...heading?.settings,
      // ...heading.overrides,
      classes: headingClasses,
    },
    subheading: {
      ...subheading?.content,
      // ...subheading.appearance,
      // ...subheading.overrides,
      classes: subheadingClasses,
    },
  };
  return headings;
}

BuilderMap.set('headings', buildHeadings);

/**
 * Image builder
 * @param config Image composition
 * @param imageTheme Image theme from the global theme
 * @param globalConfig Global config object (unused)
 * @returns Image block
 */
function buildImage(config: ImageComposition, _: string, imageTheme: any, globalConfig: any) {
  const {
    content: { image: imageData, altText },
    settings,
  } = config;
  const { id, name, url, alternativeText, width, height } = imageData?.[0] || DefaultImage;
  const image: Block & ImageProps = {
    id,
    name: 'Image',
    classes: buildBlockClasses({
      name: 'Image',
      location: 'blocks',
      globalBlockTheme: imageTheme,
      instanceVariant: '1',
      instanceSettings: {},
    }),
    ...(settings.loading ? settings : { ...settings, loading: 'lazy' }),
    src: `${process.env.MEDIA_URL}${url}`,
    alt: altText || alternativeText || name,
    width,
    height,
  };
  return image;
}

BuilderMap.set('image', buildImage);

/**
 * Hero builder
 * @param config Hero composition
 * @param heroTheme Hero theme from the global theme
 * @param globalConfig Global config object (unused)
 * @returns Hero block
 */
function buildHero(config: BaseComposition, id: string, heroTheme: any, globalConfig: any) {
  // console.log(JSON.stringify({ config, heroTheme }, null, 2));
  const classes = buildClasses('Hero', 'blocks', '1', config.appearance, config.overrides, heroTheme);
  // console.log(JSON.stringify({ classes }, null, 2));
  const hero: Block & HeroProps = {
    id,
    name: 'Hero',
    // TODO: Build classes with theme < variant < appearance < overrides
    classes: buildBlockClasses({
      name: 'Hero',
      location: 'blocks',
      globalBlockTheme: heroTheme,
      instanceVariant: '2',
      instanceSettings: {},
    }),
    ...(config.content ?? {}),
    ...(config.settings ?? {}),
  };
  return hero;
}

BuilderMap.set('hero', buildHero);
BuilderMap.set('textwithimage', buildHero);

/**
 * Text builder
 * @param config Text composition
 * @param textTheme Text theme from the global theme
 * @param globalConfig Global config object (unused)
 * @returns Text block
 */
function buildText(config: BaseComposition, id: string, textTheme: any, globalConfig: any) {
  const text: Block & TextProps = {
    id,
    name: 'Text',
    classes: buildBlockClasses({
      name: 'Text',
      location: 'blocks',
      globalBlockTheme: textTheme,
      instanceVariant: '1',
      instanceSettings: {},
    }),
    text: config.content?.text.markup,
    ...config.settings,
  };
  return text;
}

BuilderMap.set('text', buildText);

export default BuilderMap;
