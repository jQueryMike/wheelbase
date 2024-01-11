import { SubheadingProps } from './Subheading.types';

const Subheading = ({ classes = {}, text }: SubheadingProps) => (
  <div className={classes.root}>
    <p className={classes.subheading} data-testid="subheading">
      {text}
    </p>
  </div>
);

export default Subheading;
