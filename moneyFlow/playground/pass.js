// let string = 'old';

// let newString = string

// newString = 'new';


// console.log(string)
// console.log(newString)

/**
 * string : old
 * newString: new
 */

// const user1 = {
//     name: 'ahmed',
//     age: 30
// }

// const user2 = user1

// user2.name = 'ali'

// console.log(user1)
// console.log(user2)

/**
 * user1 : { name: 'ahmed', age: 30 }
 * user2: Pointer(user1)
 */


const arr1 = [0, 1, 2, 3, 4]

const arr2 = arr1.slice();

arr2.push(5)

console.log(arr1)

console.log(arr2)

/**
 * arr1: [0, 1, 2, 3, 4]
 * arr2: [0, 1, 2, 3, 4, 5]
 */