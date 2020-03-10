/*
    <br>Հայատարարել թվերի զանգված բաղկացած 100 կամայական թվերից։<br><br>
<br>1. Հաշվել էլեմենտների միջին թվաբանականը։<br>
<br>2. Հաշվել էլեմենտների ֆակտորիալների գումարը։<br>
<br>3. Վերադարձնել նոր զանգված, որում հերթական էլեմենտը այդ զանգվածի համապատասխան էլեմենտի խորհանարդն է։<br>
<br>4. Վերադարձնել նոր զանգված, որի յուրաքանչյուր էլեմենտը հերթական էլեմենտի քանակով պատահական թվերով լցված զանգված է։<br>
<br>5. Վերադարձնել նոր զանգված, որում առկա են միայն դրական զույգ թվերը։<br>
<br>6. Վերադարձնել նոր զանգված, որի մեջ այն էլեմենտներն են, որոնց թվանշանների արտադրյալը կենտ է։<br>
<br>7. Վերդարձնել նոր զանգված, որի մեջ զույգ էլեմենտների երկրորդ մասն է։<br>

 */

//Հայատարարել թվերի զանգված բաղկացած 100 կամայական թվերից։
// var arr = [];
// for(let i = 0; i < 5;i++){
//  arr.push( Math.floor(Math.random() * 51 + 10));
//arr.push(- 5);
//}
// 1. Հաշվել էլեմենտների միջին թվաբանականը։
//  function getSum(arr){
//    var sum = 0;
//    for(let i of arr){

//   sum += i;

//    }


//  return sum / arr.length;
// }
//2. Հաշվել էլեմենտների ֆակտորիալների գումարը։
// function fact(n){
//  return (n === 0)? 1: n * fact(n - 1);

//  }

//  function arrFact(arr){

//     var sum = 0;
//     for(let i in arr){

//     sum += fact(arr[i]);
//  }
//    return sum;
//  }
//3. Վերադարձնել նոր զանգված, որում հերթական էլեմենտը այդ զանգվածի համապատասխան էլեմենտի խորհանարդն է։
// function cubeOfNum(arr){
//  var sum = 0;
//  var newarr = [];
//  for (let el of arr){
//      newarr.push(Math.pow(el,3))

//     }
//     return newarr;
//  }

//4. Վերադարձնել նոր զանգված, որի յուրաքանչյուր էլեմենտը հերթական էլեմենտի քանակով պատահական թվերով լցված զանգված է։
// function newArr(arr){
//   var sum = 0;
//   var newarr = [];
//   for(let i in arr){
//       newarr.push([])
//      for(let j = 0; j < arr[i];j++){
//         newarr[i][j] = Math.floor(Math.random() * 51 + 10);
//        }
//      }
//      return newarr;
//   }
// 5. Վերադարձնել նոր զանգված, որում առկա են միայն դրական զույգ թվերը։
// function numPlus(arr){
//   var newarr = [];
//   for(let el of arr){
//     if (el > 0) {
//        newarr.push(el)
//        }
//      }
//      return newarr;
//   }
//6. Վերադարձնել նոր զանգված, որի մեջ այն էլեմենտներն են, որոնց թվանշանների արտադրյալը կենտ է։
// function digit(arr){

//     var newarr = [];
//     for(let el of arr){
//       var sum = 1;
//       for(let i = el; i % 10 > 0;){
//         let digit = i % 10;
//          sum *= digit;
//          i = (i - digit) / 10;
//        }
//         if(sum % 2 !== 0){
//           newarr.push(sum);
//          }
//       }

//        return newarr;
//     }

//7. Վերդարձնել նոր զանգված, որի մեջ զույգ էլեմենտների երկրորդ մասն է։
// function x(arr){
//     let newarr = [];
//     for(let i of arr){
//       if (i % 2 === 0) {
//         newarr.push(i / 2)
//       }
//     }
//     return newarr;

// }
//recursia deepEqual
/*
function isDeepEqual(o1, o2) {
    if (isPrimitiveType(o1) || isPrimitiveType(o2)) {
        return o1 === o2;
    }
    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (!o2.hasOwnProperty(key)) {
            return false;
        }
        if (!isDeepEqual(o1[key], o2[key])) {
            return false;
        }
    }
    return true;
}
*/
