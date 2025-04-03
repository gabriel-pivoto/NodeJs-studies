import inquirer from "inquirer";
import chalk from "chalk";
import fs from "fs";

operation();

function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "Create account",
          "Check balance",
          "Deposit",
          "Withdraw",
          "Exit",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];
      switch (action) {
        case "Create account":
          createAccount();
          break;

        case "Check balance":
          getAccountBalance();
          break;

        case "Deposit":
          deposit();
          break;

        case "Withdraw":
          withdraw();
          break;

        case "Exit":
          console.log(chalk.bgBlue.black("Thank you for using Accounts!"));
          process.exit();
          break;
      }
    })
    .catch((err) => console.log(err));
}

function createAccount() {
  console.log(chalk.bgGreen.black("Congratulations on choosing our bank!"));
  console.log(chalk.green("Set up your account options below"));
  buildAccount();
}

function buildAccount() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "Enter a name for your account:",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      if (!fs.existsSync("accounts")) {
        fs.mkdirSync("accounts");
      }
      if (fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(
          chalk.bgRed.black("This account already exists, choose another name!")
        );
        buildAccount();
        return;
      }
      fs.writeFileSync(
        `accounts/${accountName}.json`,
        '{"balance": 0}',
        function (err) {
          console.log(err);
        }
      );
      console.log(
        chalk.green("Congratulations, your account has been created!")
      );
      operation();
    });
}

function deposit() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "What is your account name?",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];
      if (!checkAccount(accountName)) {
        return deposit();
      }

      inquirer
        .prompt([
          {
            name: "amount",
            message: "How much would you like to deposit?",
          },
        ])
        .then((answer) => {
          const amount = answer["amount"];
          addAmount(accountName, amount);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

function checkAccount(accountName) {
  if (!fs.existsSync(`accounts/${accountName}.json`)) {
    console.log(
      chalk.bgRed.black("This account does not exist, choose another name!")
    );
    return false;
  }
  return true;
}

function addAmount(accountName, amount) {
  const accountData = getAccount(accountName);

  if (!amount) {
    console.log(
      chalk.bgRed.black("An error occurred, please try again later!")
    );
    return deposit();
  }

  accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);
  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    function (err) {
      console.log(err);
    }
  );

  console.log(
    chalk.green(`An amount of $${amount} has been deposited into your account!`)
  );
  operation();
}

function getAccount(accountName) {
  const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
    encoding: "utf-8",
    flag: "r",
  });

  return JSON.parse(accountJSON);
}

function getAccountBalance() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "What is your account name?",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];

      if (!checkAccount(accountName)) {
        return getAccountBalance();
      }
      const accountData = getAccount(accountName);
      console.log(
        chalk.bgBlue.black(
          `\nHello, your account balance is $${accountData.balance}`
        )
      );
      operation();
    })
    .catch((err) => console.log(err));
}

function withdraw() {
  inquirer
    .prompt([
      {
        name: "accountName",
        message: "What is your account name?",
      },
    ])
    .then((answer) => {
      const accountName = answer["accountName"];
      if (!checkAccount(accountName)) {
        return withdraw();
      }

      inquirer
        .prompt([
          {
            name: "amount",
            message: "How much would you like to withdraw?",
          },
        ])
        .then((answer) => {
          const amount = answer["amount"];
          removeAmount(accountName, amount);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
}

function removeAmount(accountName, amount) {
  const accountData = getAccount(accountName);
  if (!amount) {
    console.log(
      chalk.bgRed.black("An error occurred, please try again later!")
    );
    return withdraw();
  }

  if (accountData.balance < amount) {
    console.log(chalk.bgRed.black("Insufficient funds!"));
    return withdraw();
  }

  accountData.balance = parseFloat(accountData.balance) - parseFloat(amount);
  fs.writeFileSync(
    `accounts/${accountName}.json`,
    JSON.stringify(accountData),
    function (err) {
      console.log(err);
    }
  );

  console.log(
    chalk.green(`An amount of $${amount} has been withdrawn from your account!`)
  );
  operation();
}
