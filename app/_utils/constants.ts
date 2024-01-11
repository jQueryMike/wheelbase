/**
 * Constants
 */

/**
 * Content API URL
 */
export const CONTENT_API_URL = `${process.env.API_URL!}/umbraco/delivery/api/v1/content`;

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
