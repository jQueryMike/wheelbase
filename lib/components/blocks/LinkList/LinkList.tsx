import NextLink from 'next/link';

export type LinkListClasses<T> = {
  [key in 'root' | 'list' | 'listItem' | 'link']?: T;
};

export interface LinkListProps {
  classes?: LinkListClasses<string>;
  items: any[];
}

const LinkList = ({ classes = {}, items = [] }: LinkListProps) => {
  if (items.length < 1) return null;
  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {items.map((item) => {
          const link =
            item.target === '_blank' ? (
              <a className={classes.link} href={item.href} target={item.target}>
                {item.text}
              </a>
            ) : (
              <NextLink href={item.href} className={classes.link}>
                {item.text}
              </NextLink>
            );

          return (
            <li key={item.id} className={classes.listItem}>
              {link}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LinkList;
