// var pasta = "Spaghetti"; // ES5 syntax

// const meat = "Pancetta"; // ES6 syntax

// let sauce = "Eggs and cheese"; // ES6 syntax

// // Template literals, like the one below, were introduced in ES6
// const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;

// function areTheNumbersAlmostEqual(num1, num2) {
// 	return Math.abs( num1 - num2 ) < Number.EPSILON;
// }
// console.log(areTheNumbersAlmostEqual(0.1 + 0.2, 0.3));

// function palindrome(str){
//     let word = str.toLowerCase();
//     let reverse = str.split("").reverse().join("");
//     if (word === reverse){
//         return true;
//     } else {
//         return false;
//     }
// }

// palindrome('madam');

// function sum(x){
//     if(arguments.length == 2){
//         return arguments[0] + arguments[1];
//     } else {
//         return function (y){
//             return x+y;
//         }
//     }
// };

// function sum(x,y){
//     if(y !== undefined){
//         return x+y;
//     } else {
//         return function(y){
//             return x+y;
//         }
//     }
// }
// console.log(sum(2,3));
// console.log(sum(2)(3));

// var d = {};

// [ 'zebra', 'horse' ].forEach(function(k) {
// 	d[k] = 'animal';
// });

// console.log(d);
// console.log(typeof NaN);
// console.log(1 + "1" + "2");
// let x = null;
// console.log(typeof x);

// for (var i = 0; i < 5; i++) {
//     setTimeout(function() { console.log(i); }, i * 1000 );
//   }
// 
// girl();
// function myFunc(y){
//     let x = y;
//     try {
//         if (x === "") throw "empty";
//         if (isNaN(x)) throw "Not a number";
//         if ( x === 0) throw "common man! Do better next time";
//         if (x > 10) throw "too big";
//         if (x < 1) throw "too small";
        
       
        
//     } catch (err){
//         console.log(err);
//     }
// };

// myFunc(3);

// var hero = {
//     _name: 'John Doe',
//     getSecretIdentity: function (){
//         return this._name;
//     }
// };

// var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

// console.log(stoleSecretIdentity());
// console.log(hero.getSecretIdentity());

// function add() {
//     var counter = 0;
//     function plus() {counter += 1;}
//     plus();    
//     return counter; 
// }

// let add = (function(){
//     var counter = 0;
//     return function (){
//         counter += 1;
//         return counter;
//     }
// })();
// let counter = 0;

// let add = function(){
//     counter += 1;
//     return counter;
// }



// console.log(add());
// console.log(add());
// console.log(add());

// (function(x) {
//     return (function(y) {
//         console.log(x);
//     })(2)
// })(1);

// var a={},
//     b=4,
//     c={key:'c'},
//     d={key:'d'};

// a[b]=123;
// a[c]=456;
// a[d]=789;


// // console.log(a[b]);
// // console.log(a[c]);
// console.log(a);

// console.log(typeof '0')
// console.log(false !== '0')

// console.log("0 || 1 = "+(1 || 1));
// console.log("1 || 2 = "+(0 || 2));
// console.log("0 && 1 = "+("" && 0));
// console.log("1 && 2 = "+(0 && ""));

// console.log(false == '0');


// var list = readHugeList();

// var nextListItem = function() {
//     var item = list.pop();

//     if (item) {
//         // process the list item...
//        setTimeout(nextListItem, 0) ;
//     }
// };

// var counter = 10;

// while (counter > 0){
//     console.log(counter--);
// }

// var counter = function(value){
//     if (value > 0){
//         console.log(value)
//         return counter(value - 1);
//     } else {
//         return value;
//     }
// };

// counter(10);

// var factorial = function(number){
//     if (number <= 0){
//         return 1;
//     } else {
//         return number * factorial(number - 1);
//     }
// };

// console.log(factorial(-5));

// const arrToObj = ([key, value]) => ({[key]: value}); 
// console.log(arrToObj([2,4,6,8]));

// let a = {
//     b: 2,
//     c: 3,
//     d: 4
// };

// console.log(a['d']);

// ================================================================

