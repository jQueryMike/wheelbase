import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';

import { Icon } from '../Icon';
import itemRatingClasses from './ItemRating.classes';
import { ItemRatingProps } from './ItemRating.types';

const ItemRating = ({ itemRating, icon, overrides, styling }: ItemRatingProps) => {
  console.log(icon);
  const classes = buildClasses(itemRatingClasses, overrides);
  const calculateStarRating = (rating: number) => {
    const wholeStars = Math.floor(rating);
    const percentageFilled = (rating - wholeStars) * 100;
    return { wholeStars, percentageFilled };
  };

  const renderStars = (wholeStars: number, percentageFilled: number) => {
    const stars: JSX.Element[] = [];

    for (let i = 0; i < wholeStars; i++) {
      stars.push(<Icon key={i} icon={icon.icon} styling={icon.styling} />);
    }

    if (percentageFilled > 0) {
      stars.push(<Icon key={wholeStars} icon={`${icon.icon}-half-o`} styling={icon.styling} />);
    }
    if (Math.floor(5 - itemRating) >= 1 && Math.floor(5 - itemRating) <= 5) {
      for (let j = 1; j <= 5 - itemRating; j++) {
        stars.push(<Icon key={j} icon={`${icon.icon} text-black opacity-25`} styling={icon.styling} />);
      }
    }

    return stars;
  };

  const { wholeStars, percentageFilled } = calculateStarRating(itemRating);
  const stars = renderStars(wholeStars, percentageFilled);

  return (
    <BaseComponent
      as="div"
      styling={styling}
      stylingOptions={{ atomicType: 'atom' }}
      className={classes.ratingContainer}
    >
      <div className={classes.ratingStars}>{stars}</div>
      <span className={classes.ratingFigure}>{itemRating}/5</span>
    </BaseComponent>
  );
};

export default ItemRating;
