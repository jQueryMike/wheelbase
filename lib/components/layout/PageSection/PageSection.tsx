import Block from '@interfaces/Block';

import { BlockList } from '../../utility-components/BlockList';

export type PageSectionClasses<T> = {
  [key in 'root' | 'container' | 'areasContainer' | 'area']?: T;
};

export interface PageSectionArea {
  id: string;
  columnSpan: number;
  blocks: Block[];
}

export interface PageSectionProps {
  classes?: PageSectionClasses<string>;
  areas?: PageSectionArea[];
}

const PageSection = ({ classes = {}, areas = [] }: PageSectionProps) =>
  areas.length > 0 ? (
    <section className={classes.root}>
      <div className={classes.container}>
        <div className={classes.areasContainer}>
          {areas.map((area: PageSectionArea) => (
            <div key={area.id} className={classes.area}>
              <BlockList blocks={area.blocks} />
            </div>
          ))}
        </div>
      </div>
    </section>
  ) : undefined;

export default PageSection;
