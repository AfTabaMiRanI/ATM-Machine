#! /usr/bin/env node
import inquirer from "inquirer";
let mybankBalance = 15000;
let myPin = 887766;
let pinAns = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin",
        type: "number"
    }
]);
if (pinAns.pin === myPin) {
    console.log("Welcome");
    let actAction = await inquirer.prompt([
        {
            name: "action",
            message: "Please Choose the Any One Option",
            type: "list",
            choices: ["check balance", "withdraw", "fast cash"]
        }
    ]);
    if (actAction.action === "check balance") {
        console.log(`your balance is : ${mybankBalance}`);
    }
    else if (actAction.action === "withdraw") {
        let amountAns = await inquirer.prompt({
            name: "amount",
            message: "Enter Your Amount",
            type: "number"
        });
        if (amountAns.amount < mybankBalance) {
            (mybankBalance -= amountAns.amount),
                console.log(`Your Remaining Balance is: ${mybankBalance}`);
        }
        else if (amountAns.amount > mybankBalance) {
            console.log(`Insuficiant Balance!\n your balance is ${mybankBalance}`);
        }
    }
    else if (actAction.action === "fast cash") {
        let isCash = await inquirer.prompt({
            name: "cash",
            message: "choose the amount",
            type: "list",
            choices: ["2000", "4000", "6000", "8000", "10000"]
        });
        mybankBalance -= isCash.cash;
        console.log(`Your Remaining Balance is: ${mybankBalance}`);
    }
}
else if (pinAns.pin !== myPin) {
    console.log("Incorrect Pin");
}
