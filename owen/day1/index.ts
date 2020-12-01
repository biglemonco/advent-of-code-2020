/**
 * Input the string and return an array of numbers
 * @param input string
 */
const prepare = (input: string): number[] => {
  return input
    .split(/[\r|\n]/)
    .filter((n) => !!n)
    .map((n) => Number(n));
};

/**
 * Time to get out the sledge hammer...
 * @param input String input
 */
export const bruteForce = (input: string) => {
  const arr = prepare(input);
  console.log(arr);
  const val = arr.find((number: number) => {
    const match = arr.find((matchingNumber: number) => {
      if (number + matchingNumber === 2020) return matchingNumber;
    });
    if (!!match) {
      console.log(number, match, number * match);
      return number * match;
    }
  });
  console.log(val);
  return val;
};
