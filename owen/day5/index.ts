
/**
 * Input the string and return an array of numbers
 * @param input string
 */
const prepare = (input: string): string[] => {
	const results = input.trim().match(/^([F|B]{7})([R|L]{3})$/);
	if(!results) throw new Error(`No preparation match for ${input}`)
	return [ results[1], results[2] ];
}

interface SeatCoordinates {
	row: number;
	column: number;
	seatId: number;
}

const MAX_ROW = 127;
const MAX_COL = 7;

const getIndexFromRange = (input: string, startingMax: number) => {
	let min = 0;
	let max = startingMax;
	input.split('').forEach((char) => {
		if (char === 'F' || char === 'L') max -= Math.round((max - min) / 2);
		if (char === 'B' || char === 'R') min += Math.round((max - min) / 2);
		// console.log('char', char, min, max)
	})
	if (min !== max) throw new Error(`Range doesn't match: ${min} and ${max} from ${input}`)
	return max; // To turn it into an index
}

export const getSeatCoordinates = (input: string): SeatCoordinates => {
	const [rowChars, colChars] = prepare(input);
	const row = getIndexFromRange(rowChars, MAX_ROW);
	const column = getIndexFromRange(colChars, MAX_COL);
	const seatId = (row * 8) + column;
	return { row, column, seatId }
}