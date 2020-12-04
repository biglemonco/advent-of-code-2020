
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

const fieldValidation = {
	byr: /^(19[2-8][0-9]|199[0-9]|200[0-2])$/,
	iyr: /^(201[0-9]|2020)$/,
	eyr: /^(202[0-9]|2030)$/,
	hgt: /^(1[5-8][0-9]|19[0-3])cm$|^(59|6[0-9]|7[0-6])in$/,
	hcl: /^#[0-9a-f]{6}$/,
	ecl: /^(amb|blu|brn|gry|grn|hzl|oth)$/,
	pid: /^\d{9}$/,
}
const requiredFields = Object.keys(fieldValidation);

/**
 * Cycle through each passport and return the number of passports with the required fields
 * @param input String input
 */
export const countPassportsWithRequiredFields = (input: string) => {
	return prepare(input).filter(passport => {
		const keysUsed = passport.split(/\s/).map(item => item.split(':')[0]);
		const requiredFieldsUsed = requiredFields.filter(key => keysUsed.includes(key)).length;
		return requiredFieldsUsed === requiredFields.length;
	}).length
}

/**
 * Cycle through each passport and return the number of passports with required and valid data
 * @param input String input
 */
export const countPasswordWithValidFields = (input: string) => {
	return prepare(input).filter(passport => {
		const passportObj = passport.split(/\s/).reduce((pp, item) => {
			const [key, val] = item.split(':')
			pp[key] = val;
			return pp;
		}, {});
		const keysUsed = Object.keys(passportObj);
		const requiredFieldsMatching = requiredFields.filter(field => {
			if (!keysUsed.includes(field)) return false;
			return !!fieldValidation[field].test(passportObj[field]);
		}).length
		return requiredFieldsMatching === requiredFields.length;
	}).length
}