import { replaceVars } from '@utils/replaceVars';

const mergeVars = (input: any, config: any, sharedContent: any) => {
  try {
    let output = JSON.stringify(input);

    output = replaceVars(output, config, sharedContent);
    output = replaceVars(output, config, sharedContent); // Second pass to replace nested vars

    return JSON.parse(output.replaceAll('\n', '\\n'));
  } catch (error) {
    console.error('An error occurred whilst merging variables');
    console.error(error);

    return input;
  }
};

export default mergeVars;
