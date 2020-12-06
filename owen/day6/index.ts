
/**
 * Input the string and return an array of strings
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
 * Input the string and return an array of strings in groups
 * @param input string
 */
const prepareWithGroups = (input: string): string[][] => {
  return input
    .split(/\n\n/)
	.filter(Boolean)
	  .map((n) => (
		  n
			.split(/[\n|\r]/g)
		  	.filter(Boolean)
	));
}

/**
 * Count the number of unique values in each section
 * @param input 7 character string
 */
export const countUniqueValues = (input: string): number => {
	return prepare(input).reduce((total, items) => {
		let chars = [];
		items.forEach(char => {
			if (!chars.includes(char)) chars.push(char);
		})
		return total + chars.length;
	}, 0)
}

/**
 * Count the number of unique values in each section
 * @param input 7 character string
 */
export const countUniqueValuesForAllGroups = (input: string): number => {
	return prepareWithGroups(input).reduce((total, people) => {
		let allChars = {};
		people.forEach(chars => {
			chars.split('').forEach(char => {
				if (!Object.keys(allChars).includes(char)) allChars[char] = 0;
				allChars[char]++;
			})
		})
		return total + Object.values(allChars).filter(no => no === people.length).length;
	}, 0)
}
