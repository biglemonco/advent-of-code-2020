import { getSeatCoordinates, getMissingSeat } from './index'

import input from './input.txt';

describe('day 5', () => {
	test('challenge 1 sample data 1', () => {
		const { row, column, seatId } = getSeatCoordinates('FBFBBFFRLR');
		expect(row).toBe(44);
		expect(column).toBe(5);
		expect(seatId).toBe(357);
	});
	test('challenge 1 sample data 2', () => {
		const { row, column, seatId } = getSeatCoordinates('BFFFBBFRRR');
		expect(row).toBe(70);
		expect(column).toBe(7);
		expect(seatId).toBe(567);
	});
	test('challenge 1 sample data 3', () => {
		const { row, column, seatId } = getSeatCoordinates('FFFBBBFRRR');
		expect(row).toBe(14);
		expect(column).toBe(7);
		expect(seatId).toBe(119);
	});
	test('challenge 1 sample data 4', () => {
		const { row, column, seatId } = getSeatCoordinates('BBFFBBFRLL');
		expect(row).toBe(102);
		expect(column).toBe(4);
		expect(seatId).toBe(820);
	});
	test('challenge 1 real data', () => {
		const range = input
			.split(/\n/)
			.map(input => {
				const { row, column, seatId } = getSeatCoordinates(input);
				return seatId;
			})
			.sort((a, b) => b - a)
		const highest = range[0]
		expect(highest).toBe(998);
	});
	test('challenge 2 real data', () => {
		const range = input
			.split(/\n/)
			.map(input => {
				const { row, column, seatId } = getSeatCoordinates(input);
				return seatId;
			})
			.sort((a, b) => b - a)
		const mySeat = getMissingSeat(range);
		expect(mySeat).toBe(676);
	});
});