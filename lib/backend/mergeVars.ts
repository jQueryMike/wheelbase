const MERGE_VARS = [
  ['{DISPLAY_NAME}', 'displayName'],
  ['{PHONE_NUMBER}', 'phoneNumber'],
  ['{TERMS_AND_CONDITIONS}', 'termsAndConditions'],
  ['{PRIVACY_POLICY}', 'privacyPolicy'],
  ['{COOKIE_POLICY}', 'cookiePolicy'],
  ['{FOOTER_DISCLAIMER}', 'footerDisclaimer'],
];

const replaceVars = (inputString: string, config: any, sharedContent: any) => {
  let outputString = inputString;
  try {
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
  } catch (error) {
    console.error('An error occurred whilst merging variables');
    console.error(error);
    return inputString;
  }
};

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
