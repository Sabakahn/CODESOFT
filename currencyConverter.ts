import inquirer from "inquirer";
const conversion :any ={
    USD :1,//base Amount
    EUR : 0.91,
    IND :74.57,
    PKR :208
}
 const answer :{
    from : string,
    to :string,
    amount : number
 } = await inquirer.prompt([
    {
        name :"from",
        message:"Enter from currency",
        type:"list",
        choices:["USD","EUR","IND","PKR"]
    },
    {
        name :"to",
        message:"Enter To currency",
        type:"list",
        choices:["USD","EUR","IND","PKR"]
    },
    {
        name :"amount",
        message:"Enter from amaount",
        type:"number"
    },
]);
let fromamount = conversion[answer.from]
let toamonut = conversion[answer.to]
let amount = answer.amount

let baseamount = amount / fromamount
let convertedamount = baseamount * toamonut


console.log(convertedamount.toFixed(2));