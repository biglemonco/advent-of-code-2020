import {
  extractValidPasswordsByLength,
  extractValidPasswordsByPosition,
} from './index';

import input from './input.txt';

const sampleInput = `
1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
`;

describe('day 2', () => {
  test('challenge 1 sample data', () => {
    expect(extractValidPasswordsByLength(sampleInput)).toBe(2);
  });
  test('challenge 1 real data', () => {
    const total = extractValidPasswordsByLength(input);
    expect(total).toBe(524);
  });
  test('challenge 2 sample data', () => {
    expect(extractValidPasswordsByPosition(sampleInput)).toBe(1);
  });
  test('challenge 2 real data', () => {
    const total = extractValidPasswordsByPosition(input);
    expect(total).toBe(485);
  });
});
