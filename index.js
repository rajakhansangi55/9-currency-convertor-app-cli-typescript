#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to RA Currency Convertor App!");
let currency = {
    USD: 1,
    PKR: 279.72,
    Saudi_Riyal: 3.75,
    Indian_rupee: 83.36,
    Euro: 0.93
};
let myLoop = true;
while (myLoop) {
    let userInput = await inquirer.prompt([
        {
            type: 'list',
            name: 'from',
            message: "Select currency you want to convert from!",
            choices: ["USD", "PKR", "Saudi_Riyal", "Indian_Rupee", "Euro"]
        }, {
            type: 'list',
            name: 'to',
            message: "Select currency you want to convert into!",
            choices: ["USD", "PKR", "Saudi_Riyal", "Indian_Rupee", "Euro"]
        }, {
            type: 'number',
            name: "amount",
            message: "Enter amount you want to convert!"
        }
    ]);
    let { from, to, amount } = userInput;
    let fromAmount = currency[from];
    let toAmount = currency[to];
    let baseCurrency = amount / fromAmount;
    let convertedAmount = baseCurrency * toAmount;
    let finalOutput = convertedAmount.toFixed(2);
    console.log(`${from} amount ${amount} converted to ${to} = ${finalOutput}`);
    let convertAgain = await inquirer.prompt({
        type: 'confirm',
        name: 'more',
        message: "Do you want more conversions?",
        default: false,
    });
    if (!convertAgain.more) {
        myLoop = false,
            console.log(`\nThank You for using our Currency Converter app`);
    }
}
