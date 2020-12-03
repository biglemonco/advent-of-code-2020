import { countTrees } from './index';

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
    console.log(trees);
    expect(trees).toBe(171);
  });
});
