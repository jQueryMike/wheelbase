import getName from './getName';

describe('getName', () => {
  it('should return name with trailing numbers', () => {
    expect(getName('Block1')).toBe('Block');
    expect(getName('block2')).toBe('block');
    expect(getName('Block3')).toBe('Block');
    expect(getName('Block123')).toBe('Block');
    expect(getName('BlockXYZ123')).toBe('BlockXYZ');
  });

  it('should return the same name if it does not have trailing numbers', () => {
    expect(getName('block')).toBe('block');
    expect(getName('Block')).toBe('Block');
    expect(getName('BlockXYZ')).toBe('BlockXYZ');
    expect(getName('blockxyz')).toBe('blockxyz');
  });

  it("wshould return the correct name if the name has the 'Atom' suffix", () => {
    expect(getName('BlockAtom')).toBe('Block');
    expect(getName('blockAtom')).toBe('block');
    expect(getName('BlockXYZAtom')).toBe('BlockXYZ');
    expect(getName('blockxyzAtom')).toBe('blockxyz');
  });

  it('should return an empty string if the input is empty', () => {
    expect(getName('')).toBe('');
  });
});
