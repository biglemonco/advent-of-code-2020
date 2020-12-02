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

test('sample input works for challenge 1', () => {
  expect(bruteForce(sampleInput)).toBe(514579);
});

test('real input works for challenge 1', () => {
  const result = bruteForce(input);
  expect(result).toBe(567171);
});

test('sample input works for challenge 2', () => {
  expect(bruteForce(sampleInput, 3)).toBe(241861950);
});

test('real input works for challenge 2', () => {
  const result = bruteForce(input, 3);
  expect(result).toBe(212428694);
});
