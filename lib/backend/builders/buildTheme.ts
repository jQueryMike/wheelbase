import { twMerge } from 'tailwind-merge';

export interface BuildThemeConfig {
  classes?: { [propName: string]: string };
  gridColsOverrides?: { className: string; queryType?: 'media' | 'container'; content?: { [propName: string]: any } }[];
  globalOverrides?: { [propName: string]: string };
  parentOverrides?: { [propName: string]: string };
  instanceOverrides?: { [propName: string]: string };
}

const buildTheme = ({
  classes = {},
  gridColsOverrides = [],
  globalOverrides = {},
  parentOverrides = {},
  instanceOverrides = {},
}: BuildThemeConfig) => {
  try {
    const outputClasses = { ...classes };

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

    [globalOverrides, parentOverrides, instanceOverrides].forEach((overrides) => {
      Object.keys(overrides).forEach((key) => {
        const classesKey = key.split('__')[1];
        if (classesKey) {
          const klasses = (outputClasses[classesKey] || '').split(' ');
          klasses.push(overrides[key]);
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

export default buildTheme;
