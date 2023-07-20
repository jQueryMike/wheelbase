import { OpeningTimesClasses, OpeningTimesItemClasses } from '../OpeningTimes';

interface OpeningTimesVariant {
  classes?: OpeningTimesClasses<string>;
  itemClasses?: OpeningTimesItemClasses<string>;
}

export default OpeningTimesVariant;
