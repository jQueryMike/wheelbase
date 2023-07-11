import { BlockList } from '@components/utility-components/BlockList';
import Block from '@interfaces/Block';

export type PageSectionClasses<T> = {
  [key in 'root' | 'areasContainer' | 'area']?: T;
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

const PageSection = async ({ classes = {}, areas = [] }: PageSectionProps) => (
  <section className={classes.root}>
    <div className={classes.areasContainer}>
      {areas.map((area: PageSectionArea) => (
        <div key={area.id} className={classes.area}>
          <BlockList blocks={area.blocks} />
        </div>
      ))}
    </div>
  </section>
);

export default PageSection;
