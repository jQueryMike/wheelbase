import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';
import { buildConfig } from '@utils/buildConfig';

import companyInfoClasses from './CompanyInfo.classes';
import { CompanyInfoProps } from './CompanyInfo.types';

const CompanyInfo = ({ items, styling, overrides }: CompanyInfoProps) => {
  const companyInfoItems = items.map((x: any) => buildConfig(x));
  const classes = buildClasses(companyInfoClasses, overrides);
  return (
    <BaseComponent
      as="div"
      className={classes.root}
      styling={styling}
      stylingOptions={{ atomicType: 'atom', textType: 'text' }}
      aria-label="Company information"
    >
      {companyInfoItems.length > 0 &&
        companyInfoItems.map((item: any) => (
          <div className={classes.infoItem}>
            {item.companyInfo.label}
            {item.companyInfo.number}
          </div>
        ))}
    </BaseComponent>
  );
};

export default CompanyInfo;
