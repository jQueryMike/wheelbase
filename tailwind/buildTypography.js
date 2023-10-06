const buildTypography = (colors) => {
  try {
    return {
      DEFAULT: {
        css: {
          color: colors.copy.DEFAULT,
          a: {
            color: colors.link.DEFAULT,
            '&:hover': {
              color: colors.link.light,
            },
          },
        },
      },
      'primary-contrast': {
        css: {
          color: `rgb(var(--primary-contrast))`,
          opacity: 0.7,
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