// let hash = function(string, max){
//     let hash = 0;
//     for (let i = 0; i < string.length; i++){
//         hash += string.charCodeAt(i);
//     }
//     return hash % max;
// }

// let HashTable = function(key, value){
    
//     let storage = [];
//     const storageLimit = 100;

//     this.print = function(){
//         console.log(storage);
//     }

//     this.add = function(key, value){
//         let index = hash(key, storageLimit);
//         if (storage[index] === undefined){
//             storage[index] = [[key, value]];
//         } else {
//             let inserted = false;
//             for(let i = 0; i < storage[index]; i++){
//                 if (storage[i][0] === key){
//                     storage[i][1] = value;
//                     inserted = true;
//                 }
//             }
//             if(inserted === false){
//                 storage[index].push([key, value]);
//             }
//         }
//     }

//     this.remove = function(key){
//         let index = hash(key, storageLimit);
//         if(storage[index].length === 1 && storage[index][0][0] === key){
//             delete storage[index];
//         } else {
//             for(let i = 0; i < storage[index].length; i++){
//                 if (storage[index][i][0] === key){
//                     delete storage[index][i];
//                 }
//             }
//         }
//     }

//     this.lookUp = function(key){
//         let index = hash(key, storageLimit);
//         if(storage[index] === undefined){
//             return undefined;
//         } else {
//             for (let i = 0; i < storage[index].length; i++){
//                 if (storage[index].length === 1 && storage[index][0][0] === key){
//                     return storage[index][i][1]; 
//             } else if (storage[index][i][0] === key) {
//                     return storage[index][i][1];
//                 }
//             }
//         }
//     }

//     this.update = function(key, value){
//         let index = hash(key, storageLimit);
//         if(storage[index] === undefined){
//             return undefined;
//         } else {
//             for (let i = 0; i < storage[index].length; i++){
//                 if (storage[index].length === 1 && storage[index][0][0] === key){
//                     storage[index][0][1] = value;
//                     return storage[index][i][1]; 
//             } else if (storage[index][i][0] === key) {
//                 storage[index][i][1] = value;
//                     return storage[index][i][1];
//                 }
//             }
//         }
//     }
// }



// let ht = new HashTable();
// ht.print();
// ht.add("Navdeep", 38);
// ht.add("Bali", 45);
// ht.add("Preet", 42);
// ht.add("Kaval", 45);
// ht.print();
// ht.remove("Navdeep");
// ht.print();
// console.log(ht.lookUp("Navdeep"));
// ht.add("Bali", 58);
// ht.update("Bali", 58);
// console.log(ht.lookUp("Bali"));
// ht.print();


// =================================

// function fibonacci(num){
//     if (num <= 1){
//         return 1;
//     } else {
//         return fibonacci(num-1) + fibonacci(num-2);
//     }
// }

// console.log(fibonacci(5));

// ==========================

// function factorial(num, memo){
//     memo = memo || {};
//     if(memo[num]){
//         return memo[num];
//     }
//     else if(num <= 0){
//         return 1;
//     } else {
//         return memo[num] = num * factorial(num - 1, memo);
//     }
// }


// console.log(factorial(170));


// function fibonacci(num, memo){
//      memo = memo || {};

//     if (memo[num]){
//         return memo[num];
//     } else if(num <= 1){
//         return 1;
//     } else {
//         return memo[num] = fibonacci(num-1, memo) + fibonacci(num-2, memo);
//     }
// }

// console.log(fibonacci(245));

// =====================

// function Queue(){
//     collection = [];

//     this.print = function(){
//         console.log(collection);
//     }

//     this.enqueue = (element) => {
//          collection.push(element);
//     }

//     this.dequeue = () => {
//        return collection.shift();
//     }

//     this.front = () => {
//         return collection.[0];
//     }

//     this.size = () => {
//         return collection.length;
//     }

//     this.empty = () => {
//         return (collection.length === 0);
//     }

// }

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.slice(2,3)

// =================================================

// var array = [8,9,37,878,89, 346, 748,3,4,4,2,7,56];

// var sorted = array.sort((a,b) => {return a-b});

// console.log(sorted);

