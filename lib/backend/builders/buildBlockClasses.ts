import { twMerge } from 'tailwind-merge';

import extractClassOverrides from './extractClassOverrides';

export interface BlockClassesBuilderConfig {
  name: string;
  location?: string;
  globalBlockTheme?: any;
  inheritedThemes?: any[];
  instanceVariant?: string;
  instanceSettings?: any;
  classesIdentifier?: string;
  gridColsOverrides?: any[];
}

const buildBlockClasses = ({
  name,
  location = 'blocks',
  globalBlockTheme,
  inheritedThemes = [],
  instanceVariant,
  instanceSettings,
  classesIdentifier = 'classes',
  gridColsOverrides = [],
}: BlockClassesBuilderConfig) => {
  try {
    const variants: any[] = [
      globalBlockTheme?.themeVariant || '1',
      ...inheritedThemes
        .filter((inheritedTheme: any) => !!inheritedTheme?.themeVariant)
        .map((inheritedTheme: any) => inheritedTheme.themeVariant),
    ];

    const overrides: any[] = [
      extractClassOverrides(globalBlockTheme),
      ...inheritedThemes.map((inheritedTheme: any) => extractClassOverrides(inheritedTheme)),
    ];

    if (instanceVariant) variants.push(instanceVariant);
    if (instanceSettings) overrides.push(extractClassOverrides(instanceSettings));

    const activeVariant = require(`/lib/components/${location}/${name}/variants/${variants.slice(-1)[0]}`).default || {
      [classesIdentifier]: {},
    };

    const outputClasses = { ...activeVariant[classesIdentifier] };

    gridColsOverrides.forEach((item) => {
      outputClasses[item.className] = outputClasses[item.className] || '';

      if (item.content) {
        Object.keys(item.content)
          .filter(
            (key) => key.startsWith('gridCols_') && typeof (item.content![key] === String) && !!item.content![key],
          )
          .forEach((key) => {
            outputClasses[item.className] += ` ${item.queryType === 'container' ? '@' : ''}${key.replace(
              'gridCols_',
              '',
            )}:grid-cols-${item.content![key]}`;
          });
      }
    });

    overrides.forEach((overridesItem) => {
      Object.keys(overridesItem).forEach((key) => {
        const classesKey = key.split('_')[1];
        if (classesKey) {
          const klasses = (outputClasses[classesKey] || '').split(' ');
          klasses.push(overridesItem[key]);
          outputClasses[classesKey] = klasses.join(' ');
        }
      });
    });

    Object.keys(outputClasses).forEach((key) => (outputClasses[key] = twMerge(outputClasses[key])));

    return outputClasses;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export default buildBlockClasses;
