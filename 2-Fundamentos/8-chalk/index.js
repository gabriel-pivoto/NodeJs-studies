import chalk from 'chalk';
const nota = 5

if (nota > 7){
    console.log(chalk.green('Parabéns! Você está aprovado!'))
}else{
    console.log(chalk.bgRed.black('Você precisa fazer a recuperação'))
}
