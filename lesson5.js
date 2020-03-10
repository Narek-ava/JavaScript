/*
    <h1>Հայտարարել 10x10 չափանի երկչափ զանգված և լցնել պատահական թվերով [0,  9] միջակայքից։<br>
<br>1. Շրջել մատրիցը։<br>
<br>2. Տպել մատրիցի էլեմենտների միջին թվաբանականը։<br>
<br>3. Մատրիցից հեռացնել այն տողերը, որոնց էլեմենտների գումարը կենտ է։<br>
<br>4. Մատրիցայի գլխավոր անկյունագծից ներքև գտնվող էլեմենտները հայլիաձև արտապատկերել անկյունագծից վերև։<br>
<br>5. Մատրիցայի յուրաքանչյուր տող սորտավորել նվազման կարգով։</h1>

 */

// Հայտարարել 10x10 չափանի երկչափ զանգված և լցնել պատահական թվերով [0,  9] միջակայքից։
// const M = 10;
// const matrix = [];
// for (let i = 0; i < M; i++) {
//     matrix[i] = [];
//     for (let j = 0; j < M; j++) {
//         matrix[i][j] = Math.floor(Math.random() * 10);
//     }
// }

// 1. Շրջել մատրիցը։
// for (let i = 0; i < M / 2; i++) {
//     const temp = matrix[i];
//     matrix[i] = matrix[matrix.length - 1 - i];
//     matrix[matrix.length - i - 1] = temp;
// }

//2. Տպել մատրիցի էլեմենտների միջին թվաբանականը։
//    let sum = 0;
// for (let i = 0; i < M; i++) {
//     for (let j = 0; j < M; j++) {
//         sum += matrix[i][j];
//     }
// }
// console.log(sum / (M * M));

//3. Մատրիցից հեռացնել այն տողերը, որոնց էլեմենտների գումարը կենտ է։
// for (let i = 0; i < matrix.length; i++) {
//     let sum = 0;
//     for (let j = 0; j < M; j++) {
//         sum += matrix[i][j];
//     }
//     if (sum % 2 !== 0) {
//         for (let k = i; k < matrix.length - 1; k++) {
//             matrix[k] = matrix[k + 1];
//         }
//         matrix.length--;
//         i--;
//     }
// }

// 4. Մատրիցայի գլխավոր անկյունագծից ներքև գտնվող էլեմենտները հայլիաձև արտապատկերել անկյունագծից վերև։

// for (let i = 0; i < M; i++) {
//     for (let j = i + 1; j < M; j++) {
//         matrix[i][j] = matrix[j][i];
//     }
// }
// for (let i = 0; i < M; i++) {
//     for (let j = 0; j < i; j++) {
//         matrix[i][j] = matrix[j][i];
//     }
// }

// 5. Մատրիցայի յուրաքանչյուր տող սորտավորել նվազման կարգով։
// for (let k = 0; k < M; k++) {
//     const row = matrix[k];
//     for (let i = 0; i < row.length - 1; i++) {
//         for (let j = i + 1; j < row.length; j++) {
//             if (row[i] < row[j]) {
//                 const temp = row[i];
//                 row[i] = row[j];
//                 row[j] = temp;
//             }
//         }
//     }
// }




