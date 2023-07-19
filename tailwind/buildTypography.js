const buildTypography = (theme) => {
  try {
    return {
      DEFAULT: {
        css: {
          color: theme.copyDefault,
          a: {
            color: theme.linkDefault,
            '&:hover': {
              color: theme.linkLight,
            },
          },
        },
      },
    };
  } catch (error) {
    console.error('Something went wrong while trying to build typography.');
    console.error(error);
    return {};
  }
};

module.exports = buildTypography;
