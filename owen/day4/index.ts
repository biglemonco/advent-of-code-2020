
/**
 * Input the string and return an array of numbers
 * @param input string
 */
const prepare = (input: string): string[] => {
  return input
    .split(/\n\n/)
    .filter((n) => !!n)
    .map((n) => n.trim());
};

const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
const optionalFields = ['cid']

export const countValidPassports = (input: string) => {
	return prepare(input).filter(passport => {
		const keysUsed = passport.split(/\s/).map(item => item.split(':')[0]);
		const requiredFieldsUsed = requiredFields.filter(key => keysUsed.includes(key)).length;
		console.log(passport, keysUsed, requiredFieldsUsed)
		return requiredFieldsUsed === requiredFields.length;
	}).length
}