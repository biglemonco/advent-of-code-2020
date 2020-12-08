
interface Row {
	instruction: 'acc' | 'jmp' | 'nop';
	modifier: number;
}
/**
 * Input the string and return an array
 * @param input string
 */
const prepare = (input: string): Row[] => {
  return input
      .split(/\n/)
	  .filter(Boolean)
	  .map((n) => {
		  const [instruction = '', modifierStr] = n.split(' ');
		  const modifier = parseInt(modifierStr.replace('+', ''));
		  return { instruction, modifier } as Row;
	  });
}

/**
 * DESCRIPTION HERE
 * @param input String input
 */
export const findInfiniteValue = (input: string) => {
	const rows = prepare(input);
	let accumulator = 0;
	let index = 0;
	let indexesVisited = [];

	while (!indexesVisited.includes(index)) {
		indexesVisited.push(index);
		const row = rows[index];
		if (row.instruction === 'acc') {
			accumulator += row.modifier;
			index++;
		} else if (row.instruction === 'jmp') {
			index += row.modifier;
		} else if (row.instruction === 'nop') {
			index++;
		}
	}

	console.log(accumulator, index, indexesVisited)

	return accumulator;
}