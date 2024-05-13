import { ClassesBuilder, tw } from '@utils';

import { CompanyInfoClasses } from './CompanyInfo.types';

const location = 'CompanyInfo/CompanyInfo.classes';

const classes: CompanyInfoClasses = {
  root: tw`flex flex-wrap justify-center gap-y-3 divide-x divide-white divide-opacity-20`,
  infoItem: tw`px-4 leading-none text-white first-of-type:pl-0 last-of-type:pr-0`,
};

const companyInfoClasses = new ClassesBuilder({ location, classes }).classes;

export default companyInfoClasses;
