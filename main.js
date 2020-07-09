const randomize = require('./emagi-random.js');
const searchFor = require('./emagi-search.js');
const emagifying = require('./emagify.js');
const symbol = require('./emagi-symbols.js');
const wordList = require('./emagi-words.js');
const symbols = require('./emagi-symbols.js');

let userArgs = process.argv.slice(2);

let userInput = process.argv[2]
let userInput2 = process.argv[3]
let message = 'Please type: RANDOM for random emoji. SEARCH plus a name to find an emoji or CONVERT and your sentence to make changes';


if (userInput === 'random') {
    console.log(randomize(symbol))
}
else if (userInput === 'search') {
    console.log(searchFor(userInput2).join())
}
else if (userInput === 'convert') {
    console.log(emagifying(userArgs).join().replace(/,/g, ' '))
} else {
    console.log(message)
}








