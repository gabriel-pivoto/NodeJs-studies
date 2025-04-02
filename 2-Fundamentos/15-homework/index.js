import inquirer from 'inquirer';

import chalk from 'chalk'

inquirer.prompt([{
    name: 'name', message: "Whats your name?",

},{
    name: 'age', message: 'how old are you?',
},
]).then((answers) =>{
    console.log(chalk.bgYellow.black(`My name is ${answers.name} and I am ${answers.age} years old!`))

}).catch(err => console.log(err))