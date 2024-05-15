import buildConfig from './buildConfig';


import case_one from './mocks/case-one-data.json';
import case_one_expected from './mocks/case-one-expected.json';


describe('generateConfig', () => {
  it('should return null if no data provided', () => {
    // expect(buildConfig()).toBeNull();
    expect(buildConfig(case_one)).toEqual(case_one_expected);
  });
});
