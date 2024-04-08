import inquirer from "inquirer";
let bankBalance = 1000; //balance
let pinCode = 2005; //pincode
const Atm = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "Enter your pin number",
});
if (Atm.pin === pinCode) {
    console.log(`your pin is correct !
         `);
    let operator = await inquirer.prompt({
        name: "operation",
        type: "list",
        choices: ["Withdraw", "Check balance"],
        message: "Please! guide us how much you want",
    });
    if (operator.operation === "Withdraw") {
        let amounts = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: "Enter you amount",
        });
        if (bankBalance < amounts.amount) {
            console.log(`your bank balance is ${bankBalance} and withdraw amount is ${amounts.amount}`);
            let lone = await inquirer.prompt({ name: 'apply',
                type: 'list',
                choices: ['Yes', 'No'],
                message: 'You want lone'
            });
            if (lone.apply === 'Yes') {
                let givelone = await inquirer.prompt({ name: 'lone',
                    type: 'number',
                    message: 'How much lone you want?'
                });
                if (givelone.lone <= 3 * bankBalance) {
                    console.log(`You got lone`);
                }
                else {
                    console.log(`your bank balance is low for lone`);
                }
            }
        }
        else {
            console.log(`your remaining Bank Balance is ${bankBalance - amounts.amount}`);
        }
    }
    else if (operator.operation === "Check balance") {
        console.log(`Your current Bank Balance is ${bankBalance}`);
    }
}
else {
    console.log(`Error! \n\tyour pin number is wrong`);
}
