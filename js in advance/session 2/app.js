// ****************************************************** //
// **************** Variable Declaration **************** //
// ****************************************************** //

// var

// console.log(username) // undefined

// var username = 'ahmed'

// var username = 'ali' // Do Nothing 

// if (username) {

//     var username = 'mohammed';

//     console.log(username) // mohammed
    
// }

// console.log(username) // mohammed

// let

// console.log(userMail) // Reference Error

let userMail = 'ib@gmail.com';

// let userMail = 'asdghasdghkkfl' // Syntax Error

// if (userMail) {
//     let userMail = 'ib2@gmail.com'
//     console.log(userMail)
// }

// console.log(userMail)

// // const


// const userEmail = 'ib@gmail.com';

// // const userEmail = 'asdghasdghkkfl' // Syntax Error

// if (userEmail) {
//     const userEmail = 'ib2@gmail.com'
//     console.log(userEmail)
// }

// console.log(userEmail)

// userEmail = 'asdfhkajfhsdkjhf' // Type Error



// const in objects ({} || [])

const user = {
    name: 'ali',
    age: 27,
    salary: 4000
}

user.name = 'ahmed' // Accepted

// console.log(user)

// user = {} Error

const users = ['ahmed', 'ali', 'mohammed']


users.push('mario') // Accepted
users[0] = 'mahmude' // Accepted

// console.log(users)

// users = []// Error



// ****************************************************** //
// ******************* arrow function ******************* //
// ****************************************************** //

function defaultFunction () {
    console.log('Default Function')
}

const defaultFunctionAsVariable = function () {}

const arrowFunction = () => {}


// [1, 2, 3, 4].forEach( function (item) {} ) Using Default Function
// [].forEach( (item) => {} ) Using Arrow Function

const fullDefaultFunction = function (name) {
    console.log(name)
}

const fullArrowFunction = name => console.log(name)

const fullArrowFunctionWithMultiParams = (name, age) => {
    console.log(name)
    console.log(age)
    return;
}

const user2 = {
    name: 'ahmed',
    age: 27,
    salary: 5000,
    address: {
        lat: 1234871623746,
        lng: 92572384,
        printAddress: function () {
            console.log(this.lat + ' | ' + this.lng)
        }
    },
    print: function () {
        console.log('Username: ' + this.name + ' | Age: ' + this.age + ' | Salary: '+ this.salary)
    }
}

// user2.print()

// user2.address.printAddress()



const user3 = {
    name: 'mohammed',
    age: 27,
    salary: 5000,
    address: {
        lat: 1234871623746,
        lng: 92572384,
        printThis:  () => {
            console.log(this)
        },

        data: function() {
            return {
                printThis: () => console.log(this)
            }
        }
    },
    
}

// user3.address.printThis();

// const data = user3.address.data()

// data.printThis()





// ****************************************************** //
// ********************* FOR LOOPS ********************** //
// ****************************************************** //

const names = ['ahmed', 'mohammed', 'ali', 'khaled'];

// Normal For

// for (let i = 0;  i < names.length; i ++) {
//     console.log(names[i])
// }

// FOR OF

// for (let name of names) {
//     console.log(name)
// }

// // FOR IN

// for (let nameIndex in names) {
//     console.log(nameIndex)
// }


// ****************************************************** //
// ********************** CLASSES *********************** //
// ****************************************************** //


class User {
    name;
    age;
    salary;

