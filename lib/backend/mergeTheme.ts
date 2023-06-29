import { twMerge } from 'tailwind-merge';

const mergeTheme = (classes: { [propName: string]: string }, blockProperties: { [propName: string]: any }) => {
  const mergedClasses = { ...classes };
  Object.keys(blockProperties)
    .filter((key) => key.startsWith('tw_') && typeof (blockProperties[key] === String) && !!blockProperties[key])
    .forEach((key) => {
      mergedClasses[key.replace('tw_', '')] += ` ${blockProperties[key]}`;
    });

  Object.keys(mergedClasses).forEach((key) => (mergedClasses[key] = twMerge(mergedClasses[key])));

  return mergedClasses;
};

export default mergeTheme;
