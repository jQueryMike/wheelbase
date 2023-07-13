import { twMerge } from 'tailwind-merge';

export interface BuildThemeConfig {
  classes?: { [propName: string]: string };
  gridColsOverrides?: { className: string; config?: { [propName: string]: any } }[];
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

      if (item.config) {
        Object.keys(item.config)
          .filter((key) => key.startsWith('gridCols_') && typeof (item.config![key] === String) && !!item.config![key])
          .forEach((key) => {
            outputClasses[item.className] += ` ${key.replace('gridCols_', '')}:grid-cols-${item.config![key]}`;
          });
      }
    });

    [globalOverrides, parentOverrides, instanceOverrides].forEach((overrides) => {
      Object.keys(overrides).forEach((key) => {
        const classesKey = key.replace('tw_item_', '').replace('tw_', '');
        const klasses = (outputClasses[classesKey] || '').split(' ');
        klasses.push(overrides[key]);

        outputClasses[classesKey] = klasses.join(' ');
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
