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

describe('day 1', () => {
  test('challenge 1 sample input', () => {
    expect(bruteForce(sampleInput)).toBe(514579);
  });
  test('challenge 1 real input', () => {
    const result = bruteForce(input);
    expect(result).toBe(567171);
  });
  test('challenge 2 sample input', () => {
    expect(bruteForce(sampleInput, 3)).toBe(241861950);
  });
  test('challenge 1 real input', () => {
    const result = bruteForce(input, 3);
    expect(result).toBe(212428694);
  });
});
