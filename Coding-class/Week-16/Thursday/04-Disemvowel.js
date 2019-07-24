var disemvowel = function(str) {
  if (typeof str === "number") {
    return String(str);
  }
  return str.replace(/[aeiou]/gi, "");
};

module.exports = disemvowel;

// run test for upper case
// run test for lower case
// run test with mix strings and numbers