const convertToRGB = (input: string) => {
  try {
    input = input.replaceAll('#', '');

    if (input.length === 3) {
      input = `${input[0]}${input[0]}${input[1]}${input[1]}${input[2]}${input[2]}`;
    }

    const r = parseInt(input.slice(0, 2), 16);
    const g = parseInt(input.slice(2, 4), 16);
    const b = parseInt(input.slice(4, 6), 16);

    if (Number.isNaN(r) || Number.isNaN(g) || Number.isNaN(b)) return '0 0 0';

    return `${r} ${g} ${b}`;
  } catch (error) {
    return '0 0 0';
  }
};

export default convertToRGB;
