var assertThrows = function(func, x, y) {
  var threw = false;
  // Wrap func with a try/catch
  // If an error is thrown, set threw to true
  try{func(x, y);}
  catch (err){
threw = true;
console.log(err);
  }


  // Depending on whether an error was thrown, threw is either true or false
  return threw;
};

var multiply = function(x, y) {
  // use 'typeof' keyword to check if both x and y are numbers:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  if (typeof x !== 'number' || typeof y !== "number"  ) {
    // throw an error if either x or y is not a number
    console.log("Please try again with a number!");
  }
  else return x * y;
};
