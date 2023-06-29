import { BlockList } from '@components/utility-components/BlockList';
import PageSectionProps from '@interfaces/PageSection';
import PageSectionArea from '@interfaces/PageSectionArea';
import cn from 'classnames';

const PageSection = ({ id, areas }: PageSectionProps) => (
  <section key={id}>
    <div className={cn('grid', `grid-cols-${areas.length}`)}>
      {areas.map((area: PageSectionArea) => (
        <div key={area.id}>
          <BlockList blocks={area.blocks} />
        </div>
      ))}
    </div>
  </section>
);

export default PageSection;
