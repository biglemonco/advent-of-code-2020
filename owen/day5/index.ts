
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

/**
 * Each character in a string has instructions to change the min or max
 * @param input 7 character string
 * @param startingMax Number to start max on
 */
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

/**
 * Get all the coordinates for the seat positions
 * @param input String
 */
export const getSeatCoordinates = (input: string): SeatCoordinates => {
	const [rowChars, colChars] = prepare(input);
	const row = getIndexFromRange(rowChars, MAX_ROW);
	const column = getIndexFromRange(colChars, MAX_COL);
	const seatId = (row * 8) + column;
	return { row, column, seatId }
}

/**
 * Loop through the seats and get the missing one
 * @param range Array of number of seat IDS
 */
export const getMissingSeat = (range: number[]) => {
	return range.find((seatId, i) => {
		if (i === 0) return false;
		return seatId !== range[i - 1] - 1;
	}) + 1;
}