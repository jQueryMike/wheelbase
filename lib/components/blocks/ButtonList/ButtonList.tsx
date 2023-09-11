import Button from '../Button/Button';

export type ButtonListClasses<T> = {
  [key in 'root' | 'list' | 'listItem']?: T;
};

export interface ButtonListProps {
  classes?: ButtonListClasses<string>;
  items: any[];
}

const ButtonList = ({ classes = {}, items = [] }: ButtonListProps) => {
  if (items.length < 1) return null;
  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {items.map((item) => (
          <li key={item.id} className={classes.listItem}>
            <Button {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ButtonList;
