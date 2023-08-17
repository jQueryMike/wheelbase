const buildColors = (theme) => {
  try {
    return {
      primary: {
        DEFAULT: theme.primaryDefault || '#002E68',
        light: theme.primaryLight || '#54739A',
        dark: theme.primaryDark || '#011F45',
        contrast: theme.primaryContrast || '#ffffff',
      },
      secondary: {
        DEFAULT: theme.secondaryDefault || '#00B4FE',
        light: theme.secondaryLight || '#51CCFF',
        dark: theme.secondaryDark || '#0078A9',
        contrast: theme.secondaryContrast || '#ffffff',
      },
      accent: {
        DEFAULT: theme.accentDefault || '#F92D63',
        light: theme.accentLight || '#FB7095',
        dark: theme.accentDark || '#A61D43',
        contrast: theme.accentContrast || '#ffffff',
      },
      success: {
        DEFAULT: theme.secondaryDefault || '#18BC01',
        contrast: theme.secondaryContrast || '#ffffff',
      },
      error: {
        DEFAULT: theme.secondaryDefault || '#EA0000',
        contrast: theme.secondaryContrast || '#ffffff',
      },
      heading: {
        DEFAULT: theme.headingDefault || '#151515',
        light: theme.headingLight || '#5F5F5F',
        dark: theme.headingDark || '#0E0E0E',
      },
      copy: {
        DEFAULT: theme.copyDefault || '#555555',
        light: theme.copyLight || '#8B8B8B',
        dark: theme.copyDark || '#393939',
      },
      link: {
        DEFAULT: theme.linkDefault || '#F92D63',
        light: theme.linkLight || '#FB7095',
        dark: theme.linkDark || '#0078A9',
        contrast: theme.linkContrast || '#ffffff',
      },
      body: {
        DEFAULT: theme.bodyDefault || '#ffffff',
        light: theme.bodyLight || '#ffffff',
        dark: theme.bodyDark || '#000000',
      },
      divider: {
        DEFAULT: theme.divider || '#BEBEBE',
      },
      custom1: {
        DEFAULT: theme.custom1Default || '#4087D9',
        contrast: theme.custom1Contrast || '#ffffff',
      },
      custom2: {
        DEFAULT: theme.custom2Default || '#F84C51',
        contrast: theme.custom2Contrast || '#ffffff',
      },
      custom3: {
        DEFAULT: theme.custom3Default || '#FF8E0B',
        contrast: theme.custom3Contrast || '#ffffff',
      },
      custom4: {
        DEFAULT: theme.custom4Default || '#26D376',
        contrast: theme.custom4Contrast || '#ffffff',
      },
      custom5: {
        DEFAULT: theme.custom5Default || '#A145F0',
        contrast: theme.custom5Contrast || '#ffffff',
      },
    };
  } catch (error) {
    console.error('Something went wrong while trying to build colors.');
    console.error(error);
    return {};
  }
};

module.exports = buildColors;
