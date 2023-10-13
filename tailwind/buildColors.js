const buildColors = () => ({
  primary: {
    DEFAULT: 'rgb(var(--primary) / <alpha-value>)',
    light: 'rgb(var(--primary-light) / <alpha-value>)',
    dark: 'rgb(var(--primary-dark) / <alpha-value>)',
    contrast: 'rgb(var(--primary-contrast) / <alpha-value>)',
  },
  secondary: {
    DEFAULT: 'rgb(var(--secondary) / <alpha-value>)',
    light: 'rgb(var(--secondary-light) / <alpha-value>)',
    dark: 'rgb(var(--secondary-dark) / <alpha-value>)',
    contrast: 'rgb(var(--secondary-contrast) / <alpha-value>)',
  },
  accent: {
    DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
    light: 'rgb(var(--accent-light) / <alpha-value>)',
    dark: 'rgb(var(--accent-dark) / <alpha-value>)',
    contrast: 'rgb(var(--accent-contrast) / <alpha-value>)',
  },
  success: {
    DEFAULT: 'rgb(var(--success) / <alpha-value>)',
    contrast: 'rgb(var(--success-contrast) / <alpha-value>)',
  },
  error: {
    DEFAULT: 'rgb(var(--error) / <alpha-value>)',
    contrast: 'rgb(var(--error-contrast) / <alpha-value>)',
  },
  heading: {
    DEFAULT: 'rgb(var(--heading) / <alpha-value>)',
    light: 'rgb(var(--heading-light) / <alpha-value>)',
    dark: 'rgb(var(--heading-dark) / <alpha-value>)',
  },
  copy: {
    DEFAULT: 'rgb(var(--copy) / <alpha-value>)',
    light: 'rgb(var(--copy-light) / <alpha-value>)',
    dark: 'rgb(var(--copy-dark) / <alpha-value>)',
  },
  link: {
    DEFAULT: 'rgb(var(--link) / <alpha-value>)',
    light: 'rgb(var(--link-light) / <alpha-value>)',
    dark: 'rgb(var(--link-dark) / <alpha-value>)',
    contrast: 'rgb(var(--link-contrast) / <alpha-value>)',
  },
  body: {
    DEFAULT: 'rgb(var(--body) / <alpha-value>)',
    alt: 'rgb(var(--body-alt) / <alpha-value>)',
  },
  divider: {
    DEFAULT: 'rgb(var(--divider) / <alpha-value>)',
  },
  custom1: {
    DEFAULT: 'rgb(var(--custom1) / <alpha-value>)',
    contrast: 'rgb(var(--custom1-contrast) / <alpha-value>)',
  },
  custom2: {
    DEFAULT: 'rgb(var(--custom2) / <alpha-value>)',
    contrast: 'rgb(var(--custom2-contrast) / <alpha-value>)',
  },
  custom3: {
    DEFAULT: 'rgb(var(--custom3) / <alpha-value>)',
    contrast: 'rgb(var(--custom3-contrast) / <alpha-value>)',
  },
  custom4: {
    DEFAULT: 'rgb(var(--custom4) / <alpha-value>)',
    contrast: 'rgb(var(--custom4-contrast) / <alpha-value>)',
  },
  custom5: {
    DEFAULT: 'rgb(var(--custom5) / <alpha-value>)',
    contrast: 'rgb(var(--custom5-contrast) / <alpha-value>)',
  },
});

module.exports = buildColors;
