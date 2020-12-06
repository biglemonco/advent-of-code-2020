/**
 * Input the string and return an array of numbers
 * @param input string
 */
const prepare = (input: string): string[] => {
  return input
    .split(/[\r|\n]/)
    .filter((n) => !!n)
    .map((n) => n.trim());
};

/**
 * Cycle through each row and increase the index to capture the correct character
 * @param input String
 * @param maxRowIndex Total indexes in the row
 * @param rightIncrement The number to jump right
 * @param downIncrement The number to jump down
 */
export const countTrees = (
  input: string,
  maxRowIndex: number,
  rightIncrement: number = 3,
  downIncrement: number = 1
) => {
  const arr = prepare(input);

  let captured = [];
  let rightIndex = 0;
  let downIndex = 0;

  while (downIndex <= arr.length - 1) {
    if (rightIndex >= maxRowIndex) rightIndex -= maxRowIndex;

    // Add the character to one big array
    const row = arr[downIndex];
    captured.push(row.charAt(rightIndex));
    // console.log(row, index, row.charAt(index));

    // Increase the indexes to the next row and index position
    rightIndex += rightIncrement;
    downIndex += downIncrement;
  }

  captured.shift(); // Remove the first one because it should start on the 2nd line
  return captured.filter((e) => e === '#').length;
};

/**
 * Multiply all items in an array
 * @param arr Array of numbers to multiply
 */
export const multiplyArray = (arr: number[]) => {
  return arr.reduce((total: number, no: number) => {
    return total * no;
  }, 1);
};
