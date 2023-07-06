import { FeaturesClasses, FeaturesItemClasses } from '../Features';

interface FeaturesVariant {
  classes?: FeaturesClasses<string>;
  itemClasses?: FeaturesItemClasses<string>;
}

export default FeaturesVariant;
