module.exports = function(app){


    app.get("/:operator/:firstNum/:secondNum", function(req, res) {
        // res.send("Hello");
        var operator = req.params.operator;
        var firstNum =  req.params.firstNum;
        var secondNum = req.params.secondNum;

        switch(operator){
            case "add":
                result = (firstNum + secondNum);
            break;
        
            case "subtract":
                result = (resultNum - secondNum);
            break;
        
            case "multiply":
                result = (firstNum * secondNum);
            break;      
            
            case "divide":
                result = (firstNum / secondNum);
            break;
        }

      });
}