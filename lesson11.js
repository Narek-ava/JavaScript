/*1. Հայտարարել զանգված բաղկացած հետևյալ տեսքի 10 օբյեկտներից՝ {id: 1, name: 'Karen', salary: 100000}։
 Սորտավորել զանգվածը ըստ name-ի նվազման կարգով։
2. Հայտարարել զանգված բաղկացած հետևյալ տեսքի 10 օբյեկտներից՝ {id: 1, name: 'Karen', salary: 100000}։
Սորտավորել զանգվածը ըստ salary-ի աճման կարգով և վերադարձնել նոր զանգված, որի էլեմենտները այդ սորտավորված զանգվածի id-ներն են։
3. Հայտարարել զանգված, որի էլեմենտները կամայական string-եր են։ Վերադարձնել զանգվածի բոլորը էլեմենտների երկարությունների գումարը։
4. Հայատարարել զանգված, որի էլեմենտները կամայական թվեր են։ Վերադարձնել զույգ թվերի արտադրյալը։
5. Հայտարարել զանգված բաղկացած հետևյալ տեսքի 10 օբյեկտներից՝ {id: 1, name: 'Karen', salary: 100000}։
 Վերադարձնել նոր օբյեկտ, որը ունի հետևյա տեսքը՝ {name: 'total', salary: 200000}, որտեղ  salary-ն բոլոր էլեմենտների salary-ների գումարն է։
*/


//1. Հայտարարել զանգված բաղկացած հետևյալ տեսքի 10 օբյեկտներից՝ {id: 1, name: 'Karen', salary: 100000}։ Սորտավորել զանգվածը ըստ name-ի նվազման կարգով։


const arr = [];
const name = ['Narek','Karen','Gexam','Lusine','Aram','Armen','Artur','Armine','Tatev','Mariam'];
for (let i = 0; i < 10; i++){
    arr.push({
          id: i + 1,
          name: name[i],
          salary: Math.floor(Math.random() * 300000 + 100000 )
        })
}
console.log(arr);

/////////////////////////////////////
function sortName(arr){
    return arr.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    })
}
// console.log(sortName(arr))
//2. Հայտարարել զանգված բաղկացած հետևյալ տեսքի 10 օբյեկտներից՝ {id: 1, name: 'Karen', salary: 100000}։
//Սորտավորել զանգվածը ըստ salary-ի աճման կարգով և վերադարձնել նոր զանգված, որի էլեմենտները այդ սորտավորված զանգվածի id-ներն են։
function getArr (arr){
    let sortedArr = arr.sort((a, b) => {
        if (a.salary > b.salary) {
            return 1;
        }
        if (a.salary < b.salary) {
            return -1;
        }
        return 0;
    })
     const arrName = [];
    for (let el of sortedArr){
        arrName.push(el.id);
    }
    return arrName;
}
// console.log(getArr(arr))

//3. Հայտարարել զանգված, որի էլեմենտները կամայական string-եր են։ Վերադարձնել զանգվածի բոլորը էլեմենտների երկարությունների գումարը։
const arrString = ['sodaifnpiasinf','sdfllmasdf','sdfsadfsdfa'];
function strLength(arr) {
    return arr.reduce((acc,el) => {
        return acc + el.length;
    },0);

}
// console.log(strLength(arrString));