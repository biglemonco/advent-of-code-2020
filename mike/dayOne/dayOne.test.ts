import findTwo, { findThree } from './dayOne';
import numbers from './numbers';
const testNumbers = [1721, 979, 366, 299, 675, 1456];
describe('Part one', () => {
  test('should equal 514579', () => {
    const result = findTwo(testNumbers);
    expect(result).toBe(514579);
  });

  test('should get correct answer', () => {
    const result = findTwo(numbers);
    console.log('result', result);
    expect(result).toBe(55776);
  });
});

describe('Part two', () => {
  test('should return example test', () => {
    const result = findThree(testNumbers);
    expect(result).toEqual(241861950);
  });
});
