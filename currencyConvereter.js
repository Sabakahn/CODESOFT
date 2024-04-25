import inquirer from "inquirer";
const conversion = {
    USD: 1,
    EUR: 0.91,
    IND: 74.57,
    PKR: 208
};
const answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "EUR", "IND", "PKR"]
    },
    {
        name: "to",
        message: "Enter To currency",
        type: "list",
        choices: ["USD", "EUR", "IND", "PKR"]
    },
    {
        name: "amount",
        message: "Enter from amaount",
        type: "number"
    },
]);
//const {from,to,amount} = answer; 
//if (from && to && amount){
//  let result = conversion[from][to]*amount;
//console.log(`Your conversion from ${from} to ${to} is ${result} `)
//}else {
//  console.log("Invalid input")
//}
let fromamount = conversion[answer.from];
let toamonut = conversion[answer.to];
let amount = answer.amount;
let baseamount = amount / fromamount;
let convertedamount = baseamount * toamonut;
console.log(convertedamount.toFixed(2));
