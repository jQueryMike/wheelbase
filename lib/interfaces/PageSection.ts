import PageSectionArea from './PageSectionArea';
import PageSectionSettings from './PageSectionSettings';

interface PageSection {
  id: string;
  areas: PageSectionArea[];
  settings: PageSectionSettings;
}

export default PageSection;