// function binarySearch(arr, value){
//     let high = arr.length-1;
//     let low = 0;
//     let mid = 0;

//     while(low <= high){
//         mid = Math.floor((high + low)/2);
//         if(arr[mid] === value){
//             return mid;
//         } else if (value > arr[mid]){
//             low = mid + 1;
//         } else {
//             high = mid -1;
//         }
//     }
//     return -1;
// }

// console.log(binarySearch(sorted, 89));

// ===============================================

// function findValue(elem, index, arr){
//     return elem === 8
// }

// console.log(array.findIndex(findValue));

// ===========================

// console.log(Math.max(4.5,9));


// function palindrome(str) {
//     var re = /[\W_]/g;
//     var lowRegStr = str.toLowerCase().replace(re, '');
//     console.log("hello",lowRegStr);
//     var reverseStr = lowRegStr.split('').reverse().join(''); 
//     return reverseStr === lowRegStr;
//   }
//   console.log(palindrome("A man, a plan, a canal. Panama"));


//   function Palindrom (string){
//       var re = /[\W_]/g;
//       var lowRegStr = str.toLowerCase().replace(re, '');
//       var reverseStr = lowRegStr.split('').reverse().join('');
//       return reverseStr === lowerStr;
//   }


// console.log(1.5 % 1);

// for (var i = 0; i < 5; i++) {
//     (function(x) {
//         setTimeout(function() { console.log(x); }, x * 1000 );
//     })(i);
// }

// for (var i = 0; i < 5; i++) {
//     (function(x){
//         setTimeout(function() { console.log(i); }, i * 1000 );
//     }(i));
// }

// console.log(typeof typeof null);



// // jessica.chong@optimizely.com ⬅️email me if you have questions!
// // https://medium.com/engineers-optimizely/optimizely-engineer-q-a-derek-hammond-frontend-engineer-san-francisco-a92943e62939 
// array = ['2', '+', "23", "*", "2"]
// array .join(" ");
// console.log(array .join(" "));
// console.log(eval("2 + 23 * 2"));

// var evaluator = function(arr){
//         let elements = arr;
//         for (let i = 0; i< elements.length; i++){
//             if(elements[i] === "*"){
//             let multiplication = parseInt(elements[i-1]) * parseInt(elements[i+1]);
//             elements.splice((i-1),3,multiplication); 
//             } 
    
//             if(elements[i] === "/"){
//                 let division = parseInt(elements[i-1]) / parseInt(elements[i+1]);
//                 elements.splice((i-1),3,division); 
//                 } 
//             if(elements[i] === "+"){
//                 let addition = parseInt(elements[i-1]) + parseInt(elements[i+1]);
//                 elements.splice((i-1),3,addition); 
//                 } 
//             if(elements[i] === "-"){
//                 let substraction = parseInt(elements[i-1]) - parseInt(elements[i+1]);
//                 elements.splice((i-1),3,substraction); 
//                 } 
//             if (elements.length > 0){
//                 for (let i = 0; i< elements.length; i++){
//                     if(elements[i] === "*"){
//                     let multiplication = parseInt(elements[i-1]) * parseInt(elements[i+1]);
//                     elements.splice((i-1),3,multiplication); 
//                     } 
            
//                     if(elements[i] === "/"){
//                         let division = parseInt(elements[i-1]) / parseInt(elements[i+1]);
//                         elements.splice((i-1),3,division); 
//                         } 
//                     if(elements[i] === "+"){
//                         let addition = parseInt(elements[i-1]) + parseInt(elements[i+1]);
//                         elements.splice((i-1),3,addition); 
//                         } 
//                     if(elements[i] === "-"){
//                         let substraction = parseInt(elements[i-1]) - parseInt(elements[i+1]);
//                         elements.splice((i-1),3,substraction); 
//                         } 
//             }
//             }
            
//         }
//      console.log(elements);
// }






