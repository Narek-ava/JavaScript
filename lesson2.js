/*
    <h1>Գործնական առաջադրանքներ.<br><br>
<br>1. Տպել 100-300 միջակայքի չորսին բազմապատիկ թվերը նվազման կարգով։<br>
<br>2. Հաշվել քսանի ֆակտորիալը և տպել այն։ (Թվի ֆակտորիալը մեկից մինչև իր արտադրյալն է։ Օրինակ՝ 4! = 1 * 2 * 3 * 4)<br>
<br>3. Գեներացնել տասը պատահական թվեր 100-800 միջակայքից և տպել նրանցից փոքրագույնի արժեքը։<br>
<br>4. Գեներացնել  պատահական թիվ 1000-9999 միջակայքից և տպել նրա ամենամեծ թվանշանը։</h1>
*/

// Exercise 1
// for (let i = 300; i >= 100; i--) {
//     if (i % 4 === 0) {
//         console.log(i);
//     }
// }
// // Exercise 2
// const num = 10;
// let fact = 1;
// for (let j = 1; j <= num; j++) {
//     fact *= j;
// }
// console.log(fact);
// // Eexercise 3
// let maxValue = Number.MAX_VALUE;
// for (let i = 0; i < 10; i++) {
//     const rn = Math.floor(Math.random() * 701 + 100);
//     console.log(rn);
//     if (maxValue > rn) {
//         maxValue = val;
//     }
// }
// console.log(maxValue);
// // Exercise 4
// const num = Math.floor(Math.random() * 9000 + 1000);
// let maxDigit = 0;
// for (let i = num; i !== 0;) {
//     let digit = i % 10;
//     if (digit > maxDigit) {
//         maxDigit = digit;
//     }
//     i = (i - digit) / 10;
// }
// console.log(`Max digit of ${num} is ${maxDigit}`);
