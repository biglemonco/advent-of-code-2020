import { classicNameResolver } from "typescript";

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

	return accumulator;
}

/**
 * Find the final row in the list by swapping an instruction
 * @param input String input
 */
export const findFinalRow = (input: string) => {
	let hoRows = prepare(input);
	let accumulator = 0;
	let index = 0;
	const finalIndex = hoRows.length - 1;
	
	for (const [hoRowIndex, hoRow] of hoRows.entries()) {
		if (hoRow.instruction === 'acc') continue;
		let rows = [...hoRows];
		rows[hoRowIndex].instruction = hoRow.instruction === 'jmp' ? 'nop' : 'jmp';
		accumulator = 0;
		index = 0;
		let indexesVisited = [];
		let nextIndex = 0;

		while (!indexesVisited.includes(nextIndex) && index !== finalIndex) {
			index = nextIndex;
			indexesVisited.push(index);
			const row = rows[index];
			if (row.instruction === 'acc') {
				accumulator += row.modifier;
				nextIndex = index + 1;
			} else if (row.instruction === 'jmp') {
				nextIndex = index + row.modifier;
			} else if (row.instruction === 'nop') {
				nextIndex = index + 1;
			}
		}

		rows[hoRowIndex].instruction = hoRow.instruction === 'jmp' ? 'nop' : 'jmp';

		if (index === finalIndex) {
			break;
		}
	}

	return accumulator;
}