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
 * @param levels Number of numbers required to match
 */
export const bruteForce = (input: string, levels: number = 2): number => {
  const arr = prepare(input);

  for (const [_, number1] of arr.entries()) {
    for (const [_, number2] of arr.entries()) {
      if (levels === 2 && number1 + number2 === 2020) return number1 * number2;
      for (const [_, number3] of arr.entries()) {
        if (levels === 3 && number1 + number2 + number3 === 2020)
          return number1 * number2 * number3;
      }
    }
  }
};
