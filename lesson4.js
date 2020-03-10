/*
   <h1>Հայտարարել զանգված և լցնել 30 պատահական թվերով [50,  300] միջակայքից։<br><br>
<br>1. Տպել զանգվածի զույգ ինդեքս ունեցող էլեմենտների գումարը։<br>
<br>2. Զանգվածի յուրաքանչյուր էլեմենտը փոխարինել իր թվանշանների գումարով։<br>
<br>3. Վերադարձնել նոր զանգված, որի էլեմենտները վերը նշված զանգվածի պարզ թվերն են։<br>
<br>4. Զանգվածից հեռացնել կենտ թվանշանները։
<br>5. Սորտավորել զանգվածը աճման կարգով։</h1>

 */


//     Հայտարարել զանգված և լցնել 30 պատահական թվերով [50,  300] միջակայքից։

// 1. Տպել զանգվածի զույգ ինդեքս ունեցող էլեմենտների գումարը։
// for (let i = 0; i < 30; i++) {
//     arr[i] =  Math.floor(Math.random() * 251 + 50);
// }
// // Exercise 1
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         sum += arr[i];
//     }
// }
// console.log(sum);

// console.log('the sum is'+''+ sum);
//2. Զանգվածի յուրաքանչյուր էլեմենտը փոխարինել իր թվանշանների գումարով։

// for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     while (arr[i] !== 0) {
//         const digit = arr[i] % 10;
//         sum += digit;
//         arr[i] = Math.floor(arr[i] / 10);
//     }
//     arr[i] = sum;
// }




// 3. Վերադարձնել նոր զանգված, որի էլեմենտները վերը նշված զանգվածի պարզ թվերն են։
// const primeNumbers = [];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     let isPrime = true;

//     for (let j = 2; j <= Math.sqrt(arr[i]); j++) {
//         if (arr[i] % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         primeNumbers[count] = arr[i];
//         count++;
//     }
// }




// 4. Զանգվածից հեռացնել կենտ թվանշանները։
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         for (let j = i; j < arr.length - 1; j++) {
//             arr[j] = arr[j + 1];
//         }
//         arr.length--;
//         i--;
//     }
// }

// 5. Սորտավորել զանգվածը աճման կարգով։
// for (let i = 0; i < .length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] > arr[j]) {
//             const temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }

// arr.sort((a, b) => a - b);

// console.log( arr );



