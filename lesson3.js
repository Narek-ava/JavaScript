/*
    <h1>Գործնական առաջադրանքները կատարել յուրաքանչյուրը for, while, do...while օպերատորներով.<br><br>
<br>1. Հայտարարել կամայական Հնգանիշ թիվ և Հաշվել նրա թվանշանների արտադրյալը։<br>
<br>2. Հայտարարել յոթանիշ թիվ և հաշվել նրա կենտ թվանշանների գումարը։<br>
<br>3. Հաշվել 1000-9999 միջակայքի թվերի միջին թվաբանականը։<br>
<br>4. Տպել 10000-99999 միջակայքից այն թվերը, որոնց թվանշանների գումարը բաժանվում է չորսի։</h1>
*/


// 1. Հայտարարել կամայական Հնգանիշ թիվ և Հաշվել նրա թվանշանների արտադրյալը
//for
// let num = 5555;
// let mult = 0;
// for (; num !== 0; ) {
//     const digit = num % 10;
//     mult += digit;
//     num = Math.floor(num / 10);
// }
// console.log(mult);
// //while
// let num = Math.floor(Math.random() * 90000 + 10000);
// let mult = 1;
// while (num) {
//     const digit = num % 10;
//     mult *= digit;
//     num = Math.floor(num / 10);
// }
// console.log(mult);
// //do while
// let num = Math.floor(Math.random() * 90000 + 10000);
// let mult = 1;
// do {
//     const digit = num % 10;
//     mult *= digit;
//     num = Math.floor(num / 10);
// } while (num);
// console.log(mult);


//     2. Հայտարարել յոթանիշ թիվ և հաշվել նրա կենտ թվանշանների գումարը։
// for
// let num = Math.floor(Math.random() * 9000000 + 1000000);
// let sum = 0;
// for (; num !== 0; ) {
//     const digit = num % 10;
//     if (digit % 2 !== 0) {
//         sum += digit;
//     }
//     num = Math.floor(num / 10);
// }
// console.log(sum);
// // while
// let num = Math.floor(Math.random() * 9000000 + 1000000);
// let sum = 0;
// while (num !== 0) {
//     const digit = num % 10;
//     if (digit % 2 !== 0) {
//         sum += digit;
//     }
//     num = Math.floor(num / 10);
// }
// console.log(sum);
// // do while
// let num = Math.floor(Math.random() * 9000000 + 1000000);
// let sum = 0;
// do {
//     const digit = num % 10;
//     if (digit % 2 !== 0) {
//         sum += digit;
//     }
//     num = Math.floor(num / 10);
// } while (num !== 0);
// console.log(sum);



// 3. Հաշվել 1000-9999 միջակայքի թվերի միջին թվաբանականը։
// for
// const MIN = 1000;
// const MAX = 9999;
// let sum = 0;
// for (let i = MIN; i <= MAX; i++) {
//     sum += i;
// }
// console.log(sum / (MAX - MIN + 1));
// // while
// const MIN = 1000;
// const MAX = 9999;
// let sum = 0;
// let i = MIN;
// while (i <= MAX) {
//     sum += i++;
// }
// console.log(sum / (MAX - MIN + 1));
// // do while
// const MIN = 1000;
// const MAX = 9999;
// let sum = 0;
// let i = MIN;
// do {
//     sum += i++;
// } while (i <= MAX);
// console.log(sum / (MAX - MIN + 1));

// 4. Տպել 10000-99999 միջակայքից այն թվերը, որոնց թվանշանների գումարը բաժանվում է չորսի։
// const MIN = 10000;
// const MAX = 99999;
// for (let i = MIN; i <= MAX; i++) {
//     let num = i;
//     let sum = 0;
//     while (num !== 0) {
//         const digit = num % 10;
//         num = (num - digit) / 10;
//         sum += digit;
//     }
//     if (sum % 4 === 0) {
//         console.log(i);
//     }
// }

