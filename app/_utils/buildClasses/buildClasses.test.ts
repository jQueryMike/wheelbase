import buildClasses from './buildClasses';

describe('buildClasses', () => {
  it('should build component classes', async () => {
    const classes = {
      root: 'bg-white',
    };
    const overrides = { root: 'bg-black' };

    const result = await buildClasses(classes, overrides);

    // Add your assertions here
    // For example, you can expect the result to be a string or an array of strings
    expect(result).toBeDefined();
    expect(typeof result).toBe('object');
  });
});
