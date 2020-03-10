
/*Հայատարարել թվերի զանգված բաղկացած 100 կամայական թվերից։<br>
<br>1. Հաշվել էլեմենտների միջին թվաբանականը։<br>
<br>2. Հաշվել էլեմենտների ֆակտորիալների գումարը։<br>
<br>3. Վերադարձնել նոր զանգված, որում հերթական էլեմենտը այդ զանգվածի համապատասխան էլեմենտի խորհանարդն է։<br>
<br>4. Վերադարձնել նոր զանգված, որի յուրաքանչյուր էլեմենտը հերթական էլեմենտի քանակով պատահական թվերով լցված զանգված է։<br>
<br>5. Վերադարձնել նոր զանգված, որում առկա են միայն դրական զույգ թվերը։<br>
<br>6. Վերադարձնել նոր զանգված, որի մեջ այն էլեմենտներն են, որոնց թվանշանների արտադրյալը կենտ է։<br>
<br>7. Վերդարձնել նոր զանգված, որի մեջ զույգ էլեմենտների երկրորդ մասն է։
*/

//Հայատարարել թվերի զանգված բաղկացած 100 կամայական թվերից։
// var arr = [];
// for(let i = 0; i < 100;i++){
// arr.push(Math.floor(Math.random() * 51 + 10));
//arr.push(- 5);
//}
//1. Հաշվել էլեմենտների միջին թվաբանականը։
/* function getSum(arr) {
       var sum = 0;
       arr.forEach(value =>{
           sum += value;
       })
       return sum;
 }*/
/*function getFact(n) {
      return (n === 0) ? 1 : n * getFact(n - 1);
}
function getSumOfFact(arr) {
      var sum = 0;
      arr.forEach(value => {
          sum += getFact(value)
      })
      return sum;
}*/
// 3. Վերադարձնել նոր զանգված, որում հերթական էլեմենտը այդ զանգվածի համապատասխան էլեմենտի խորհանարդն է։
/* function getCubes (arr) {

       var newArr = arr.map(value => {
              return Math.pow(value,3)
       })
        return newArr;
}*/
//4. Վերադարձնել նոր զանգված, որի յուրաքանչյուր էլեմենտը հերթական էլեմենտի քանակով պատահական թվերով լցված զանգված է։
/* function getArr(arr){

  var res = arr.map(value =>{
     var arr2 = [];

     for (let i = 0; i < value; i++){
         arr2.push(Math.floor(Math.random() * 51 + 10))
        }
        return arr2;
    })
    return res;
 }*/
//5. Վերադարձնել նոր զանգված, որում առկա են միայն դրական զույգ թվերը։
/*function getPlus(arr){
   return arr.filter(value => {
        if (value > 0 ){
            return value;
        }
   })
}*/
//6. Վերադարձնել նոր զանգված, որի մեջ այն էլեմենտներն են, որոնց թվանշանների արտադրյալը կենտ է։
/*function getAverage(arr) {
    return arr.filter(value => {
        var sum = 1;
        while (value){
          sum *= value % 10;
          value = Math.floor(value / 10);
        }
         return sum % 2 === 0 ? false : true;

    })
}*/
//7. Վերդարձնել նոր զանգված, որի մեջ զույգ էլեմենտների երկրորդ մասն է։
/*function getSecondPart(arr){
    return arr.map(value => {
        return value % 2 === 0 ? value / 2 : value;

    })
}*/
