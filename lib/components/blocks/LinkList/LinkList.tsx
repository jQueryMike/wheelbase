import cn from 'classnames';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export type LinkListClasses<T> = {
  [key in 'root' | 'list' | 'listItem' | 'link' | 'linkSelected']?: T;
};

export interface LinkListProps {
  classes?: LinkListClasses<string>;
  items: any[];
}

const LinkList = ({ classes = {}, items = [] }: LinkListProps) => {
  const router = useRouter();
  const isSelected = (href: string) => `${router.asPath}/`.replaceAll('//', '/') === href;

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {items.map((item) => {
          const link =
            item.target === '_blank' ? (
              <a
                className={cn(classes.link, { [classes.linkSelected || '']: isSelected(item.href) })}
                href={item.href}
                target={item.target}
              >
                {item.text}
              </a>
            ) : (
              <NextLink
                className={cn(classes.link, { [classes.linkSelected || '']: isSelected(item.href) })}
                href={item.href}
              >
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
