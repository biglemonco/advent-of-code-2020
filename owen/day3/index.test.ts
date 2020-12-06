import { countTrees, multiplyArray } from './index';

import input from './input.txt';

const sampleInput = `
..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#
`;

describe('day 3', () => {
  test('challenge 1 sample data', () => {
    expect(countTrees(sampleInput, 11)).toBe(7);
  });
  test('challenge 1 real data', () => {
    const trees = countTrees(input, 31);
    expect(trees).toBe(178);
  });
  test('challenge 2 sample data', () => {
    const trees = [
      countTrees(sampleInput, 11, 1, 1),
      countTrees(sampleInput, 11, 3, 1),
      countTrees(sampleInput, 11, 5, 1),
      countTrees(sampleInput, 11, 7, 1),
      countTrees(sampleInput, 11, 1, 2),
    ];
    expect(trees).toEqual([2, 7, 3, 4, 2]);
    expect(multiplyArray(trees)).toBe(336);
  });
  test('challenge 2 real data', () => {
    const trees = [
      countTrees(input, 31, 1, 1),
      countTrees(input, 31, 3, 1),
      countTrees(input, 31, 5, 1),
      countTrees(input, 31, 7, 1),
      countTrees(input, 31, 1, 2),
    ];
    expect(multiplyArray(trees)).toBe(3492520200);
  });
});
