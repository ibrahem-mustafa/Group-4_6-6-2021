// Var
var userName = 'ahmed';
var userAge = 15;

// Function

function sum(a, b) {
	var result = a + b;
	console.log('From Sum Method: ' + result);
}

// sum(10, 20)

// var fun1 = function () {

// }

// Array

var arr = ['ahmed', 14, true, {}, function () {}];

var employees = ['ahmed', 'mohammed', 'mario', 'ibrahem'];
var salary = [2000, 4000, 5000, 8000];

// console.log(employees)
// console.log(salary)

// employees.push('max')
// salary.push(6000)

// console.log(employees)
// console.log(salary)

// employees.pop()
// salary.pop()

// console.log(employees)
// console.log(salary)

// Loops

// => For

// for (var i = 0; i < employees.length; i++) {
//     console.log('Employee Name: ' + employees[i] + ' | Salary: ' + salary[i])
// }

// => while
// var currentEmployeeIndex = 0;
// while (currentEmployeeIndex < employees.length) {
//     console.log('Employee Name: ' + employees[currentEmployeeIndex] + ' | Salary: ' + salary[currentEmployeeIndex])
//     currentEmployeeIndex++
// }

// => do while
// var userIsActive = false;
// do {
//     console.log('user Is Activated')
// } while(userIsActive == true)

// if condition

var userAge = 19;

// if (userAge < 18) {
//     console.log('You Are Not Allowed Here')
// } else if (userAge < 20) {
//     console.log('You Are Not Allowed')
// } else if (userAge < 25) {
//     console.log('Not Allowed')
// } else {
//     console.log('Welcome')
// }

// Switch

// var userType = 'admin' // admin || user || moderator || manager

// switch (userType) {
//     case 'admin':
//         console.log('Access All Pages')
//         break;
//     case 'user':
//         console.log('Access Home Page Only')
//         break;
//     case 'moderator':
//         console.log('Access moderators Dashboard')
//         break;
//     case 'manager':
//         console.log('Access Managers Dashboard')
// }

// recursive function


// var count = 0;



// function counter(toNum) {
// 	count++;
// 	console.log(count);
// 	if (count < toNum) {
// 		counter(toNum);
// 	}
// }
// // counter(20)

// // function arguments

// function funWithArguments(x, cb) {
// 	console.log(x);

// 	if (cb) {
// 		cb();
// 	}
// }

// funWithArguments('ahmed');
// funWithArguments(12);
// funWithArguments(true);
// funWithArguments({
// 	name: 'ahmed',
// 	salary: 2000,
// });
// funWithArguments([10, 20, 40]);

// var callback = function () {
// 	console.log("I'm a callback function ");
// };
// funWithArguments('bla bla', callback);

// Self Invoking Function

// (function declaration)()

// console.log('Hello');

// (function () {
//     console.log('Self Invoked Function')
// })()


// this keyword




var user = {
    name: 'ahemd',
    age: 26,
    salary: 8000,
    location: {
        lng: 123624,
        lat: 95832537,
        printLocation: function () {
            console.log(this.lng + ' | ' + this.lat )
            
        }
    },
    print: function () {
        console.log('Username: ' + this.name + ' | Age: ' + this.age + ' | Salary: ' + this.salary)
    }
}

        
// user.print();

// user.location.printLocation()


// HOISTING
// var count 

// console.log(count)

// count = 0;

// sayHi()

// function sayHi() {
//     console.log('hi')
// }


// sayHello()

// var sayHello = function () {
//     console.log('Hello')
// }

// sayHello()

// GUI => Graphical User Interface
// CLI => Command Line Interface

// API => Application programming Interface
/**         API                                                  API
 * [  TODO APPLICATION  ]   <======== API ==========>   [ACTIVITY APPLICATION]
 */

// fetch from api
// https://jsonplaceholder.typicode.com/todos


fetch("https://jsonplaceholder.typicode.com/todos")
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
    var todoList = document.querySelector('.todos')
    
    data.forEach(function (todo) {
        // create (li) element
        var li = document.createElement('li')
        // assign todo title as text to (li)
        li.textContent = todo.title
        // append (li) to todoList (ul)
        todoList.appendChild(li)
    })

  });

// const p  = document.getElementById('text')


// console.log(p.innerText)
// console.log(p.textContent)
// console.log(p.innerHTML)

// p.innerText = 'Welcome'
// p.textContent = 'Welcome Again'
// p.innerHTML = 'Hello <span> World</span>'



