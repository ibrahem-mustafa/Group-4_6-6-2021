// includes (string & array)

// const comment = 'hello '

// if (comment.includes('orange')) {
//     console.log('Invalid Comment')
// } else {
//     console.log('Valid Comment')
// }

const words = ['hello', 'orange'];

// const result = words.includes('orange')
// if (result) {
//     console.log('Invalid Comment')
// } else {
//     console.log('Valid Comment')
// }

// *********** EXAMPLE
// get element from dom (Document Object Model || document.*)
// get element Classes
// check if that element have a spec class
// *********** END EXAMPLE

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //

// trim

const str1 = '';
const str2 = ' ';

// console.log(str1 === str2)

const str3 = 'hello';
const str4 = ' hello ';

// console.log(str3)
// console.log(str4)

// console.log('===========')
// console.log(str3.trim())
// console.log(str4.trim())

// console.log(str3.trim() == str4.trim())

// *********** EXAMPLE
// const email = ' email@gmail.com '

// if (email.trim()) {
//     console.log('Email Is Found')
// } else {
//     console.log('Email Not Found')
// }
// *********** END EXAMPLE

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //

// substr

// *********** EXAMPLE
// const paragraph = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

// const p = document.querySelector("#main");
// p.textContent = paragraph.substr(0, 60);
// p.textContent = paragraph.substr(0, 60) + '...';
// *********** END EXAMPLE

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //

// repeat
// username: ahmed ali
// password: *********** (show)

// console.log('*'.repeat(10))

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //

// replace
const invalidWord = 'orange';
const comment = 'hello orange';

// console.log(comment.replace('orange', '*'.repeat(invalidWord.length)))

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //

// every

// *********** EXAMPLE
const usersAges = [21, 20, 30, 29, 19];

const allAbove18 = usersAges.every((age) => age > 18);
// const allAbove18 = usersAges.every(function (age) {
//     return age > 18
// })
// console.log(allAbove18)
// *********** END EXAMPLE

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //

// some

const usersNames = ['ahmed', 'ali', 'mario'];
const atLeastOne = usersNames.some((name) => name === 'ahmed');
// console.log(atLeastOne)

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //
// reduce

const fees = [100, 200, 400, 500, 1000, 300];

// let total = 0;

// for (let i=0; i < fees.length; i++) {
//     total += fees[i]
// }

// acc      current     total
// 100      200         300
// 300      400         700
// 700      500         1200
// 1200     1000        2200
// 2200     300         2500

// acc      current     total
// 1000     100         1100
// 1100     200         1300
// 1300     400         1700
// 1700     500         2200
// 2200     1000        3200
// 3200     300         3500

const total = fees.reduce((acc, current) => acc + current, 1000);

// console.log(total)

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //
// map

let salaries = [1000, 2000, 3000, 4000];

// let newSalaries = [];

// for (let i = 0; i < salaries.length; i++) {
//     newSalaries.push(salaries[i] * 2)
// }

// console.log(newSalaries)

// for (let i = 0; i < salaries.length; i++) {
// 	salaries[i] = salaries[i] * 2
// }

// console.log(salaries)


salaries = salaries.map( (salary) => salary * 2 )
console.log(salaries)


// |-----|
// |     | =>  ()
// |-----|

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //
// concat

const arr1 = [10, 20, 30, 40]
const arr2 = [50, 60, 70, 80]
const arr3 = [90, 100, 110, 120]

const fullArray = arr1.concat(arr2, arr3)

console.log(fullArray)

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //
// splice vs slice

const tags = ['article', 'sport', 'medical', 'applications', 'programming']

const withSlice = tags.slice(0, 3)

console.log(withSlice)
console.log(tags)

const withSplice = tags.splice(0, 3, 'food', 'tv show', )

console.log(withSplice)
console.log(tags)


// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //

// Object.keys

// Object.values

// Object.entries

// ******************************************************************** //
// ******************************************************************** //
// ******************************************************************** //
// async function and await
