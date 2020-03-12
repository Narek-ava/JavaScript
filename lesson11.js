/*1. Հայտարարել զանգված բաղկացած հետևյալ տեսքի 10 օբյեկտներից՝ {id: 1, name: 'Karen', salary: 100000}։
 Սորտավորել զանգվածը ըստ name-ի նվազման կարգով։
2. Հայտարարել զանգված բաղկացած հետևյալ տեսքի 10 օբյեկտներից՝ {id: 1, name: 'Karen', salary: 100000}։
Սորտավորել զանգվածը ըստ salary-ի աճման կարգով և վերադարձնել նոր զանգված, որի էլեմենտները այդ սորտավորված զանգվածի id-ներն են։
3. Հայտարարել զանգված, որի էլեմենտները կամայական string-եր են։ Վերադարձնել զանգվածի բոլորը էլեմենտների երկարությունների գումարը։
4. Հայատարարել զանգված, որի էլեմենտները կամայական թվեր են։ Վերադարձնել զույգ թվերի արտադրյալը։
5. Հայտարարել զանգված բաղկացած հետևյալ տեսքի 10 օբյեկտներից՝ {id: 1, name: 'Karen', salary: 100000}։
 Վերադարձնել նոր օբյեկտ, որը ունի հետևյա տեսքը՝ {name: 'total', salary: 200000}, որտեղ  salary-ն բոլոր էլեմենտների salary-ների գումարն է։
*/
window.onload = main;

//1. Հայտարարել զանգված բաղկացած հետևյալ տեսքի 10 օբյեկտներից՝ {id: 1, name: 'Karen', salary: 100000}։ Սորտավորել զանգվածը ըստ name-ի նվազման կարգով։

function main() {
    //ex1();
    //ex2();
    //ex3();
    //ex4();
    //ex5();
}
const arr = [];
const name = ['Narek', 'Karen', 'Gexam', 'Lusine', 'Aram', 'Armen', 'Artur', 'Armine', 'Tatev', 'Mariam'];
for (let i = 0; i < 10; i++) {
    arr.push({
        id: i + 1,
        name: name[i],
        salary: Math.floor(Math.random() * 300000 + 100000)
    })
}
//console.log(arr);

/////////////////////////////////////
function ex1(arr) {
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
function ex2(arr) {
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
    for (let el of sortedArr) {
        arrName.push(el.id);
    }
    return arrName;
}

// console.log(getArr(arr))

//3. Հայտարարել զանգված, որի էլեմենտները կամայական string-եր են։ Վերադարձնել զանգվածի բոլորը էլեմենտների երկարությունների գումարը։
const arrString = ['sodaifnpiasinf', 'sdfllmasdf', 'sdfsadfsdfa'];

function ex3(arr) {
    return arr.reduce((acc, el) => {
        return acc + el.length;
    }, 0);

}

// console.log(strLength(arrString));

//4. Հայատարարել զանգված, որի էլեմենտները կամայական թվեր են։ Վերադարձնել զույգ թվերի արտադրյալը։
const numArr = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9];

function ex4(arr) {
    return arr.reduce((acc, val) => {
        val % 2 === 0 ? acc *= val : false;
        return acc;
    }, 1)
}

//console.log(getSum(numArr));
//5. Հայտարարել զանգված բաղկացած հետևյալ տեսքի 10 օբյեկտներից՝ {id: 1, name: 'Karen', salary: 100000}։
//Վերադարձնել նոր օբյեկտ, որը ունի հետևյա տեսքը՝ {name: 'total', salary: 200000}, որտեղ  salary-ն բոլոր էլեմենտների salary-ների գումարն է։

function ex5(arr) {
    const obj = {
        name: 'total',
        salary: arr.reduce((acc, val) => {
            return acc + val.salary;
        }, 0)
    };
    return obj;

}

//console.log(getObj(arr));