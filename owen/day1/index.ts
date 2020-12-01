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
export const bruteForce = (input: string): number => {
  const arr = prepare(input);

  for (const [_, number] of arr.entries()) {
    const match = arr.find(
      (matchingNumber: number) => number + matchingNumber === 2020
    );
    if (!!match) return number * match;
  }
};
