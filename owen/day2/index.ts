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

export const extractValidPasswords = (input: string) => {
  const arr = prepare(input);
  return arr.filter((row) => {
    const [full, min, max, char, password] = row;
    const total = (password.match(new RegExp(char, 'g')) || []).length;
    return total >= parseInt(min) && total <= parseInt(max);
  }).length;
};
