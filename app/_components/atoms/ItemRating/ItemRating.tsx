import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import { getColour } from '@utils/buildStyling/colours/getColour';

import { Icon } from '../Icon';
import itemRatingClasses from './ItemRating.classes';
import { ItemRatingProps } from './ItemRating.types';

const ItemRating = ({ itemRating, icon, overrides, styling }: ItemRatingProps) => {
  const classes = buildClasses(itemRatingClasses, overrides);
  const secondaryColor = `text-${getColour(icon.secondaryColor).substring(3)}` || 'text-black opacity-25';

  const calculateStarRating = (rating: number) => {
    const wholeStars = Math.floor(rating);
    return { wholeStars };
  };

  const renderStars = (wholeStars: number) => {
    const stars: JSX.Element[] = [];
    const starIcon = 'fa fa-star';

    for (let i = 0; i < wholeStars; i++) {
      stars.push(<Icon key={i} icon={starIcon} styling={{}} />);
    }
    if (Math.floor(5 - itemRating) >= 1 && Math.floor(5 - itemRating) <= 5) {
      for (let j = 1, l = 5 - itemRating; j <= l; j++) {
        stars.push(<Icon key={`1${j}`} icon={`${starIcon} ${secondaryColor}`} styling={{}} />);
      }
    }
    return stars;
  };

  const { wholeStars } = calculateStarRating(itemRating);
  const stars = renderStars(wholeStars);
  return (
    <div className={classes.ratingContainer}>
      <BaseComponent styling={icon.styling} stylingOptions={{ atomicType: 'atom' }}>
        <div className={classes.ratingStars}>{stars}</div>
      </BaseComponent>
      <BaseComponent
        as="span"
        styling={styling}
        stylingOptions={{ atomicType: 'atom', textType: 'text' }}
        className={classes.ratingFigure}
      >
        {itemRating}/5
      </BaseComponent>
    </div>
  );
};

export default ItemRating;
