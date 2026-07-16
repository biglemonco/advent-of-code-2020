/**
 * Input the string and return an array of numbers
 * @param input string
 */
const prepare = (input: string): string[][] => {
  return input
    .split(/[\r|\n]/)
    .filter((n) => !!n)
    .map((r) => {
      return r.match(/(\d+)-(\d+)\s(\w+):\s(\w+)/);
    });
};

export const extractValidPasswordsByLength = (input: string) => {
  const arr = prepare(input);
  return arr.filter((row) => {
    const [full, min, max, char, password] = row;
    const total = (password.match(new RegExp(char, 'g')) || []).length;
    return total >= parseInt(min) && total <= parseInt(max);
  }).length;
};

export const extractValidPasswordsByPosition = (input: string) => {
  const arr = prepare(input);
  return arr.filter((row) => {
    const [full, pos1, pos2, char, password] = row;
    return (
      [
        password.charAt(parseInt(pos1) - 1) === char,
        password.charAt(parseInt(pos2) - 1) === char,
      ].filter(Boolean).length === 1
    );
  }).length;
};
