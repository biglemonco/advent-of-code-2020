/**
 * Find the other number in the list and then times them together
 */
export const findTwo = (numbers: number[]) => {
  let result;

  for (const number of numbers) {
    const lookUp = 2020 - number;
    const n = numbers.find((num) => num === lookUp);

    if (n) {
      result = number * n;
      break;
    }
  }

  return result;
};

export const findThree = (numbers: number[]): number => {
  let result = 0;

  return result;
};

export default findTwo;
