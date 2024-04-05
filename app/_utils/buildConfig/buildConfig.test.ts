import buildConfig from './buildConfig';

describe('generateConfig', () => {
  it('should return null if no data provided', () => {
    expect(buildConfig()).toBeNull();
    expect(buildConfig({})).toBeNull();
  });
});
