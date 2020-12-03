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
 */
export const countTrees = (input: string, maxRowIndex: number) => {
  const arr = prepare(input);
  //   console.log(arr);
  let captured = [];
  let index = 0;
  arr.forEach((row: string) => {
    if (index >= maxRowIndex) index -= maxRowIndex;
    // console.log(row, index, row.charAt(index));
    captured.push(row.charAt(index));
    index += 3;
  });
  captured.shift(); // Remove the first one because it should start on the 2nd line
  //   console.log(captured, captured.length);
  return captured.filter((e) => e === '#').length;
};
