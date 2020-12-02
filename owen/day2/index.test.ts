import { extractValidPasswords } from './index';

import input from './input.txt';

const sampleInput = `
1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
`;

describe('day 2', () => {
  test('challenge 1 sample data', () => {
    expect(extractValidPasswords(sampleInput)).toBe(2);
  });
  test('challenge 1 real data', () => {
    const total = extractValidPasswords(input);
    console.log(total);
    expect(total).toBe(524);
  });
});
