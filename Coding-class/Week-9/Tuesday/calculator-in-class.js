let arguments = process.argv;
let operator = arguments[2];

let first = parseFloat(arguments[3]);
let second = parseFloat(arguments[4]);
let result;

switch(operator){
    case "add":
        result = first + second;
    break;

    case "subtract":
        result = first - second;
    break;

    case "divide":
        result = first / second;
    break;

    case "multiply":
        result = first * second;
    break;

    case "remainder":
        result = first % second;
    break;

    case "exp":
        result = Math.pow(first, second);
    break;

    case "alg":
        // grab the argv directly from the process again
        let statement = process.argv[3];
        // split it on the "x" so we can divy up the string parts
        let parts = statement.split("x");
        // this is the first number, because it's before the x
        let firstNum = parseInt(parts[0]);
        // this is the +secondNumber and the =resultNumber
        let algParts = parts[1].split("=")
        // grab the operator 
        let algOperator = algParts[0][0];
        // remove the operator sign and we have the second number
        let secondNum = parseInt(algParts[0].replace(algOperator, ""));
        // this is the result
        let resultNum = parseInt(algParts[1]);
        console.log(algOperator)
        switch(algOperator){
            case "+":
                result = (resultNum - secondNum) / firstNum;
            break;

            case "-":
                result = (resultNum + secondNum) / firstNum;
            break;

            case "*":
                result = (resultNum / secondNum) / firstNum;
            break;      
            
            case "/":
                console.log(resultNum, secondNum, firstNum);
                result = (resultNum * secondNum) / firstNum;
            break;
        }
        
    break;
}

console.log(result);