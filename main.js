import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "user Id",
        message: "Kindly enter your Id: "
    },
    {
        name: "pin",
        message: "Entre your pin",
        type: "number"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current", "Saving"],
        message: "Select your account type: ",
    },
    {
        type: "list",
        name: "transcationType",
        choices: ["Fast Cash", "withdraw"],
        message: "Select your transcation",
        when(answers) {
            return answers.accountType;
        },
    },
    {
        type: "list",
        name: "wihtdrawmethod",
        choices: [10000, 20000, 30000],
        message: "Select your amount",
        when(answers) {
            return answers.transcationType == "Fast Cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "Select your amount",
        when(answers) {
            return answers.transcationType == "withdraw";
        },
    },
]);
if (answers.userTd && answers.userPin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remianing = balance - EnteredAmount;
        console.log("Your remianing balance is", remianing);
    }
    else {
        console.log("Insuficient Balance");
    }
}
