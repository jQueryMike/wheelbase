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
          color: `rgb(var(--primary-contrast) / 0.7)`,
          a: {
            color: 'rgb(var(--primary-conrast))',
            '&:hover': {
              'text-decoration': 'underline',
            },
          },
        },
      },
      'secondary-contrast': {
        css: {
          color: `rgb(var(--secondary-contrast) / 0.7)`,
          a: {
            color: 'rgb(var(--secondary-conrast))',
            '&:hover': {
              'text-decoration': 'underline',
            },
          },
        },
      },
      'accent-contrast': {
        css: {
          color: `rgb(var(--accent-contrast) / 0.7)`,
          a: {
            color: 'rgb(var(--sccent-conrast))',
            '&:hover': {
              'text-decoration': 'underline',
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
