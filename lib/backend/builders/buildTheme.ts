import { twMerge } from 'tailwind-merge';

export interface BuildThemeConfig {
  classes?: { [propName: string]: string };
  gridColsOverrides?: { className: string; config?: { [propName: string]: any } }[];
  overrides?: { [propName: string]: any };
}

const buildTheme = ({ classes = {}, gridColsOverrides = [], overrides = {} }: BuildThemeConfig) => {
  try {
    const mergedClasses = { ...classes };

    gridColsOverrides.forEach((item) => {
      mergedClasses[item.className] = mergedClasses[item.className] || '';

      if (item.config) {
        Object.keys(item.config)
          .filter((key) => key.startsWith('gridCols_') && typeof (item.config![key] === String) && !!item.config![key])
          .forEach((key) => {
            mergedClasses[item.className] += ` ${key.replace('gridCols_', '')}:grid-cols-${item.config![key]}`;
          });
      }
    });

    Object.keys(overrides)
      .filter((key) => key.startsWith('tw_') && typeof (overrides[key] === String) && !!overrides[key])
      .forEach((key) => {
        mergedClasses[key.replace('tw_', '')] += ` ${overrides[key]}`;
      });

    Object.keys(mergedClasses).forEach((key) => (mergedClasses[key] = twMerge(mergedClasses[key])));

    return mergedClasses;
  } catch (error) {
    console.error(error);
    return {};
  }
};

export default buildTheme;
