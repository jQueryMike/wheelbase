const MERGE_VARS = [
  ['{DISPLAY_NAME}', 'displayName'],
  ['{PHONE_NUMBER}', 'phoneNumber'],
  ['{TERMS_AND_CONDITIONS}', 'termsAndConditions'],
  ['{PRIVACY_POLICY}', 'privacyPolicy'],
  ['{COOKIE_POLICY}', 'cookiePolicy'],
];

const mergeVars = (input: any, config: any, sharedContent: any) => {
  let output = JSON.stringify(input);

  MERGE_VARS.forEach(([placeholder, value]) => {
    if (placeholder) 
    {
      if (config[value]) { 
        output = output.replaceAll(placeholder, config[value]); 
        return;
      }
      if (sharedContent[value]) { 
        output = output.replaceAll(placeholder, sharedContent[value]); 
      }
    }
  });

  return JSON.parse(output);
};

export default mergeVars;
