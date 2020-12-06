module.exports = function (plop) {
	// create your generators here
	plop.setGenerator('day', {
		description: 'new day for advent of code',
		prompts: [{
			type: 'input',
			name: 'user',
			message: 'person name please'
		}, {
			type: 'input',
			name: 'day',
			message: 'what day are we on?'
		}], // array of inquirer prompts
		actions: [{
			type: 'add',
			path: '{{user}}/day{{day}}/index.ts',
			templateFile: 'plop-templates/index.ts'
		}, {
			type: 'add',
			path: '{{user}}/day{{day}}/index.test.ts',
			templateFile: 'plop-templates/index.test.ts'
		}, {
			type: 'add',
			path: '{{user}}/day{{day}}/input.txt',
			templateFile: 'plop-templates/input.txt'
		}]
	});
};
