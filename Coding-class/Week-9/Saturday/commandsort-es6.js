console.log( 
  process.argv
    .slice(2)
    .map( num => parseInt(num) )
    .sort( (a, b) =>  a > b ) 
);

// es5
console.log(process.argv.slice(2).sort(function(a, b){
  return parseInt(a) > parseInt(b);
}));