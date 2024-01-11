import { SubheadingProps } from './Subheading.types';
import fallbackStyle from './variants/1';

const Subheading = ({ classes = fallbackStyle.classes, text }: SubheadingProps) => (
  <div className={classes?.root}>
    <p className={classes?.subheading} data-testid="subheading">
      {text}
    </p>
  </div>
);

export default Subheading;
