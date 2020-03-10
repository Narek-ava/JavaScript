/*
   <h1>1. Գրել ֆունկցիա, որը որպես արգումենտ ստանում է թվերի մատրիցա, և վերադարձնում է նրա էլեմենտների գումարը։<br>
<br>2. Գրել ֆունկցիա, որը որպես արգումենտ կստանա թվերի զանգված և յուրաքանչյուր էլեմենտը կփոխարինի իր հակադիրով։<br>
<br>3. Գրել ֆունկցիա, որը որպես արգումենտ կստանա թվերի զանգված և յուրաքանչյուր էլեմենտը կփոխարինի իր ֆակտորիալով։<br>
<br>4. Գրել ֆունկցիա, որը որպես արգումենտ կստանա թվերի զանգված և կվերադարձնի նոր զանգված այն էլեմենտներով, որոնք բաժանվում են իրենց թվանշանների գումարին։<br>
<br>5. Գրել ֆունկցիա, որը որպես արգումենտ ստանում է թիվ և վերադարձնում է զանգված բաղկացած այդ թվի բոլոր բաժանարարներից։<br>
<br>6. Գրել Ֆունկցիա, որը որպես արգումենտ ստանում է թիվ և վերադարձնում է զանգված, որը պարունակում է այդ քանակով ֆիբոնաչիի թվեր։<br>
<br>7. deepClone(obj)<br>
<br>8. isDeepEqual(obj1, obj2)<br>

 */

// Exercise 1
// function getSumOf(matrix) {
//     let sum = 0;
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             sum += matrix[i][j];
//         }
//     }
//     return sum;
// }
// // Exercise 2
// function inverseElOf(arr) {
//     if (!(arr instanceof Array)) {
//         console.error('Argument is not Array');
//         return;
//     }
//     for (let i in arr) {
//         if (typeof arr[i] !== 'number') {
//             console.error('Element of Array is not number');
//             return;
//         }
//         arr[i] = 0 - arr[i];
//     }
//     return arr;
// }
// // Exercise 3
// function getFactArrOf(arr) {
//     for (let i in arr) {
//         arr[i] = getFactOf(arr[i]);
//     }
// }
// function getFactOf(num) {
//     let fact = 1;
//     while (num) {
//         fact *= num--;
//     }
//     return fact;
// }
// // Exercise 4
// function getNewArray(arr) {
//     const result = [];
//     for (let num of arr) {
//         if (isDevideToDigits(num)) {
//             result.push(num);
//         }
//     }
//     return result;
// }
// function isDevideToDigits(num) {
//     let sum = 0;
//     let tempNum = num;
//     while (tempNum) {
//         sum += tempNum % 10;
//         tempNum = Math.floor(tempNum / 10);
//     }
//     return num % sum === 0;
// }
// // Exercise 5
// function getDivisionsOf(num) {
//     const divisions = [];
//     for (let i = 1; i <= num / 2; i++) {
//         if (num % i === 0) {
//             divisions.push(i);
//         }
//     }
//     divisions.push(num);
//     return divisions;
// }
// function getFibonacci(n) {
//     // error case
//     if (typeof n !== 'number' || n < 0) {
//         return console.error('Wrong argument!');
//     }
//     // end point
//     switch (n) {
//         case 0:
//             return [];
//         case 1:
//             return [0];
//         case 2:
//             return [0, 1];
//     }
//     // recursion
//     const fibs = getFibonacci(n - 1);
//     const length = fibs.length;
//     fibs.push(fibs[--length] + fibs[--length]);
//     return fibs;
// }
// ////////////////////////////////////////////////
// function deepClone(obj) {
//     if (isObject(obj)) {
//         return obj;
//     }
//     const clone = Array.isArray(obj) ? [] : {};
//     const keys = Object.keys(obj);

//     for (let key of keys) {
//         const value = obj[key];
//         clone[key] = isObject(value) ? value : deepClone(value);
//     }
//     return clone;
// }
// function isObject(value) {
//     return typeof value !== 'object' || value === null;
// }


