// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================
console.log(
    process.argv
    .slice(2)
    .map(num => parseInt(num))
    .sort((a,b) => a>b)
);

// console.log(process.argv.slice(2).sort(function(a,b){
//     return parseInt(a) > parseInt(b);
// }));