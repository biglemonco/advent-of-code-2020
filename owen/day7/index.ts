import { isWhiteSpaceLike } from "typescript";

interface children {
	[key: string]: number;
}

interface bag {
	parent: string;
	children: children;
}

/**
 * Input the string and return an array
 * @param input string
 */
const prepare = (input: string): bag[] => {
  return input
      .split(/\n/)
	  .filter(Boolean)
	  .map((row) => {
		  const match = row.match(/(.+)\sbags\scontains?\s([^\.]+)./);
		  if (!match) throw new Error(`No match on ${row}`);
		  return {
			  parent: match[1],
			  children: match[2]
				  .split(',')
				  .reduce((all, child) => {
					  if (child === 'no other bags') return all;
					  const childMatch = child.match(/(\d+)\s(.+)\sbags?/)
					  if (!childMatch) throw new Error(`No child match on ${child}`);
					  all[childMatch[2]] = parseInt(childMatch[1]);
					  return all;
				  }, {}),
		  }
	  });
}

/**
 * Get all the bags that include a child key in the children
 * @param bags 
 * @param childKey 
 * @param count
 */
const getBagsWith = (bags: bag[], childKeys: string[], count: number = 1): bag[] => {
	return bags
		.filter(bag => {
			return childKeys.filter(childKey => {
				if (!Object.keys(bag.children).includes(childKey)) return false;
				return bag.children[childKey] >= count;
			}).length
		});
}

/**
 * Get only unique values
 * @param value 
 * @param index 
 * @param self 
 */
const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
}

/**
 * DESCRIPTION HERE
 * @param input String input
 */
export const countBags = (input: string) => {
	const bags = prepare(input);
	const bagsWithGoldDirectly = getBagsWith(bags, ['shiny gold'], 1).map(b => b.parent);

	let times = 0;
	let latestBags = [];
	let bagsWithGoldIndirectly = [];
	let allBags = bagsWithGoldDirectly;

	while (times < 25 ) {
		latestBags = getBagsWith(bags, allBags, 1).map(b => b.parent)
		bagsWithGoldIndirectly.push(...latestBags);
		allBags = [...bagsWithGoldDirectly, ...bagsWithGoldIndirectly];
		times++;
	}

	const uniqueBags = allBags.filter(onlyUnique);

	// console.log(bagsWithGoldDirectly, bagsWithGoldIndirectly, uniqueBags.length, times)
	return uniqueBags.length;
}