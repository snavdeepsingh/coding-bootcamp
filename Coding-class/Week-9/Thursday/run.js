let arg = process.argv;
console.log(arg);

let num1 = parseFloat(arg[2]);
let num2 = parseFloat(arg[3]);

if (num1 === num2){
    console.log(true);
}

if (num1 % 7 === 0 && num2 % 7 === 0){
    console.log(true);
}