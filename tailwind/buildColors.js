const buildColors = (theme) => {
  try {
    return {
      primary: {
        DEFAULT: theme.primaryDefault || undefined,
        light: theme.primaryLight || undefined,
        dark: theme.primaryDark || undefined,
        contrast: theme.primaryContrast || undefined,
      },
      secondary: {
        DEFAULT: theme.secondaryDefault || undefined,
        light: theme.secondaryLight || undefined,
        dark: theme.secondaryDark || undefined,
        contrast: theme.secondaryContrast || undefined,
      },
      accent: {
        DEFAULT: theme.accentDefault || undefined,
        light: theme.accentLight || undefined,
        dark: theme.accentDark || undefined,
        contrast: theme.accentContrast || undefined,
      },
      heading: {
        DEFAULT: theme.headingDefault || undefined,
        light: theme.headingLight || undefined,
        dark: theme.headingDark || undefined,
      },
      copy: {
        DEFAULT: theme.copyDefault || undefined,
        light: theme.copyLight || undefined,
        dark: theme.copyDark || undefined,
      },
      link: {
        DEFAULT: theme.linkDefault || undefined,
        light: theme.linkLight || undefined,
        dark: theme.linkDark || undefined,
      },
      body: {
        DEFAULT: theme.bodyDefault || undefined,
        light: theme.bodyLight || undefined,
        dark: theme.bodyDark || undefined,
      },
      divider: {
        DEFAULT: theme.divider || undefined,
      },
      custom1: {
        DEFAULT: theme.custom1Default || undefined,
        constrast: theme.custom1Contrast || undefined,
      },
      custom2: {
        DEFAULT: theme.custom2Default || undefined,
        constrast: theme.custom2Contrast || undefined,
      },
      custom3: {
        DEFAULT: theme.custom3Default || undefined,
        constrast: theme.custom3Contrast || undefined,
      },
      custom4: {
        DEFAULT: theme.custom4Default || undefined,
        constrast: theme.custom4Contrast || undefined,
      },
      custom5: {
        DEFAULT: theme.custom5Default || undefined,
        constrast: theme.custom5Contrast || undefined,
      },
    };
  } catch (error) {
    console.error('Something went wrong while trying to build colors.');
    console.error(error);
    return {};
  }
};

module.exports = buildColors;
