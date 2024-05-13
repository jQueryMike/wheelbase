import { BaseComponent } from '@components/utils';
import { buildClasses } from '@utils/buildClasses';

import companyInfoClasses from './CompanyInfo.classes';
import { CompanyInfoProps } from './CompanyInfo.types';

const CompanyInfo = ({ companyNumber, fcaNumber, vatNumber, styling, overrides }: CompanyInfoProps) => {
  const classes = buildClasses(companyInfoClasses, overrides);
  return (
    <BaseComponent
      as="div"
      className={classes.root}
      styling={styling}
      stylingOptions={{ atomicType: 'atom' }}
      aria-label="Company information"
    >
      {companyNumber && <div className={classes.infoItem}>Company No.{companyNumber}</div>}
      {fcaNumber && <div className={classes.infoItem}>FCA No.{fcaNumber}</div>}
      {vatNumber && <div className={classes.infoItem}>VAT No.{vatNumber}</div>}
    </BaseComponent>
  );
};

export default CompanyInfo;
