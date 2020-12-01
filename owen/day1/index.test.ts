import { bruteForce } from './index';

const input: string = `
1721
979
366
299
675
1456
`;

test('input works', () => {
  expect(bruteForce(input)).toBe(514579);
});
