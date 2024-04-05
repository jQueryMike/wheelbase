import replaceVars from './replaceVars';

describe('replaceVars', () => {
  it('should replace variables in the input string with values from the config', () => {
    const inputString = 'Hello, {DISPLAY_NAME}!';
    const config = { displayName: 'John' };
    const sharedContent = {};

    const result = replaceVars(inputString, config, sharedContent);

    expect(result).toBe('Hello, John!');
  });

  it('should replace variables in the input string with values from the shared content', () => {
    const inputString = '{TERMS_AND_CONDITIONS}';
    const config = {};
    const sharedContent = { termsAndConditions: "T's & C's" };

    const result = replaceVars(inputString, config, sharedContent);

    expect(result).toBe("T's & C's");
  });

  it('should replace variables in the input string with values from the config over the shared content', () => {
    const inputString = '{PRIVACY_POLICY}';
    const config = { privacyPolicy: 'Privacy Policy' };
    const sharedContent = { privacyPolicy: 'Privacy Policy (shared)' };

    const result = replaceVars(inputString, config, sharedContent);

    expect(result).toBe('Privacy Policy');
  });

  it('should replace multiple variables in the input string with values from the config', () => {
    const inputString = '{DISPLAY_NAME} {PHONE_NUMBER}';
    const config = { displayName: 'John', phoneNumber: '01234567890' };
    const sharedContent = {};

    const result = replaceVars(inputString, config, sharedContent);

    expect(result).toBe('John 01234567890');
  });

  it('should replace multiple variables in the input string with values from the shared content', () => {
    const inputString = '{TERMS_AND_CONDITIONS} {PRIVACY_POLICY}';
    const config = {};
    const sharedContent = {
      termsAndConditions: "T's & C's",
      privacyPolicy: 'Privacy Policy',
    };

    const result = replaceVars(inputString, config, sharedContent);

    expect(result).toBe("T's & C's Privacy Policy");
  });

  it('should replace multiple variables in the input string with values from the config over the shared content', () => {
    const inputString = '{PRIVACY_POLICY} {TERMS_AND_CONDITIONS}';
    const config = { privacyPolicy: 'Privacy Policy' };
    const sharedContent = { termsAndConditions: "T's & C's" };

    const result = replaceVars(inputString, config, sharedContent);

    expect(result).toBe("Privacy Policy T's & C's");
  });
});