// let evaluator = function(arr){
//     let elements = arr;
//     for (let i = 0; i< elements.length; i++){
//         if(elements[i] === "*"){
//         let multiplication = parseInt(elements[i-1]) * parseInt(elements[i+1]);
//         elements.splice((i-1),3,multiplication); 
//         } 
//     }
//     for (let i = 0; i< elements.length; i++){
//         if(elements[i] === "/"){
//             let division = parseInt(elements[i-1]) / parseInt(elements[i+1]);
//             elements.splice((i-1),3,division); 
//             } 
//     }
//     for (let i = 0; i< elements.length; i++){
//         if(elements[i] === "+"){
//             let addition = parseInt(elements[i-1]) + parseInt(elements[i+1]);
//             elements.splice((i-1),3,addition); 
//             } 
//     }
//     for (let i = 0; i< elements.length; i++){
//         if(elements[i] === "-"){
//             let substraction = parseInt(elements[i-1]) - parseInt(elements[i+1]);
//             elements.splice((i-1),3,substraction); 
//             } 
//     }
//     if(elements.length === 1){
//         let value = parseInt(elements[0]);
//         elements = elements.splice(0,1,value) ;
//     }
//  console.log(typeof elements[0]);
// // return elements;
// }



        


// console.time("factorial test");



// let doMath = function(string) {
//   let elements = string.split(" ");
//   for (let i = 0; i< elements.length; i++){
//         if(elements[i] === "*"){
//             let multiplication = parseInt(elements[i-1]) * parseInt(elements[i+1]);
//             elements.splice((i-1),3,multiplication); 
//             i = i-1;
//         } 
//     }
//     for (let i = 0; i< elements.length; i++){
//         if(elements[i] === "/"){
//             let division = parseInt(elements[i-1]) / parseInt(elements[i+1]);
//             elements.splice((i-1),3,division); 
//             i = i-1;
//         } 
//     }
//     for (let i = 0; i< elements.length; i++){
//         if(elements[i] === "-"){
//             let substraction = parseInt(elements[i-1]) - parseInt(elements[i+1]);
//             elements.splice((i-1),3,substraction); 
//             i = i-1;
//         } 
//     }
//     for (let i = 0; i< elements.length; i++){
//         if(elements[i] === "+"){
//             let addition = parseInt(elements[i-1]) + parseInt(elements[i+1]);
//             elements.splice((i-1),3,addition); 
//             i = i-1;
//         } 
//     }

//     console.log(elements);
//     if(elements.length > 1){
//         return "system error";
//     } else{
//         return parseInt(elements[0]);
//     }
  
// }

 

// console.log(doMath("11 +"));
  
// console.timeEnd("factorial test");

// console.time("eval");
// console.log(eval("11 +"))
// console.timeEnd("eval");

// function simpleArraySum(ar) {
//     /*
//      * Write your code here.
//      */
//     let sum = 0;
//     for (let i = 0; i <= 1000; i++){
//         if (ar[i] > 0) {
//             sum += ar[i]; 
//         }
        
//     }
//     return sum;
// }

// console.log(simpleArraySum([1,2,3,4,10,11]));
//  =================================================
// function compareTriplets(a, b) {
//   let index = (a.length + b.length) / 2;
//   let counterOne = 0;
//   let counterTwo = 0;
//   let final = [];

//   for(let i = 0; i < index; i++ ){
//       if (a[i] > b [i]){
//           counterOne++;
//       } else if( a[i] < b[i]){
//           counterTwo++;
//       }
//   }

//   final.push(counterOne,counterTwo);
//   return final;

// }

// console.log(compareTriplets([3,2,3], [3,2,1]));

// ===========================================

// function aVeryBigSum(ar) {
//     let sum = 0;
//     // let numberMax = Math.pow(10,10);
//         for(let i = 0; i < ar.length; i++){
//             if(0 <= ar[i] <= Math.pow(10,10)){
//                 sum += ar[i];
//             }
        
//     }
//     return sum;
// }

// console.log(aVeryBigSum([1000000001,1000000002,1000000003,1000000004,1000000005]));
// console.log(Math.pow(10, 10));

// ==============================

// function diagonalDifference(arr) {
//     let n = arr.length;
// //  console.log(newArr);
//  let leftToRightSum = function(arr){
//     let sum = 0;
//     for (let i = 0; i < n; i++ ){
//         if (-100 <= arr[i][i]<=100){
//             sum += arr[i][i];
//         }
//     }
//     return sum;
//  }

