
/**
 * Input the string and return an array of numbers
 * @param input string
 */
const prepare = (input: string): string[][] => {
  return input
    .split(/\n\n/)
	.filter(Boolean)
	  .map((n) => (
		  n
			.replace(/\s+/g, '')
			.split('')
		  	.filter(Boolean)
	));
}

/**
 * Count the number of unique values in each section
 * @param input 7 character string
 */
export const countUniqueValues = (input: string): number => {
	console.log('prepared', prepare(input))
	return prepare(input).reduce((total, items) => {
		console.log(items)
		let chars = [];
		items.forEach(char => {
			if (!chars.includes(char)) chars.push(char);
		})
		return total + chars.length;
	}, 0)
}
