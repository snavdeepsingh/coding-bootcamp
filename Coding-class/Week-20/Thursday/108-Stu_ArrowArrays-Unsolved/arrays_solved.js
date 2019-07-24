const princesses = [
    { name: "Rapunzel", age: 18 },
    { name: "Mulan", age: 16 },
    { name: "Anna", age: 18 },
    { name: "Moana", age: 16 }
  ];

princesses.forEach( item => console.log(`${item.name}: ${item.age}`));


const names = princesses.map(item => item.name);
const ages = princesses.map(item => item.age);

console.log("names: ", names);
console.log("ages: ", ages);

const mNames = names.filter(name => name.startsWith("M"));
console.log(mNames);

const sum = princesses.reduce((sum, princess) => (sum + princess.age), 0);
const average = sum / princesses.length;
console.log("average age: ", average);

const lNames = princesses.filter(item => item.name.includes("l"));
console.log(lNames);
const lSum = lNames.reduce((sum, princess) => (sum + princess.age), 0);
const lAverage = lSum / lNames.length;
console.log("l-average: ", lAverage);
