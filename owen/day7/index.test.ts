import { countBags } from './index';
import input from './input.txt';

const sampleInput = `
light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.
owens blue bags contain 4 light red bags.
`;

describe('day 7', () => {
	test('challenge 1 sample data', () => {
		expect(countBags(sampleInput)).toBe(4);
	})
	test('challenge 1 real data', () => {
		expect(countBags(input)).toBe(0);
	})
	// test('challenge 2 sample data', () => {
	// 	expect(countBags(sampleInput)).toBe(0);
	// })
	// test('challenge 2 real data', () => {
	// 	expect(countBags(input)).toBe(0);
	// })
})