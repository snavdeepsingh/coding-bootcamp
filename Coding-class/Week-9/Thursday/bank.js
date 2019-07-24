console.log("hello");
let fs = require("fs-extra");
let action = process.argv[2];

function transaction(amount){
    return fs.appendFile("bank.txt", `${amount},`);
}

switch (action){
    case "total":
    fs.readFile("bank.txt", "utf8")
        .then(data => {
           let total =  data.split(",")
                          .filter(item => item !== "")
                          .reduce((carry, next) => carry + parseFloat(next), 0);


                console.log(`Your total is $${total}.`);
        })

    break;

    case "deposit":
     let depositAmount = parseFloat(process.argv[3]);

     transaction(depositAmount)
        .then(()=> console.log(`Deposited $${depositAmount}.`));
    break;

    case "withdraw":
        let withdrawAmount = parseFloat(process.argv[3]);

        transaction(withdrawAmount * -1)
            .then(()=> console.log(`Withdrew $${withdrawAmount}.`));
        break;

        case "lotto":
        let lottoChance = Math.floor(Math.random() * 10);

        if (lottoChance > 5)
            transaction(7).then(()=> console.log(`You won $7.`));
        else
            transaction(-.50).then(()=> console.log(`You lost $0.25.`));
        break;
}

