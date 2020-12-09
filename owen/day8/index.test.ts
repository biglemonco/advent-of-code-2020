import { findInfiniteValue, findFinalRow } from './index';
import input from './input.txt';

const sampleInput = `
nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6
`;

describe('day 8', () => {
	test('challenge 1 sample data', () => {
		expect(findInfiniteValue(sampleInput)).toBe(5);
	})
	test('challenge 1 real data', () => {
		expect(findInfiniteValue(input)).toBe(1446);
	})
	test('challenge 2 sample data', () => {
		expect(findFinalRow(sampleInput)).toBe(8);
	})
	test('challenge 2 real data', () => {
		expect(findFinalRow(input)).toBe(1403);
	})
})