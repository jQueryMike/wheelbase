import {
  FooterClasses,
  FooterInfoItemClasses,
  FooterLegalNavigationItemClasses,
  FooterSocialNavigationItemClasses,
} from '../Footer';

interface FooterVariant {
  classes?: FooterClasses<string>;
  infoItemClasses?: FooterInfoItemClasses<string>;
  socialNavigationItemClasses?: FooterSocialNavigationItemClasses<string>;
  legalNavigationItemClasses?: FooterLegalNavigationItemClasses<string>;
}

export default FooterVariant;
