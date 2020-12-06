import { countUniqueValues, countUniqueValuesForAllGroups } from './index';

import input from './input.txt';

const sampleInput1 = `
abcx
abcy
abcz
`

const sampleInput2 = `
abc

a
b
c

ab
ac

a
a
a
a

b
`

describe('day 6', () => {
	test('challenge 1 sample data 1', () => {
		const total = countUniqueValues(sampleInput1);
		expect(total).toBe(6);
	});
	test('challenge 1 sample data 2', () => {
		const total = countUniqueValues(sampleInput2);
		expect(total).toBe(11);
	});
	test('challenge 1 real data', () => {
		const total = countUniqueValues(input);
		expect(total).toBe(7120);
	});
	test('challenge 2 sample data 1', () => {
		const total = countUniqueValuesForAllGroups(sampleInput1);
		expect(total).toBe(3);
	});
	test('challenge 2 sample data 2', () => {
		const total = countUniqueValuesForAllGroups(sampleInput2);
		expect(total).toBe(6);
	});
	test('challenge 2 real data', () => {
		const total = countUniqueValuesForAllGroups(input);
		expect(total).toBe(3570);
	});
});