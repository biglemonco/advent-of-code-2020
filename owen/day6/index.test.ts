import { countUniqueValues } from './index'

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
});