//  let rightToLeftSum = function(arr){
//      let sum = 0;
//      let j = 0;
//      for(i = (n-1); i >=0; i--){
//         if (-100 <= arr[i][j]<=100){
//             sum += arr[i][j]; 
//          j++;
//         }
//      }
//      return sum;
//  }
//   return Math.abs(leftToRightSum(arr) - rightToLeftSum(arr));
// //  return leftToRightSum(newArr);
// }

// console.time("first");

// console.log(diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]));
// console.timeEnd("first");

// function diagonalDifference(arr){
//     let leftSum = 0;
//     let rightSum = 0;
//     let n = arr.length;
//     for (let i = 0; i < n; i++){
//         leftSum += arr[i][i];
//         rightSum += arr[i][n-[i+1]];
//     }

//     return Math.abs(leftSum - rightSum);
// }

// console.time("second");

// console.log(diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]));

// console.timeEnd("second");

// let x = 1/5;

// console.log((1/6).toFixed(6));

//  ==================================

// console.time('first');

// function plusMinus(arr) {
//  let positive = 0;
//  let negative = 0;
//  let zero = 0;


//  for (let i = 0; i < arr.length; i++){
//      if(arr[i] === 0){
//          zero++;
//      } else if(arr[i] < 0){
//          negative++;
//      } else {
//          positive++;
//      }
    
//  }
 
//  console.log((positive/arr.length).toFixed(6));
//  console.log((negative/arr.length).toFixed(6));
//  console.log((zero/arr.length).toFixed(6));

// }

// console.log(plusMinus([-4,3,-9,0,4,1]));
// console.timeEnd('first');

// ================================

// function staircase(n){
//     let staircase = '';
//     for (let i = n; i > 0; i--){
//         staircase += " ".repeat(i-1).concat("#".repeat(n-(i-1))) + "\n";
//     }
//     console.log(staircase);
// }



// let hello = "Hello World! ";
// console.log(hello.repeat(3));

// console.time("staircase");
// staircase(6);
// console.timeEnd('staircase');

// =====================================


// function miniMaxSum(arr) {
//     arr.sort();
//  let min = 0;
//  let max = 0;
//  for (let i = 0; i < (arr.length - 1); i++){
//      min += arr[i];
//  }
//  for (let i = 1; i < arr.length; i++){
//     max += arr[i];
// }
// console.log(min + " " + max);
// }

// miniMaxSum([2,1,3,4,5]);

// console.log([2,1,3,4,5].sort());


// function birthdayCakeCandles(ar) {
//  ar.sort(function(a, b){return a - b});
//  console.log(ar);
//  let number = 1;
//  for(let i = ar.length; i > 0; i--){
//      if (1 <= ar[i] <= 10^7 && ar[ar.length - 1] === ar[i - 2]){
//          number++;

//          console.log(number);
//      }
//  }
// return number; 
// }
// console.time("staircase");
// console.log(birthdayCakeCandles([3,2,1,3,99,99,99,10000000]));
// console.timeEnd('staircase');


// ======================================

// function staircase(n){
//     let staircase = '';
//     for(let i = n; i > 0; i--){
//         staircase += ' '.repeat(i - 1).concat('#'.repeat(n-(i-1))) + '\n';
//     }
//     console.log(staircase);
// }

// staircase(10);

function timeConversion(s) {
    let output = '';
    let arr = s.split('');
    if(arr[8]=== "A"){
        if(arr[0] === "1" && arr[1] === "2"){
            arr[0] = arr[1] = '0';
            output += arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7]; 
        } else {
            output += arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7];
        }
       
    } else if(arr[8] === 'P'){
        if(arr[0] === "1" && arr[1] === "2"){
            output += arr[0]+arr[1]+arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7];
        }else {
            let hours = (parseInt(arr[0]+arr[1]) + 12);
            output = hours + arr[2]+arr[3]+arr[4]+arr[5]+arr[6]+arr[7];
        }
        
    }
    
return output;

}
console.time("time");
console.log(timeConversion("12:23:34AM"));
console.timeEnd('time');