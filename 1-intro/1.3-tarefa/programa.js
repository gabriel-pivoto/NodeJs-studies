const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite dois números separados por espaço: ", (input) => {
  const [a, b] = input.split(" ").map(Number);
  const c = a + b;
  console.log(`A soma dos valores é: ${c}`);
  rl.close();
});
