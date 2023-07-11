export type SubheadingClasses<T> = {
  [key in 'root' | 'subheading']?: T;
};

export interface SubheadingProps {
  classes?: SubheadingClasses<string>;
  text?: string;
}

const Subheading = ({ classes = {}, text }: SubheadingProps) => (
  <div className={classes.root}>
    <p className={classes.subheading} data-testid="subheading">
      {text}
    </p>
  </div>
);

export default Subheading;
