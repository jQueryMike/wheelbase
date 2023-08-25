const MERGE_VARS = [
  ['{DISPLAY_NAME}', 'displayName'],
  ['{PHONE_NUMBER}', 'phoneNumber'],
];

const mergeVars = (input: any, config: any) => {
  let output = JSON.stringify(input);

  MERGE_VARS.forEach(([placeholder, value]) => {
    if (placeholder && config[value]) output = output.replaceAll(placeholder, config[value]);
  });

  return JSON.parse(output);
};

export default mergeVars;
