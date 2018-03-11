// Notes

// 1) Using async/await instead of promise chains would make things
// way more concise.

const readline = require('readline');

const inquirer = readline.createInterface(process.stdin, process.stdout);

const askUser = questions => new Promise(resolve => {
	let questionsChain = Promise.resolve([]);

  questions.forEach(question => {
  	questionsChain = questionsChain.then(answers => new Promise(resolve => {
      inquirer.question(`\n${question} \n`, answer => {
        answers.push(answer);
        resolve(answers);
      });
  	}));
  });

  questionsChain.then(answers => {
    inquirer.close();
    resolve(answers);
  });
});

module.exports = {askUser};
