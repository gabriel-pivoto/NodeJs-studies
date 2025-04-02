const minimist  = require("minimist");


const args = minimist(process.argv.slice(2))

const sum = require('./sum').sum


const a = parseInt(args['a'])
const b = parseInt(args['b'])
// node .\index.js --a=5 --b=10
sum(a,b)

