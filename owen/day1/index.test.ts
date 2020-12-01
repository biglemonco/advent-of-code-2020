import { bruteForce } from './index';

import input from './input.txt';

const sampleInput: string = `
1721
979
366
299
675
1456
`;

test('sample input works', () => {
  expect(bruteForce(sampleInput)).toBe(514579);
});

test('real input works', () => {
  const result = bruteForce(input);
  console.log(result);
  expect(result).toBe(567171);
});
