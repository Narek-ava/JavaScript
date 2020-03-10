/*

<br>Ստեղծել զանգված բաղկացած 30 էլեմենտներից, որոնցից յուրաքանչյուրը ունի հետևյալ տեսքը՝ {id: 1, name: 'Name1', salary: 100.000}, որտեղ id-ն հերթական էլեմենտի ինդեքսն է, name-ը 'Name' + էլեմենտի ինդեքս, իսկ salary-ն պատհական թիվ 100.000-350.000 միջակայքից։
<br>
<br>1. Հաշվել զանգվածի բոլոր էլեմենտների salary-ների գումարը։
<br>

<br>2. Զանգվածը սորտավորել աճման կարգով ըստ salary-ի։
<br>

<br>3. Զանգվածից հեռացնել այն էլեմենտները, որոնց salary-ն քիչ է 200.000-ից։
<br>

<br>4. Զանգվածի յուրաքանչյուր էլեմենտից հեռացնել id property-ն։
<br>

 */

// const persons = [];
// for (let i = 0; i < 10; i++) {
//     persons.push({
//         id: i + 1,
//         name: `Name-${i + 1}`,
//         salary: Math.floor(Math.random() * 200001 + 100000)
//     });
// }
// console.log(persons);

// 1. Հաշվել զանգվածի բոլոր էլեմենտների salary-ների գումարը։
// var sum = 0

// for(let i = 0; i<10;i++){
// 	sum += persons[i].salary;
// }
// console.log(sum);
// 2. Զանգվածը սորտավորել աճման կարգով ըստ salary-ի։
// for (let i = 0; i < persons.length - 1; i++) {
// 	persons[i].salary;
//     for (let j = i + 1; j < persons.length; j++) {
//     	persons[j].salary;
//         if (persons[i].salary > persons[j].salary) {
//             const temp = persons[i];
//             persons[i] = persons[j];
//             persons[j] = temp;
//         }
//     }
// }
// 3. Զանգվածից հեռացնել այն էլեմենտները, որոնց salary-ն քիչ է 200.000-ից։


// for(let i = 0; i<10;i++){
// var x = persons[i].salary;
//    if (  x < 200000) {
//   delete persons[i];
//    }
// }

// 4. Զանգվածի յուրաքանչյուր էլեմենտից հեռացնել id property-ն։
// for(let i = 0; i<10;i++){
// 	// delate
// 	delete persons[i].id;

// }

// function getAverageof(){
//     var sum = 0;
// 	for (let i = 0; i < arguments.length; i++){
//         sum += arguments[i];

// 	}
// 	return sum / arguments.length;

// }