    constructor (name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    printUserData() {
        console.log(this.name, this.age)
    } 

    printUserSalary() {
        console.log(this.salary)
    }
}

const ahmed = new User('ahmed', 30, 4000)

// ahmed.printUserData()
// ahmed.printUserSalary()

// console.log('=========================================')

const mohammed = new User('mohammed', 60, 15000)

// mohammed.printUserData()
// mohammed.printUserSalary()


// function Car(type, model, price) {
//     const carType = type;
//     const carModel = model;
//     const carPrice = price;

//     return {
//         printCarData: function () {
//             console.log(carType)
//             console.log(carModel)
//         },
//         printCarPrice: function () {
//             console.log(carPrice)
//         }
//     }
// }


// const bmw = Car('bmw', 2020, 1200000)


// bmw.printCarData();
// bmw.printCarPrice();


// ****************************************************** //
// ********************** PROMISE *********************** //
// ****************************************************** //


// const checkConnection = new Promise((resolve, reject) => {

//     const connectionSuccess = false
//     setTimeout(() => {
//         if (connectionSuccess) {
//             resolve('Connection Established Successfully')
//         } else {
//             reject('Connection Failed')
//         }
//     }, 1000)
// })

// ** ////////////////////////////////////////////////////////////////////////////

// checkConnection.then(function (result) {
//     console.log(result)
// }).catch(function (error) {
//     console.log(error)
// })



// ****************************************************** //
// ************* FUNCTION REST PARAMETERS *************** //
// ****************************************************** //

// take (x) count of string as parameters
// return all strings passed as single string
// function concatString(s1, s2, s3, s4) {
//     return s1 + ' ' + s2 + ' ' + s3 + ' ' + s4;
// }





function concatString(...strings) {
    let fullString = ''
    
    for (let str of strings) {
        fullString += ' ' + str
    }

    return fullString
}


const fullString = concatString('my', 'name', 'is', 'ibrahem', 'and', 'my', 'age', 'is', '30')

// console.log(fullString)

function printUserDataAsString(userType, ...rest) {



    let restString = ''
    
    for (let str of rest) {
        // restString += ' ' + str

        restString  = restString + ' ' + str
    }

     
    if (userType === 'user') {
        console.log('USER: ' +  restString)
    } else if (userType === 'admin') {
        console.log('ADMIN: ' + restString)
    }
}

// printUserDataAsString('user', 'Name: ahmed', 'Email: ahmed@gmail.com', 'Age:' ,34, 'address: ', 'Haram')
// printUserDataAsString('admin', 'ali', 'ali@gmail.com', 40)


// ****************************************************** //
// ******************* ARRAY METHODS ******************** //
// ****************************************************** //


const usersData = [
    {
        name: 'ahmed',
        email: 'ahmed@gmail.com',
        age: 45,
    },
    {
        name: 'mohmmed',
        email: 'mohmmed@gmail.com',
        age: 33,
    },
    {
        name: 'ali',
        email: 'ali@gmail.com',
        age: 56,
    },
    {
        name: 'mario',
        email: 'mario@gmail.com',
        age: 26,
    },
    {
        name: 'mena',
        email: 'mena@gmail.com',
        age: 46,
    },
    {
        name: 'ibrahem',
        email: 'ibrahem@gmail.com',
        age: 27,
    },
]

let targetUserName = 'ibrahem';
let targetUserEmail = 'ibrahem@gmail.com';


// let targetUser;

// for (let user of usersData) {
//     if (user.name === targetUserName) {
//         targetUser = user
//         break;
//     }
// }


// console.log(targetUser)


// let targetUser;

// for (let user of usersData) {
//     if (user.email === targetUserEmail) {
//         targetUser = user
//         break;
//     }
// }


// console.log(targetUser)

// Array.find()
const targetUser = usersData.find( (userData) =>  userData.email === targetUserEmail)
console.log(targetUser)

// Array.findIndex()
const targetUserIndex = usersData.findIndex( (userData) =>  userData.email === targetUserEmail)
console.log(targetUserIndex)
// Array.filter()

const targetUsers = usersData.filter( (userData) =>  userData.age <= 40 && userData.age >= 20)

console.log(targetUsers)





// ADDITIONAL THINGS

// setTimeout

// setTimeout(() => {
//     console.log('After 5 Sec')
// }, 5000)

// setInterval

let counter = 0

const counterInterval = setInterval(() => {
    counter++
    console.log('After ' + counter + ' Sec')

    if (counter >= 10) {
      clearInterval(counterInterval);
    }
}, 1000)