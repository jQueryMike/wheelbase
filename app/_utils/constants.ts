/**
 * Constants
 */

/**
 * Content API URL
 */
export const CONTENT_API_URL = `${process.env.API_URL!}/umbraco/delivery/api/v1/content`;

/**
 * Content API URL v2 API
 */
export const CONTENT_API_URL_V2 = `${process.env.API_URL!}/umbraco/delivery/api/v2/content`;

/**
 * Shared content URL
 */
export const SHARED_CONTENT_URL = `${CONTENT_API_URL}/item/shared-content`;

/**
 * Is production flag
 */
export const IS_PRODUCTION = process.env.ENVIRONMENT_NAME === 'production';

/**
 * Root URL
 */
export const ROOT_URL = `${CONTENT_API_URL}/item/${process.env.API_ROOT_NODE_PATH}`;

/**
 * Root URL v2 API
 */
export const ROOT_URL_V2 = `${CONTENT_API_URL}?fetch=descendants:${process.env.API_ROOT_NODE_GUID}&take=9999`;

/**
 * Merge vars
 */
export const MERGE_VARS = [
  ['{DISPLAY_NAME}', 'displayName'],
  ['{PHONE_NUMBER}', 'phoneNumber'],
  ['{TERMS_AND_CONDITIONS}', 'termsAndConditions'],
  ['{PRIVACY_POLICY}', 'privacyPolicy'],
  ['{COOKIE_POLICY}', 'cookiePolicy'],
  ['{FOOTER_DISCLAIMER}', 'footerDisclaimer'],
];

/**
 * Enums
 */
export enum ButtonStyle {
  Primary = 'primary',
  Secondary = 'secondary',
  Accent = 'accent',
  Plain = 'plain',
}

export enum ButtonSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export enum Sizes {
  ExtraLarge = 'Extra Large',
  Large = 'Large',
  Medium = 'Medium',
  Small = 'Small',
  ExtraSmall = 'Extra Small',
}

export enum GradientDirection {
  'Left to Right' = 'to-l',
  'Right to Left' = 'to-r',
  'Top to Bottom' = 'to-b',
  'Bottom to Top' = 'to-t',
  'Top Left to Bottom Right' = 'to-br',
  'Top Right to Bottom Left' = 'to-bl',
  'Bottom Left to Top Right' = 'to-tr',
  'Bottom Right to Top Left' = 'to-tl',
}
