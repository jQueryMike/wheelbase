import { MERGE_VARS } from '@utils/constants';

const replaceVars = (inputString: string, config: any, sharedContent: any) => {
  let outputString = inputString;
  MERGE_VARS.forEach(([placeholder, value]) => {
    if (config && config[value]) {
      outputString = outputString.replaceAll(placeholder, config[value].markup || config[value]);
      return;
    }
    if (sharedContent && sharedContent[value]) {
      outputString = outputString.replaceAll(placeholder, sharedContent[value].markup || sharedContent[value]);
    }
  });

  return outputString;
};

export default replaceVars;
